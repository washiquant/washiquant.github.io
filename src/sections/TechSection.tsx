import React from 'react';
import { TECHNOLOGIES } from '../data/portfolioData';

export const TechSection: React.FC = () => {
  return (
    <section id="tecnologias" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// HABILIDADES TÉCNICAS</span>
          <h2 className="section-title">Stack & Tecnologias</h2>
        </div>

        <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {tech.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};