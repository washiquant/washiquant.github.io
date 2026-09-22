import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="formacao" style={{ padding: '5rem 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// ACADÊMICO</span>
          <h2 className="section-title">Formação</h2>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', borderRadius: '12px', maxWidth: '700px' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
            <div style={{
              padding: '0.75rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: 'var(--accent-blue)'
            }}>
              <GraduationCap size={28} />
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600 }}>Ensino Superior</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0.25rem 0 0.5rem 0' }}>
                {PERSONAL_DATA.education.course}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                {PERSONAL_DATA.education.institution}
              </p>
              <span style={{
                display: 'inline-block',
                marginTop: '0.75rem',
                fontSize: '0.8rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-muted)'
              }}>
                {PERSONAL_DATA.education.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};