import React from 'react';
import './LogoLoop.css';

export const LogoLoop = ({ logos, logoHeight = 40, gap = 40, fadeOut = true }) => {
  // Use 8 copies (4 + 4) to ensure the marquee content is wide enough for any screen size,
  // preventing it from cutting off early.
  const copies = Array.from({ length: 8 });

  return (
    <div className={`logoloop-css-container ${fadeOut ? 'logoloop-fade' : ''}`} style={{ '--gap': `${gap}px`, '--height': `${logoHeight}px` }}>
      <div className="logoloop-css-track">
        {copies.map((_, listIndex) => (
          <ul key={listIndex} className="logoloop-css-list" aria-hidden={listIndex > 0 ? "true" : undefined}>
            {logos.map((logo, i) => (
              <li key={`${listIndex}-${i}`} className="logoloop-css-item">
                <img src={logo.src} alt={logo.alt || ''} loading="eager" width="200" height="60" style={{ height: 'var(--height)', width: 'auto', objectFit: 'contain' }} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
