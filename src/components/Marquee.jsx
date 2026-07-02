import React from 'react';
import { landingContent } from '../content';

export default function Marquee() {
  const trackContent = Array(10).fill(landingContent.marquee).join(' ');
  return (
    <div className="marquee">
      <div className="marquee-track">{trackContent}</div>
      <div className="marquee-track">{trackContent}</div>
    </div>
  );
}
