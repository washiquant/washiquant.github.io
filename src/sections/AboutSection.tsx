import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// APRESENTAÇÃO</span>
          <h2 className="section-title">Sobre mim</h2>
        </div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              {PERSONAL_DATA.bio}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {PERSONAL_DATA.complementaryBio}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-blue)', marginBottom: '0.25rem' }}>Aprendizado Contínuo</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Estudo contínuo focado em arquitetura de código, Python e engenharia de software.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-blue)', marginBottom: '0.25rem' }}>Foco em Resolução de Problemas</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Desenvolvimento de sistemas reais orientados à automação de rotinas e eficiência operacional.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', borderRadius: '10px' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-blue)', marginBottom: '0.25rem' }}>Evolução Técnica</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Construção e publicação constante de projetos práticos e estruturados no GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};