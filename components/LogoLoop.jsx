import React from 'react';
import './LogoLoop.css';

export const LogoLoop = ({ logos, logoHeight = 40, gap = 40, fadeOut = true }) => {
  return (
    <div className={`logoloop-css-container ${fadeOut ? 'logoloop-fade' : ''}`} style={{ '--gap': `${gap}px`, '--height': `${logoHeight}px` }}>
      <div className="logoloop-css-track">
        <ul className="logoloop-css-list">
          {logos.map((logo, i) => (
            <li key={i} className="logoloop-css-item">
              <img src={logo.src} alt={logo.alt || ''} loading="lazy" width="200" height="60" style={{ height: 'var(--height)', width: 'auto', objectFit: 'contain' }} />
            </li>
          ))}
        </ul>
        <ul className="logoloop-css-list" aria-hidden="true">
          {logos.map((logo, i) => (
            <li key={`copy-${i}`} className="logoloop-css-item">
              <img src={logo.src} alt={logo.alt || ''} loading="lazy" width="200" height="60" style={{ height: 'var(--height)', width: 'auto', objectFit: 'contain' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoLoop;
