import React from 'react';
import { WORK_PILLARS } from '../data/portfolioData';

export const HowIWorkSection: React.FC = () => {
  return (
    <section style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// METODOLOGIA</span>
          <h2 className="section-title">Como eu desenvolvo</h2>
        </div>

        <div className="grid-4">
          {WORK_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-panel"
              style={{ padding: '1.75rem', borderRadius: '12px' }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                display: 'block',
                marginBottom: '0.75rem'
              }}>
                {pillar.number}
              </span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};