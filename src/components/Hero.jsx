import React from 'react';
import { landingContent } from '../content';
import foto1 from '../assets/hero_horizontal.png';

export default function Hero() {
  const { hero } = landingContent;
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-image-wrapper">
        <div className="hero-bg-image-el image-placeholder">n/a</div>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="logo-small">{hero.logoText1}<br/><span>{hero.logoText2}</span></div>
          <h1 className="title-xl">{hero.headline}</h1>
          <p style={{whiteSpace: 'pre-line'}}>{hero.description}</p>
          <a href="#form-section" className="btn-primary">{hero.buttonLabel}</a>
        </div>
        <div className="hero-visual">
          <div className="hero-person image-placeholder">n/a</div>
        </div>
      </div>
    </section>
  );
}
