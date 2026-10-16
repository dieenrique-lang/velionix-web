/* Commercial widget only. No provider key, storage, HTML execution or model URLs. */
(function () {
  'use strict';
  // Public UI is enabled only after the Worker pilot admission is live.
  var PUBLIC_CHAT_ENABLED = true;
  var endpoint = 'https://chat.velionix.cl/v1/chat';
  var sessionEndpoint = 'https://chat.velionix.cl/v1/session/start';
  var bubble = document.getElementById('chatBubble'), box = document.getElementById('chatBox');
  var body = document.getElementById('chatBody'), input = document.getElementById('chatInput');
  var send = document.getElementById('chatSend');
  var status = document.getElementById('webChatStatus'), retry = document.getElementById('chatRetry');
  var composer = document.getElementById('chatComposer');
  var unavailableContact = document.getElementById('chatUnavailableContact');
  var availability = document.getElementById('chatAvailability');
  var history = [], sessionToken = null, sessionExpiresAt = 0, lastRequest = null, controller = null;
  var cooldownUntil = 0, cooldownTimer = null;
  var generation = 0, busy = false;
  var actions = {
    demo: ['Probar agente', 'Hola, vengo desde la web de Velionix y quiero probar cómo funciona el agente de IA.'],
    meeting: ['Agendar reunión', 'Hola, vengo desde la web de Velionix y me gustaría agendar una reunión para conocer el servicio.'],
    human: ['Atención humana', 'Hola, vengo desde la web de Velionix y me gustaría hablar con una persona.'],
    register: ['Crear cuenta', null]
  };

  function link(id) {
    var item = actions[id], anchor = document.createElement('a');
    anchor.textContent = item[0];
    anchor.href = id === 'register' ? 'https://app.velionix.cl/register' : 'https://wa.me/56920584589?text=' + encodeURIComponent(item[1]);
    anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; return anchor;
  }
  function message(text, sender) {
    var element = document.createElement('div'); element.className = 'msg ' + sender;
    element.textContent = text; body.appendChild(element); body.scrollTop = body.scrollHeight; return element;
  }
  function setBusy(value) {
    busy = value; send.disabled = value || Date.now() < cooldownUntil; input.disabled = value;
    retry.disabled = send.disabled; body.setAttribute('aria-busy', String(value));
    status.textContent = value ? 'Velionix está escribiendo…' :
      (Date.now() < cooldownUntil ? 'Puedes volver a enviar en ' + Math.ceil((cooldownUntil - Date.now()) / 1000) + ' s.' :
      (PUBLIC_CHAT_ENABLED ? '' : 'El asistente estará disponible próximamente.'));
  }
  function waitForLimit(response, fallbackSeconds) {
    var seconds = Number(response.headers.get('Retry-After'));
    if (!Number.isFinite(seconds) || seconds <= 0) seconds = fallbackSeconds;
    seconds = Math.max(1, Math.min(300, Math.ceil(seconds)));
    cooldownUntil = Math.max(cooldownUntil, Date.now() + seconds * 1000);
    clearInterval(cooldownTimer);
    cooldownTimer = setInterval(function () {
      if (!busy) setBusy(false);
      if (Date.now() >= cooldownUntil) { clearInterval(cooldownTimer); cooldownTimer = null; }
    }, 1000);
    return seconds;
  }
  // En iOS el teclado reduce visualViewport, pero un fixed con dvh puede quedar detrás.
  // Recalcular el alto y la posición del panel según el área realmente visible.
  function fitMobileViewport() {
    if (box.hidden || window.innerWidth > 480) {
      box.classList.remove('mobile-viewport');
      box.style.removeProperty('--chat-vv-top');
      box.style.removeProperty('--chat-vv-height');
      return;
    }
    var viewport = window.visualViewport;
    var visibleHeight = viewport ? viewport.height : window.innerHeight;
    var visibleTop = viewport ? viewport.offsetTop : 0;
    var keyboardOpen = document.activeElement === input && viewport && viewport.height < window.innerHeight - 100;
    var height = Math.max(160, Math.min(680, visibleHeight - 12, keyboardOpen ? visibleHeight - 12 : visibleHeight * 0.82));
    var top = visibleTop + Math.max(0, visibleHeight - height);
    box.style.setProperty('--chat-vv-top', Math.round(top) + 'px');
    box.style.setProperty('--chat-vv-height', Math.round(height) + 'px');
    box.classList.add('mobile-viewport');
  }
  function open() {
    box.hidden = false; box.classList.add('open'); bubble.style.display = 'none';
    bubble.setAttribute('aria-expanded', 'true');
    fitMobileViewport();
    // No abrir el teclado automáticamente al mostrar el chat en móvil.
    if (PUBLIC_CHAT_ENABLED && window.innerWidth > 480) input.focus();
    else if (!PUBLIC_CHAT_ENABLED) unavailableContact.querySelector('a').focus();
  }
  function close() {
    if (document.activeElement === input) input.blur();
    box.classList.remove('open'); box.hidden = true; bubble.style.display = 'flex';
    fitMobileViewport();
    bubble.setAttribute('aria-expanded', 'false'); bubble.focus();
  }
  function greeting() {
    message('¡Hola! 👋 Soy Veli, la asistente de IA de Velionix. ¿En qué te puedo ayudar hoy 😊?', 'bot');
  }
  function reset() {
    generation++; if (controller) controller.abort(); controller = null;
    history = []; sessionToken = null; sessionExpiresAt = 0; lastRequest = null; retry.hidden = true;
    body.replaceChildren(); setBusy(false);
    if (PUBLIC_CHAT_ENABLED) { greeting(); input.focus(); }
    else setUnavailableView();
  }
  function setUnavailableView() {
    availability.textContent = 'Disponible próximamente';
    availability.classList.add('is-unavailable');
    bubble.setAttribute('aria-label', 'Ver disponibilidad del asistente');
    composer.hidden = true;
    unavailableContact.hidden = false; retry.hidden = true;
    status.textContent = 'El asistente estará disponible próximamente.';
  }
  function setPublicView() {
    availability.textContent = 'Asistente de atención';
    availability.classList.remove('is-unavailable');
    bubble.setAttribute('aria-label', 'Abrir chat');
    composer.hidden = false;
    unavailableContact.hidden = true;
    status.textContent = '';
  }
  function boundedHistory(text) {
    var selected = history.slice(-12), encoder = new TextEncoder();
    var size = function () { return encoder.encode(text).length + 32 + selected.reduce(function (sum, item) { return sum + encoder.encode(item.content).length + 32; }, 0); };
    while (selected.length && size() > 1700) selected.splice(0, 2);
    return selected;
  }
  async function request(payload, display) {
    if (!PUBLIC_CHAT_ENABLED || busy || Date.now() < cooldownUntil) return;
    var current = generation, sessionReady = false; setBusy(true); retry.hidden = true; lastRequest = payload;
    if (display) message(payload.message, 'user');
    var active = new AbortController(); controller = active;
    var timer = setTimeout(function () { active.abort(); }, 45000);
    try {
      var headers = { 'Content-Type': 'application/json' };
      if (!sessionToken || sessionExpiresAt <= Date.now() + 5000) {
        var sessionResponse = await fetch(sessionEndpoint, { method: 'POST', mode: 'cors', credentials: 'omit',
          cache: 'no-store', headers: headers, body: '{}', signal: active.signal });
        var sessionData = await sessionResponse.json();
        if (generation !== current) return;
        if (!sessionResponse.ok || typeof sessionData.sessionToken !== 'string' || sessionData.error) {
          if (sessionResponse.status === 429) {
            var sessionWait = waitForLimit(sessionResponse, 60);
            message('Se alcanzó el límite temporal. Puedes volver a enviar en ' + sessionWait + ' segundos.', 'bot');
          } else message('El asistente no está disponible ahora. Escríbenos por WhatsApp.', 'bot');
          retry.hidden = true; lastRequest = null; return;
        }
        sessionToken = sessionData.sessionToken;
        sessionExpiresAt = Number.isFinite(sessionData.expiresAt) ? sessionData.expiresAt : 0;
      }
      payload.sessionToken = sessionToken; sessionReady = true;
      var response = await fetch(endpoint, { method: 'POST', mode: 'cors', credentials: 'omit',
        cache: 'no-store', headers: headers, body: JSON.stringify(payload), signal: active.signal });
      var data = await response.json();
      if (generation !== current) return;
      if (typeof data.sessionToken === 'string') sessionToken = data.sessionToken;
      if (!response.ok || data.error) {
        var code = data.error && data.error.code;
        if (code === 'DUPLICATE_REQUEST') {
          message('Esta solicitud ya fue procesada o sigue en curso. No la reenviaré automáticamente. Puedes iniciar un nuevo turno.', 'bot');
          lastRequest = null;
        } else if (code === 'SESSION_BUSY' || code === 'CONCURRENCY_LIMIT' || code === 'GRANT_CONCURRENCY_LIMIT' ||
            code === 'RATE_LIMIT' || code === 'PROVIDER_RATE_LIMITED' || response.status === 429) {
          var wait = waitForLimit(response, code === 'PROVIDER_RATE_LIMITED' ? 30 : 45);
          message(code === 'PROVIDER_RATE_LIMITED' ?
            'El proveedor de IA está ocupado. Puedes volver a enviar en ' + wait + ' segundos o escribirnos por WhatsApp.' :
            code === 'SESSION_BUSY' ? 'Hay una solicitud en curso. Puedes volver a enviar en ' + wait + ' segundos.' :
            'Se alcanzó un límite temporal. Puedes volver a enviar en ' + wait + ' segundos.', 'bot');
          lastRequest = null; retry.hidden = true;
        } else {
          if (code === 'INVALID_SESSION') { sessionToken = null; sessionExpiresAt = 0; }
          var serviceUnavailable = [401, 403, 503].indexOf(response.status) !== -1;
          message(code === 'INPUT_LIMIT' ? 'El contexto es demasiado largo. Acorta el mensaje o inicia una nueva conversación.' :
            code === 'INVALID_SESSION' ? 'La sesión venció. Inicia una nueva conversación.' :
            serviceUnavailable ? 'El asistente no está disponible ahora. Escríbenos por WhatsApp.' :
            'No pude confirmar el resultado. Puedes recuperar esta solicitud o escribirnos por WhatsApp.', 'bot');
          retry.hidden = serviceUnavailable || ['INPUT_LIMIT', 'INVALID_SESSION', 'INVALID_MESSAGE', 'INVALID_HISTORY'].indexOf(code) !== -1;
          if (retry.hidden) lastRequest = null;
        }
        return;
      }
      if (typeof data.reply !== 'string' || data.reply.length > 10000 || data.requestId !== payload.requestId) throw new Error('Invalid response');
      var element = message(data.reply, 'bot');
      if (Array.isArray(data.actions)) data.actions.slice(0, 3).forEach(function (id) {
        if (Object.prototype.hasOwnProperty.call(actions, id)) {
          var row = document.createElement('div'); row.className = 'web-chat-actions'; row.appendChild(link(id)); element.appendChild(row);
        }
      });
      history = payload.history.concat([{ role: 'user', content: payload.message }, { role: 'assistant', content: data.reply }]).slice(-12);
      lastRequest = null;
    } catch (_) {
      if (generation !== current) return;
      if (!sessionReady) {
        message('El asistente no está disponible ahora. Escríbenos por WhatsApp.', 'bot');
        retry.hidden = true; lastRequest = null;
      } else {
        message('No pude confirmar el resultado. El reintento conserva el mismo identificador para evitar una segunda llamada de IA.', 'bot');
        retry.hidden = false;
      }
    } finally {
      clearTimeout(timer);
      if (generation === current) { controller = null; setBusy(false); }
    }
  }
  function submit(text) {
    if (!PUBLIC_CHAT_ENABLED || busy || Date.now() < cooldownUntil) return; text = text.trim(); if (!text) return;
    if (Array.from(text).length > 1200) { status.textContent = 'Máximo 1.200 caracteres.'; return; }
    input.value = '';
    request({ requestId: crypto.randomUUID(), sessionToken: sessionToken, message: text, history: boundedHistory(text) }, true);
  }
  // Escuchar cambios de teclado y orientación sin modificar el backend ni las solicitudes.
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', fitMobileViewport);
    window.visualViewport.addEventListener('scroll', fitMobileViewport);
  }
  window.addEventListener('resize', fitMobileViewport);
  input.addEventListener('focus', fitMobileViewport);
  bubble.addEventListener('click', open);
  document.getElementById('chatClose').addEventListener('click', close);
  send.addEventListener('click', function () { submit(input.value); });
  input.addEventListener('keydown', function (event) { if (event.key === 'Enter' && !event.isComposing) { event.preventDefault(); submit(input.value); } });
  box.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(); });
  retry.addEventListener('click', function () { if (lastRequest) request(lastRequest, false); });
  window.addEventListener('pagehide', function () {
    generation++; sessionToken = null; sessionExpiresAt = 0; history = []; lastRequest = null;
    if (controller) controller.abort(); controller = null;
  });
  window.addEventListener('pageshow', function (event) { if (event.persisted) reset(); });
  body.replaceChildren();
  if (PUBLIC_CHAT_ENABLED) { setPublicView(); greeting(); }
  else setUnavailableView();
})();

