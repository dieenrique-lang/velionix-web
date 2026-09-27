import MagicBento from './components/MagicBento.jsx';import * as React from 'react';
import { createRoot } from 'react-dom/client';
import LightRays from './components/LightRays.jsx';
import SpecularButton from './components/SpecularButton.jsx';

const ResponsiveLightRays = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return React.createElement(LightRays, {
    raysOrigin: 'top',
    raysColor: '#00e5ff', 
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

const renderBentoGrid = (selector, cardSelector, glowColor) => {
  const grid = document.querySelector(selector);
  if (!grid) return;
  const cardsData = [];
  grid.querySelectorAll(cardSelector).forEach(card => {
    cardsData.push({ content: card.innerHTML, color: 'var(--card)', className: Array.from(card.classList).join(' ') });
  });
  grid.innerHTML = '';
  const root = createRoot(grid);
  root.render(React.createElement(MagicBento, {
    cards: cardsData,
    glowColor: glowColor,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    enableTilt: true,
    enableMagnetism: true,
    clickEffect: true,
    textAutoHide: false
  }));
};

renderBentoGrid('.features-grid', '.feature', '0, 229, 255');
renderBentoGrid('.grid-3-uc', '.uc', '168, 85, 247');

