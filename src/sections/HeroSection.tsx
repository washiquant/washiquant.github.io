import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ paddingTop: '8.5rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>

          {/* Lado Esquerdo */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              color: 'var(--accent-blue)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '1.25rem'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-blue)' }}></span>
              DESENVOLVEDOR BACK-END
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}>
              {PERSONAL_DATA.name}
            </h1>

            <p style={{
              fontSize: '1.2rem',
              fontWeight: 500,
              color: 'var(--accent-blue)',
              marginBottom: '1rem'
            }}>
              Desenvolvedor Back-end com foco em Python, APIs e sistemas orientados a dados.
            </p>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '540px',
              marginBottom: '2rem'
            }}>
              Construo aplicações, automações e soluções de software com foco em organização, desempenho e resolução de problemas reais.
            </p>

            {/* Botões de Ação */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a
                href="#projetos"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-blue)',
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'var(--transition)'
                }}
              >
                Ver Projetos <ArrowRight size={18} />
              </a>

              <a
                href={PERSONAL_DATA.contact.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  fontSize: '0.95rem'
                }}
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href={PERSONAL_DATA.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  fontSize: '0.95rem'
                }}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            {/* Indicador de Disponibilidade */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{
                position: 'relative',
                display: 'flex',
                height: '10px',
                width: '10px'
              }}>
                <span style={{
                  animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                  position: 'absolute',
                  display: 'inline-flex',
                  height: '100%',
                  width: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  opacity: 0.75
                }}></span>
                <span style={{
                  position: 'relative',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  height: '10px',
                  width: '10px',
                  backgroundColor: '#10b981'
                }}></span>
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Disponível para oportunidades
              </span>
            </div>
          </div>

          {/* Lado Direito - Foto Tratada */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0,0,0,0) 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0
            }}></div>

            <div className="profile-frame" style={{ zIndex: 1 }}>
              <img
                src="/profile.jpg"
                alt="Washington Willian Roncador Moreira"
                className="profile-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};