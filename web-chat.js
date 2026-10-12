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
  var history = [], sessionToken = null, lastRequest = null, controller = null;
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
    busy = value; send.disabled = value; input.disabled = value;
    retry.disabled = value; body.setAttribute('aria-busy', String(value));
    status.textContent = value ? 'Velionix está escribiendo…' :
      (PUBLIC_CHAT_ENABLED ? '' : 'El asistente estará disponible próximamente.');
  }
  function open() {
    box.hidden = false; box.classList.add('open'); bubble.style.display = 'none';
    bubble.setAttribute('aria-expanded', 'true');
    if (PUBLIC_CHAT_ENABLED) input.focus();
    else unavailableContact.querySelector('a').focus();
  }
  function close() {
    box.classList.remove('open'); box.hidden = true; bubble.style.display = 'flex';
    bubble.setAttribute('aria-expanded', 'false'); bubble.focus();
  }
  function greeting() {
    message('¡Hola! Soy el asistente comercial de Velionix. ¿Qué te gustaría conocer? Evita compartir datos sensibles.', 'bot');
  }
  function reset() {
    generation++; if (controller) controller.abort(); controller = null;
    history = []; sessionToken = null; lastRequest = null; retry.hidden = true;
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
    if (!PUBLIC_CHAT_ENABLED || busy) return;
    var current = generation, sessionReady = false; setBusy(true); retry.hidden = true; lastRequest = payload;
    if (display) message(payload.message, 'user');
    var active = new AbortController(); controller = active;
    var timer = setTimeout(function () { active.abort(); }, 45000);
    try {
      var headers = { 'Content-Type': 'application/json' };
      var sessionResponse = await fetch(sessionEndpoint, { method: 'POST', mode: 'cors', credentials: 'omit',
        cache: 'no-store', headers: headers, body: '{}', signal: active.signal });
      var sessionData = await sessionResponse.json();
      if (!sessionResponse.ok || typeof sessionData.sessionToken !== 'string' || sessionData.error) {
        if (generation === current) {
          message('El asistente no está disponible ahora. Escríbenos por WhatsApp.', 'bot');
          retry.hidden = true; lastRequest = null;
        }
        return;
      }
      sessionToken = sessionData.sessionToken; payload.sessionToken = sessionToken; sessionReady = true;
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
        } else {
          var serviceUnavailable = [401, 403, 503].indexOf(response.status) !== -1;
          message(code === 'INPUT_LIMIT' ? 'El contexto es demasiado largo. Acorta el mensaje o inicia una nueva conversación.' :
            code === 'INVALID_SESSION' ? 'La sesión venció. Inicia una nueva conversación.' :
            serviceUnavailable ? 'El asistente no está disponible ahora. Escríbenos por WhatsApp.' :
            'No pude confirmar el resultado. Puedes recuperar esta solicitud o escribirnos por WhatsApp.', 'bot');
          retry.hidden = serviceUnavailable || ['INPUT_LIMIT', 'INVALID_SESSION', 'INVALID_MESSAGE', 'INVALID_HISTORY'].indexOf(code) !== -1;
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
    if (!PUBLIC_CHAT_ENABLED || busy) return; text = text.trim(); if (!text) return;
    if (Array.from(text).length > 1200) { status.textContent = 'Máximo 1.200 caracteres.'; return; }
    input.value = '';
    request({ requestId: crypto.randomUUID(), sessionToken: sessionToken, message: text, history: boundedHistory(text) }, true);
  }
  bubble.addEventListener('click', open);
  document.getElementById('chatClose').addEventListener('click', close);
  send.addEventListener('click', function () { submit(input.value); });
  input.addEventListener('keydown', function (event) { if (event.key === 'Enter' && !event.isComposing) { event.preventDefault(); submit(input.value); } });
  box.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(); });
  retry.addEventListener('click', function () { if (lastRequest) request(lastRequest, false); });
  window.addEventListener('pagehide', function () {
    generation++; sessionToken = null; history = []; lastRequest = null;
    if (controller) controller.abort(); controller = null;
  });
  window.addEventListener('pageshow', function (event) { if (event.persisted) reset(); });
  body.replaceChildren();
  if (PUBLIC_CHAT_ENABLED) { setPublicView(); greeting(); }
  else setUnavailableView();
})();
