import LogoLoop from './components/LogoLoop.jsx';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import LightRays from './components/LightRays.jsx';
import SpecularButton from './components/SpecularButton.jsx';
import { GlobalSpotlight } from './components/MagicBento.jsx';
import { gsap } from 'gsap';

const ResponsiveLightRays = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return React.createElement(LightRays, {
    raysOrigin: 'top',
    raysColor: isMobile ? '#5227FF' : '#00e5ff', 
    raysSpeed: 0.8,
    lightSpread: isMobile ? 1.0 : 1.5,
    rayLength: 1.5,
    pulsating: true,
    fadeDistance: 0.8,
    saturation: isMobile ? 0.6 : 1,
    followMouse: !isMobile,
    mouseInfluence: isMobile ? 0.0 : 0.5,
    noiseAmount: 0.05,
    distortion: 0.1,
    lightMode: false
  });
};

const rootEl = document.getElementById('lightfall-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(React.createElement(ResponsiveLightRays));
}

const contactBtnRoot = document.getElementById('contact-btn-root');
if (contactBtnRoot) {
  const root = createRoot(contactBtnRoot);
  root.render(
    React.createElement('a', { href: 'https://wa.me/56920584589?text=Hola%20Velionix!%20Necesito%20mas%20informaci%C3%B3n%20para%20automatizar%20el%20Whatsapp%20de%20mi%20negocio.', target: '_blank', rel: 'noopener', style: {textDecoration: 'none'} }, 
      React.createElement(SpecularButton, null, 'Contáctanos')
    )
  );
}

// Bento Logic wrapper
const createParticleElement = (x, y, color) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `position: absolute; width: 4px; height: 4px; border-radius: 50%; background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6); pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;`;
  return el;
};

const applyCardEffects = (element, glowColor) => {
  let isHovered = false;
  let particlesInitialized = false;
  let memoizedParticles = [];
  let activeParticles = [];
  let timeouts = [];
  let magnetismAnimation = null;

  element.classList.add('magic-bento-card--border-glow', 'particle-container');
  element.style.setProperty('--glow-color', glowColor);

  const clearAllParticles = () => {
    timeouts.forEach(clearTimeout);
    timeouts = [];
    magnetismAnimation?.kill();
    activeParticles.forEach(particle => {
      gsap.to(particle, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => particle.parentNode?.removeChild(particle) });
    });
    activeParticles = [];
  };

  const animateParticles = () => {
    if (!particlesInitialized) {
      const { width, height } = element.getBoundingClientRect();
      memoizedParticles = Array.from({ length: 12 }, () => createParticleElement(Math.random() * width, Math.random() * height, glowColor));
      particlesInitialized = true;
    }
    memoizedParticles.forEach((particle, index) => {
      timeouts.push(setTimeout(() => {
        if (!isHovered) return;
        const clone = particle.cloneNode(true);
        element.appendChild(clone);
        activeParticles.push(clone);
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, index * 100));
    });
  };

  element.addEventListener('mouseenter', () => {
    isHovered = true;
    animateParticles();
    gsap.to(element, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
  });

  element.addEventListener('mouseleave', () => {
    isHovered = false;
    clearAllParticles();
    gsap.to(element, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
  });

  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    gsap.to(element, { rotateX: ((y - centerY) / centerY) * -10, rotateY: ((x - centerX) / centerX) * 10, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
    magnetismAnimation = gsap.to(element, { x: (x - centerX) * 0.05, y: (y - centerY) * 0.05, duration: 0.3, ease: 'power2.out' });
  });

  element.addEventListener('click', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
    const ripple = document.createElement('div');
    ripple.style.cssText = `position: absolute; width: ${maxDistance * 2}px; height: ${maxDistance * 2}px; border-radius: 50%; background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%); left: ${x - maxDistance}px; top: ${y - maxDistance}px; pointer-events: none; z-index: 1000;`;
    element.appendChild(ripple);
    gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
  });
};

const attachBentoAnimations = (gridSelector, cardSelector, glowColor) => {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  
  grid.classList.add('bento-section');
  grid.querySelectorAll(cardSelector).forEach(card => {
    card.classList.add('magic-bento-card');
    if (window.innerWidth >= 768) {
      applyCardEffects(card, glowColor);
    }
  });

  const spotlightRoot = document.createElement('div');
  document.body.appendChild(spotlightRoot);
  createRoot(spotlightRoot).render(
    React.createElement(GlobalSpotlight, { 
      gridRef: { current: grid }, 
      glowColor: glowColor, 
      disableAnimations: window.innerWidth < 768, 
      enabled: true, 
      spotlightRadius: 300 
    })
  );
};

attachBentoAnimations('.features-grid', '.feature', '0, 229, 255');
attachBentoAnimations('.grid-3-uc', '.uc', '168, 85, 247');

const logoLoopRoot = document.getElementById('logo-loop-root');
if (logoLoopRoot) {
  const imageLogos = [
    { src: './static/chatgpt_1.png', alt: 'ChatGPT 1' },
    { src: './static/chatgpt_2.png', alt: 'ChatGPT 2' },
    { src: './static/chatgpt_3.png', alt: 'ChatGPT 3' },
    { src: './static/ycloud2.png', alt: 'YCloud' }
  ];
  const root = createRoot(logoLoopRoot);
  root.render(
    React.createElement('div', { style: { height: '100px', position: 'relative', overflow: 'hidden'} },
      React.createElement(LogoLoop, {
        logos: imageLogos,
        speed: 60,
        direction: 'left',
        logoHeight: 60,
        gap: 60,
        hoverSpeed: 0,
        scaleOnHover: true,
        fadeOut: true,
        fadeOutColor: '#0b0b0b'
      })
    )
  );
}

