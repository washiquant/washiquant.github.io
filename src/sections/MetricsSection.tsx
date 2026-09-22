import React from 'react';
import { METRICS } from '../data/portfolioData';

export const MetricsSection: React.FC = () => {
  return (
    <section style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        <div className="grid-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {metric.label}
              </span>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-blue)', margin: '0.25rem 0' }}>
                {metric.value}
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};