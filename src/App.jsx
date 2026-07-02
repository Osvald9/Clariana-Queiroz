import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PainSection from './components/PainSection';
import FAQ from './components/FAQ';
import OtherSections from './components/OtherSections';
import './index.css';

function App() {
  return (
    <div>
      <Hero />
      <Marquee />
      <PainSection />
      <OtherSections />
      <FAQ />
      
      {/* RODAPÉ */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 | Todos os direitos reservados | Desenvolvido para Osvaldo Cardoso</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
