import React from 'react';
import { landingContent } from '../content';

export default function PainSection() {
  const pain = landingContent.pain;
  return (
    <section className="pain-section" id="pain">
      <div className="container narrow">
        <h2 className="title-lg">Talvez você não seja difícil.<br/>Talvez você só nunca tenha <span className="italic">entendido como foi formada.</span></h2>
        <p style={{marginBottom: '40px', color: 'var(--text-soft)', fontSize: '18px'}}>{pain.subtitle}</p>
        <div className="pain-grid">
          {pain.cards.map((card, idx) => (
            <article className="pain-card" key={idx}>
              <span className="icon-x">×</span>
              <p dangerouslySetInnerHTML={{ __html: card.text.replace(/reage de formas|padrões se repetindo|culpa por sentir demais|mesmo lugar emocional|certas situações te afetam|algo em você pedindo/gi, "<strong>$&</strong>") }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
