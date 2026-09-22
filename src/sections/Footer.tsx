import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: '1rem' }}>{PERSONAL_DATA.fullName}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{PERSONAL_DATA.role}</p>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © 2026 Washington Moreira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};