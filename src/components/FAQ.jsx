import React, { useState } from 'react';
import { landingContent } from '../content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>As perguntas que você pode estar <span className="italic">fazendo agora:</span></h2>
        <div className="faq-list">
          {landingContent.faq.items.map((item, idx) => (
            <div className={`faq-item ${openIndex === idx ? 'active' : ''}`} key={idx}>
              <div className="faq-question" onClick={() => toggle(idx)}>
                {item.q}
              </div>
              <div className="faq-answer">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
