import * as React from 'react';
import { createRoot } from 'react-dom/client';
import GhostFibers from './components/GhostFibers.js';

const ResponsiveGhostFibers = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return React.createElement(GhostFibers, {
    lineColor: "#140E35",
    glowColor: isMobile ? "#181a50" : "#3437A0", // Darker glow on mobile
    speed: 0.2,
    scale: 2,
    rotation: 0,
    rotationSpeed: 0.25,
    layers: 4,
    waveAmplitude: 0.015,
    waveFrequency: 3,
    waveSpeed: 0.15,
    layerSpeed: 0.08,
    twist: 0.1,
    twistFrequency: 5,
    twistSpeed: 1.2,
    lineFrequency: 5,
    lineSpacing: 2,
    lineSharpness: 16,
    glowFalloff: 10,
    glowIntensity: isMobile ? 0.7 : 1.6, // Less intense on mobile
    brightness: isMobile ? 1.0 : 2.0, // Lower brightness on mobile
    blueBoost: 1.25,
    vignette: 0.8,
    grain: 0.05,
    dpr: 1
  });
};

const rootEl = document.getElementById('lightfall-root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(React.createElement(ResponsiveGhostFibers));
}
