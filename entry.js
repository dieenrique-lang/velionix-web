import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Lightfall from './components/Lightfall.js';

const rootEl = document.getElementById('lightfall-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    React.createElement(Lightfall, {
        colors: ['#A6C8FF', '#5227FF', '#FF9FFC'],
        backgroundColor: '#0A29FF',
        speed: 1,
        streakCount: 8,
        streakWidth: 1,
        streakLength: 1,
        glow: 1,
        density: 1,
        twinkle: 1,
        zoom: 2,
        backgroundGlow: 1,
        opacity: 1,
        mouseInteraction: true,
        mouseStrength: 1,
        mouseRadius: 0.6
    })
  );
}
