import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// PORTFÓLIO PRÁTICO</span>
          <h2 className="section-title">Projetos em destaque</h2>
        </div>

        <div className="grid-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)'
              }}
            >
              {/* Thumbnail Container */}
              <div style={{ height: '180px', backgroundColor: '#1e263d', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  onError={(e) => {
                    // Fallback visual limpo
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--bg-card), transparent)'
                }}></div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
                  {project.description}
                </p>

                {/* Badges de Tecnologia */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--accent-blue)',
                        border: '1px solid rgba(56, 189, 248, 0.15)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)'
                      }}
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--accent-blue)'
                      }}
                    >
                      <ExternalLink size={16} /> Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};