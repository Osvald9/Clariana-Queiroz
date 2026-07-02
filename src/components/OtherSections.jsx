import React from 'react';
import { landingContent } from '../content';
import bandeirasImg from '../assets/bandeiras.png';
import cardNature from '../assets/card_nature.png';
import cardClarity from '../assets/card_clarity.png';
import cardStrength from '../assets/card_strength.png';
import mentorVertical from '../assets/foto1.jpg';

// Mosaic assets
import mosaic1 from '../assets/mosaic_1.png';
import mosaic2 from '../assets/mosaic_2.png';
import mosaic3 from '../assets/mosaic_3.png';
import mosaic4 from '../assets/mosaic_4.png';
import mosaic5 from '../assets/mosaic_5.png';
import mosaic6 from '../assets/mosaic_6.png';

// Bonus assets
import bonusClasses from '../assets/bonus_classes.png';
import bonusExercises from '../assets/bonus_exercises.png';
import bonusBible from '../assets/bonus_bible.png';

function PricingCard({ bandeirasImg }) {
  return (
    <div className="premium-pricing-card">
      {/* Lock Icon */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', marginTop: '10px' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M8 10V6.5C8 4.5 9.5 3 11.5 3C13.5 3 15 4.5 15 6.5" stroke="var(--button-green)" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="5" y="10" width="13" height="10" rx="2.5" stroke="var(--button-green)" strokeWidth="2.5" fill="none" />
          <circle cx="11.5" cy="14.5" r="1.5" fill="var(--button-green)" />
        </svg>
      </div>

      {/* Unlock headline */}
      <h3 style={{
        fontFamily: 'var(--font-body)',
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '1.25',
        color: '#ffffff',
        margin: '0 0 24px',
        maxWidth: '300px'
      }}>
        Desbloqueie seu acesso com <span style={{ color: 'var(--button-green)', fontWeight: '700' }}>50% de desconto!</span>
      </h3>

      {/* Original crossed-out price */}
      <div style={{
        border: '1.5px dashed rgba(220, 231, 166, 0.35)',
        borderRadius: '100px',
        padding: '8px 24px',
        fontSize: '15px',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'line-through',
        display: 'inline-block',
        marginBottom: '28px',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.5px'
      }}>
        De R$ 1.997,00
      </div>

      {/* Instalments headline */}
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '3px',
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: '10px',
        textTransform: 'uppercase'
      }}>
        POR APENAS 10X DE
      </div>

      {/* Huge Price */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        marginBottom: '12px',
        fontFamily: 'var(--font-body)'
      }}>
        <span style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          marginRight: '6px',
          opacity: 0.8
        }}>
          R$
        </span>
        <span style={{
          fontSize: '84px',
          fontWeight: '800',
          lineHeight: '0.9',
          letterSpacing: '-2px',
          color: '#ffffff',
          marginRight: '2px'
        }}>
          99
        </span>
        <span style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#ffffff',
          opacity: 0.95
        }}>
          ,70
        </span>
      </div>

      {/* Single payment price */}
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '32px'
      }}>
        ou <span style={{ color: '#ffffff', fontWeight: '600' }}>R$ 997,00</span> à vista
      </div>

      {/* Button */}
      <a href="#form-section" className="premium-pricing-btn">
        QUERO DESBLOQUEAR O MEU ACESSO
      </a>

      {/* Card brands from imported image */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        width: '100%'
      }}>
        <img src={bandeirasImg} alt="Bandeiras de Cartões" style={{ width: '100%', maxWidth: '300px', height: 'auto', opacity: 0.9 }} />
      </div>

      {/* Security footer seals */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: '12px',
        width: '100%',
        marginTop: '16px',
        borderTop: '1.5px solid rgba(255,255,255,0.08)',
        paddingTop: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--button-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 11 11 13 15 9"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: '750', lineHeight: '1.2' }}>Compra</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.1' }}>Segura</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--button-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.25 15 5.25 21 8.25 19 11.25 21 9.25 17" />
            <polyline points="15.75 15 18.75 21 15.75 19 12.75 21 14.75 17" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: '750', lineHeight: '1.2' }}>Satisfação</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.1' }}>Garantida</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--button-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: '750', lineHeight: '1.2' }}>Privacidade</span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.1' }}>Protegida</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OtherSections() {
  const wireframeSvg = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'600'%20height%3D'400'%20style%3D'background%3A%23EFEAE3%3B%20border%3A%201px%20solid%20%23CCC%3B'%3E%3Cline%20x1%3D'0'%20y1%3D'0'%20x2%3D'600'%20y2%3D'400'%20stroke%3D'%23CCC'%20stroke-width%3D'2'%2F%3E%3Cline%20x1%3D'600'%20y1%3D'0'%20x2%3D'0'%20y2%3D'400'%20stroke%3D'%23CCC'%20stroke-width%3D'2'%2F%3E%3C%2Fsvg%3E";
  const wireframeVertical = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'600'%20height%3D'800'%20style%3D'background%3A%23EFEAE3%3B%20border%3A%201px%20solid%20%23CCC%3B'%3E%3Cline%20x1%3D'0'%20y1%3D'0'%20x2%3D'600'%20y2%3D'800'%20stroke%3D'%23CCC'%20stroke-width%3D'2'%2F%3E%3Cline%20x1%3D'600'%20y1%3D'0'%20x2%3D'0'%20y2%3D'800'%20stroke%3D'%23CCC'%20stroke-width%3D'2'%2F%3E%3C%2Fsvg%3E";

  return (
    <>
      {/* DOBRA 04: VERDADE / DIAGNÓSTICO */}
      <section className="truth-section" id="truth">
        <div className="container narrow">
          <h2 className="title-lg">Seu temperamento nasce com você.<br/>Mas seus traumas podem ensinar você a se proteger de formas que parecem <span className="italic">personalidade.</span></h2>
          <p>Essa é a diferença que muda tudo. Temperamento é o seu jeito base de funcionar. Trauma é aquilo que pode distorcer, intensificar ou bloquear esse funcionamento.</p>
          <div className="tilted-gallery">
            <figure><img src={cardNature} alt="Diagnóstico 1" /><figcaption>Nem tudo é apenas seu jeito.</figcaption></figure>
            <figure><img src={cardClarity} alt="Diagnóstico 2" /><figcaption>Nem tudo é trauma.</figcaption></figure>
            <figure><img src={cardStrength} alt="Diagnóstico 3" /><figcaption>Nem toda reação forte é defeito.</figcaption></figure>
          </div>

          <h3 className="title-md">O problema não é quem você é.</h3>
          <p>O problema é viver sem perceber o que em você é essência, o que é temperamento e o que foi resposta a experiências que marcaram sua história.</p>
          <a href="#form-section" className="btn-primary">Quero me entender melhor</a>
        </div>
      </section>

      {/* DOBRA 05: BENEFÍCIOS */}
      <section className="benefits-section" id="benefits">
        <div className="container narrow">
          <h2 className="title-lg">Quando você começa a se entender...<br/>muita coisa deixa de parecer <span className="italic">confusa:</span></h2>
          <div className="benefits-grid">
            {landingContent.benefits.items.map((b, i) => (
              <article className="benefit-card" key={i}>
                <span className="star-icon">✦</span>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 06: MÉTODO */}
      <section className="method-section" id="method">
        <div className="method-card">
          <div className="method-header">
            <div className="method-line"></div>
            <h2>A Reprogramação Cognitiva não é sobre <span className="italic">virar outra pessoa.</span><br/>É sobre entender quem você é.</h2>
            <p>A Bíblia será usada como recurso de ilustração e reflexão sobre comportamento humano, identidade, escolhas e transformação. O centro da mentoria é o autoconhecimento.</p>
            <div className="method-checks">
              <span>Mentoria virtual e coletiva.</span>
              <span>Encontro individual antes da jornada.</span>
              <span>3 meses de acompanhamento.</span>
            </div>
          </div>
          <div className="photo-mosaic">
            <img src={mosaic1} alt="Mosaic 1" />
            <img src={mosaic2} alt="Mosaic 2" className="photo-tall" />
            <img src={mosaic3} alt="Mosaic 3" className="photo-wide" />
            <img src={mosaic4} alt="Mosaic 4" />
            <img src={mosaic5} alt="Mosaic 5" />
            <img src={mosaic6} alt="Mosaic 6" />
          </div>
          <div className="method-cta">
            <a href="#form-section" className="btn-primary">Quero participar</a>
          </div>
        </div>
      </section>

      {/* DOBRA 07: PILARES */}
      <section className="pillars-section" id="pillars">
        <div className="container">
          <h2>Os 5 <span className="italic">Pilares</span> da Reprogramação Cognitiva</h2>
          <div className="pillars-wrapper">
            {landingContent.pillars.map((p, i) => (
              <article className="pillar-card" key={i}>
                <div className="pillar-icon">{i + 1}</div>
                <h3>{p.title.replace(/^\d+\.\s*/, '')}</h3>
                {p.items.map((it, j) => <p key={j} style={{marginTop: '15px', color: 'var(--text-soft)', lineHeight: '1.6'}}>{it}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 08: JORNADA POR NÍVEIS */}
      <section className="levels-section" id="levels">
        <div className="container narrow">
          <h2>A mentoria te conduz por uma jornada <span className="italic">clara</span> de percepção sobre si.</h2>
          <div className="level-grid">
            {landingContent.levels.items.map((l, i) => (
              <article className={`level-card ${l.isDark ? 'dark' : 'green'}`} key={i}>
                <div className="level-header">
                  <h3>{l.title}</h3>
                </div>
                <p>{l.desc}</p>
              </article>
            ))}
          </div>
          <p className="center-text" style={{color: 'var(--text-soft)', maxWidth: '600px', margin: '0 auto 30px'}}>{landingContent.levels.footer}</p>
          <a href="#form-section" className="btn-primary">{landingContent.levels.buttonLabel}</a>
        </div>
      </section>

      {/* DOBRA DE PREÇO INTERMEDIÁRIA */}
      <section className="pricing-top-section" id="pricing-top" style={{ background: 'var(--bg-cream)', padding: '100px 0', borderTop: '1.5px solid var(--border-soft)', borderBottom: '1.5px solid var(--border-soft)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 className="title-lg" style={{ marginBottom: '40px', maxWidth: '800px' }}>Garanta sua vaga na <span className="italic">Reprogramação Cognitiva</span></h2>
          <PricingCard bandeirasImg={bandeirasImg} />
        </div>
      </section>

      {/* DOBRA 09: RESULTADOS */}
      <section className="results-section" id="results">
        <div className="container">
          <h2>O que muda quando você começa a se enxergar com mais <span className="italic">clareza!</span></h2>
        </div>
        <div className="results-carousel">
          {landingContent.results.items.map((item, i) => (
            <article className="result-card" key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              color: 'var(--text-light)',
              textAlign: 'center',
              background: 'var(--bg-green)',
              borderRadius: '12px',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
            }}>
              <span style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--bg-light-green)' }}>✦</span>
              <p style={{
                fontSize: '18px',
                fontFamily: 'var(--font-title)',
                lineHeight: '1.45',
                fontWeight: '400',
                color: '#ffffff'
              }}>{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DOBRA 10: IDENTIDADE */}
      <section className="identity-section" id="identity">
        <div className="container">
          <span className="tag">{landingContent.identity.tag}</span>
          <h2>"Mudança de postura e <span className="italic">Identidade</span>"</h2>
          <p>Muitas pessoas passam anos tentando corrigir comportamentos sem entender a origem deles. Esse é o ponto onde autoconhecimento deixa de ser frase bonita e vira leitura real de si.</p>
          <div className="arrow-circle">↓</div>
          <h2 style={{fontSize: '34px', maxWidth: '900px', margin: '0 auto'}}>Agora, olha como essa jornada acontece na <span className="italic">prática.</span></h2>
        </div>
      </section>

      {/* DOBRA 11: IMPLEMENTAÇÃO */}
      <section className="implementation-section" id="implementation">
        <div className="container">
          {landingContent.implementation.map((impl, i) => (
            <article className={`implementation-card ${impl.reverse ? 'reverse' : ''}`} key={i}>
              <div className="card-content">
                <h3>{impl.title}</h3>
                <p style={{color: 'var(--text-soft)', marginTop: '10px'}}>{impl.desc}</p>
                <ul className="feature-list">
                  {impl.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <p style={{fontWeight: 600}}>✦ {impl.highlight}</p>
              </div>
              <div className="card-image">
                <img src={impl.image} alt={impl.title} />
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* DOBRA 13: NÃO É CURSO */}
      <section className="not-course-section" id="not-course">
        <div className="container">
          <div className="not-course-card">
            <h2>A Reprogramação Cognitiva não é <span className="italic">um curso.</span></h2>
            {landingContent.notCourse.compare.map((c, i) => (
              <div className={`compare-row ${i === 0 ? 'light' : ''}`} key={i}>
                <span>{c.label}</span> {c.text}
              </div>
            ))}
            <p>Essa mentoria é para quem quer sair da superfície. Não é sobre aprender nomes difíceis ou decorar conceitos. É sobre entender por que você sente, reage e controla.</p>
            <a href="#form-section" className="btn-primary" style={{marginTop: '30px'}}>{landingContent.notCourse.buttonLabel}</a>
          </div>
        </div>
      </section>



      {/* DOBRA 15: BÔNUS */}
      <section className="bonus-section" id="bonus">
        <div className="container narrow">
          <h2>Ao entrar na mentoria, você também recebe materiais para <span className="italic">aprofundar sua percepção:</span></h2>
          <div className="bonus-grid">
            {landingContent.bonuses.items.map((b, i) => {
              const bonusImages = [bonusClasses, bonusExercises, bonusBible];
              return (
                <article className="bonus-card" key={i}>
                  <img src={bonusImages[i]} alt={b.title} />
                  <div className="bonus-card-content">
                    <span>{b.tag}</span>
                    <h3>{b.title}</h3>
                    <p style={{color: 'var(--text-soft)'}}>{b.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <a href="#form-section" className="btn-primary">{landingContent.bonuses.buttonLabel}</a>
          </div>
        </div>
      </section>

      {/* DOBRA 16: MENTORA */}
      <section className="mentor-section" id="mentor">
        <div className="container mentor-grid">
          <div className="mentor-copy">
            <h2>{landingContent.mentor.headline}</h2>
            {landingContent.mentor.text.map((t, i) => <p key={i}>{t}</p>)}
          </div>
          <div className="mentor-photo-wrap">
            <img src={mentorVertical} alt="Mentora" />
          </div>
        </div>
      </section>

      {/* DOBRA 17: PERFIS */}
      <section className="profile-fit-section" id="profiles">
        <div className="container">
          <div className="profile-grid">
            <article className="profile-card light">
              <div className="profile-icon" style={{color: '#D64545'}}>×</div>
              <h3>Perfis que <strong style={{color: '#D64545'}}>NÃO</strong> aproveitam bem</h3>
              <ul>
                {landingContent.profiles.negative.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </article>

            <article className="profile-card green">
              <div className="profile-icon" style={{color: 'var(--bg-green)'}}>✓</div>
              <h3>Perfis que <strong style={{color: 'var(--bg-light-green)'}}>PROSPERAM</strong> na mentoria</h3>
              <ul>
                {landingContent.profiles.positive.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* DOBRA 18: GARANTIA */}
      <section className="guarantee-section" id="guarantee">
        <div className="container guarantee-grid">
          <div>
            <h2 style={{textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: '600'}}>{landingContent.guarantee.headline}</h2>
            <p dangerouslySetInnerHTML={{__html: landingContent.guarantee.texto.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}></p>
            {landingContent.guarantee.investimento && <p style={{fontWeight: 'bold', fontSize: '18px', marginTop: '20px'}}>{landingContent.guarantee.investimento}</p>}
            <p style={{fontSize: '14px', color: 'var(--text-soft)', marginTop: '20px', display: 'flex', gap: '8px', alignItems: 'center'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bg-green)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Eu garanto a transformação
            </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <PricingCard bandeirasImg={bandeirasImg} />
          </div>
        </div>
      </section>

      {/* DOBRA 19: FORMULÁRIO */}
      <section className="form-section" id="form-section">
        <div className="watermark" style={{fontSize: '120px', left: '10%'}}>RC</div>
        <div className="container">
          <h2>Preencha seus dados para entrar na <span className="italic">próxima turma:</span></h2>
          <div className="application-form">
            <form action="#" method="POST" id="mentoria-form" onSubmit={(e) => {
              e.preventDefault();
              const name = document.getElementById('name').value;
              if (name) {
                alert(`Obrigado, ${name}! Aplicação enviada com sucesso.`);
                document.getElementById('name').value = '';
              }
            }}>
              <label htmlFor="name">{landingContent.form.question}</label>
              <input type="text" id="name" placeholder="Sua resposta" required />
              <button type="submit" className="btn-primary" style={{marginTop: '40px', width: '100%', textAlign: 'center'}}>{landingContent.form.buttonLabel}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
