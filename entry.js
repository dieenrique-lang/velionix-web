import * as React from 'react';
import { createRoot } from 'react-dom/client';
import MagicRings from './components/MagicRings.js';

const rootEl = document.getElementById('lightfall-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    React.createElement(MagicRings, {
      color: "#fc42ff",
      colorTwo: "#42fcff",
      ringCount: 6,
      speed: 1,
      attenuation: 10,
      lineThickness: 2,
      baseRadius: 0.35,
      radiusStep: 0.1,
      scaleRate: 0.1,
      opacity: 1,
      blur: 0,
      noiseAmount: 0.1,
      rotation: 0,
      ringGap: 1.5,
      fadeIn: 0.7,
      fadeOut: 0.5,
      followMouse: false,
      mouseInfluence: 0.2,
      hoverScale: 1.2,
      parallax: 0.05,
      clickBurst: false
    })
  );
}
