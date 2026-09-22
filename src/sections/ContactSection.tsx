import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="glass-panel" style={{ padding: '3.5rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>// CONTATO</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Vamos conversar?</h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 2.5rem auto' }}>
            Estou aberto a oportunidades, projetos e conexões profissionais na área de tecnologia.
          </p>

          {/* Grid de Contatos */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <a
              href={`mailto:${PERSONAL_DATA.contact.email}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-blue)',
                color: '#000',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}
            >
              <Mail size={18} /> Enviar e-mail
            </a>

            <a
              href={`tel:${PERSONAL_DATA.contact.phoneRaw}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontWeight: 500,
                fontSize: '0.95rem'
              }}
            >
              <Phone size={18} /> {PERSONAL_DATA.contact.phone}
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href={PERSONAL_DATA.contact.linkedIn} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={PERSONAL_DATA.contact.gitHub} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Github size={18} /> GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};