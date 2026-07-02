import React, { useState, useEffect } from 'react';

export default function MobileIndex() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'hero', name: 'Início', label: '01' },
    { id: 'pain', name: 'Sintomas e Padrões', label: '02' },
    { id: 'truth', name: 'Essência vs Trauma', label: '03' },
    { id: 'benefits', name: 'Benefícios', label: '04' },
    { id: 'method', name: 'O Método', label: '05' },
    { id: 'pillars', name: 'Os 5 Pilares', label: '06' },
    { id: 'levels', name: 'Níveis de Percepção', label: '07' },
    { id: 'pricing-top', name: 'Valor da Mentoria', label: '08' },
    { id: 'results', name: 'Resultados Esperados', label: '09' },
    { id: 'identity', name: 'Autoconhecimento Real', label: '10' },
    { id: 'implementation', name: 'Como Funciona', label: '11' },
    { id: 'not-course', name: 'Diferenciais', label: '12' },
    { id: 'bonus', name: 'Bônus Exclusivos', label: '13' },
    { id: 'mentor', name: 'Clariana Queiroz', label: '14' },
    { id: 'profiles', name: 'Para Quem É', label: '15' },
    { id: 'guarantee', name: 'Garantia de Satisfação', label: '16' },
    { id: 'form-section', name: 'Fazer Inscrição', label: '17' },
    { id: 'faq', name: 'Dúvidas Frequentes', label: '18' }
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Prevent background scroll when index menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Index Button - Mobile Only */}
      <button 
        className="mobile-index-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir índice de navegação"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span style={{ marginLeft: '6px' }}>ÍNDICE</span>
      </button>

      {/* Dark backdrop overlay */}
      {isOpen && (
        <div className="mobile-index-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Slide-up Index Drawer */}
      <div className={`mobile-index-panel ${isOpen ? 'open' : ''}`}>
        <div className="mobile-index-header">
          <h3>ÍNDICE DA MENTORIA</h3>
          <button className="mobile-index-close" onClick={() => setIsOpen(false)} aria-label="Fechar índice">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-index-body">
          <p className="mobile-index-intro">Selecione uma seção para navegar rapidamente:</p>
          <nav className="mobile-index-nav">
            <ul>
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button onClick={() => handleScroll(sec.id)}>
                    <span className="number">{sec.label}</span>
                    <span className="name">{sec.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
