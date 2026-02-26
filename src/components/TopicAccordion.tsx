import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Topic {
  id: number;
  title: string;
  description: string;
  details: string;
}

export function TopicAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const topics: Topic[] = [
    {
      id: 1,
      title: 'Episode One Title',
      description: 'Brief overview of epidsode one',
      details: 'Detailed information about topic one goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.'
    },
    {
      id: 2,
      title: 'Episode Two Title',
      description: 'Brief overview of Episode two',
      details: 'Detailed information about topic two goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.'
    },
    {
      id: 3,
      title: 'Episode Three Title',
      description: 'Brief overview of Episode three',
      details: 'Detailed information about topic three goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.'
    },
    {
      id: 4,
      title: 'Episode Four Title',
      description: 'Brief overview of Episode four',
      details: 'Detailed information about topic four goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.'
    },
    {
      id: 5,
      title: 'Episode Five Title',
      description: 'Brief overview of Episode five',
      details: 'Detailed information about topic five goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.'
    },
    {
      id: 6,
      title: 'Episode Six Title',
      description: 'Brief overview of Episode six',
      details: 'Detailed information about topic six goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.'
    }
  ];

  const toggleTopic = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTopic(id);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      aria-labelledby="topics-heading"
      style={{
        background: 'var(--cin-black-rich)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--cin-border-hover), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={`font-medium mb-4 ${visible ? 'anim-fade-up' : 'opacity-0'}`}
            style={{
              color: 'var(--cin-red)',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
            }}
          >
            What We Cover
          </p>
          <h2
            id="topics-heading"
            className={`font-heading mb-4 ${visible ? 'anim-fade-up delay-1' : 'opacity-0'}`}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cin-text)',
              lineHeight: 0.95,
            }}
          >
            Key Podcast Topics Covered
          </h2>
          <p
            className={`max-w-2xl mx-auto ${visible ? 'anim-fade-up delay-2' : 'opacity-0'}`}
            style={{
              color: 'var(--cin-text-muted)',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
            }}
          >
            Click on any topic below to learn more about what we cover
          </p>
        </div>

        {/* Topic grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {topics.map((topic, index) => {
            const isExpanded = expandedId === topic.id;
            return (
              <div
                key={topic.id}
                className={`rounded-md overflow-hidden transition-all duration-500 ${visible ? 'anim-fade-up' : 'opacity-0'}`}
                style={{
                  animationDelay: visible ? `${0.15 + index * 0.08}s` : '0s',
                  background: isExpanded ? 'var(--cin-surface-hover)' : 'var(--cin-surface)',
                  border: `1px solid ${isExpanded ? 'var(--cin-border-accent)' : 'var(--cin-border)'}`,
                }}
                onMouseEnter={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.borderColor = 'var(--cin-border-hover)';
                    e.currentTarget.style.background = 'var(--cin-surface-hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.borderColor = 'var(--cin-border)';
                    e.currentTarget.style.background = 'var(--cin-surface)';
                  }
                }}
              >
                <button
                  onClick={() => toggleTopic(topic.id)}
                  onKeyDown={(e) => handleKeyDown(e, topic.id)}
                  className="w-full text-left p-6 transition-colors focus:outline-none"
                  aria-expanded={expandedId === topic.id}
                  aria-controls={`topic-content-${topic.id}`}
                  style={{ background: 'transparent' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Episode number */}
                      <span
                        className="block mb-1"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.8rem',
                          letterSpacing: '0.15em',
                          color: isExpanded ? 'var(--cin-red)' : 'var(--cin-text-muted)',
                          transition: 'color 0.3s',
                        }}
                      >
                        EP {String(topic.id).padStart(2, '0')}
                      </span>
                      <h3
                        className="font-heading mb-1"
                        style={{
                          fontSize: '1.5rem',
                          color: 'var(--cin-text)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {topic.title}
                      </h3>
                      <p style={{ color: 'var(--cin-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem' }}>
                        {topic.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-2">
                      {expandedId === topic.id ? (
                        <ChevronUp className="w-5 h-5" aria-hidden="true" style={{ color: 'var(--cin-red)' }} />
                      ) : (
                        <ChevronDown className="w-5 h-5" aria-hidden="true" style={{ color: 'var(--cin-text-muted)' }} />
                      )}
                    </div>
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isExpanded ? '300px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                  }}
                >
                  <div
                    id={`topic-content-${topic.id}`}
                    className="px-6 pb-6"
                    role="region"
                    aria-labelledby={`topic-title-${topic.id}`}
                    style={{
                      borderTop: '1px solid var(--cin-border)',
                    }}
                  >
                    <p className="pt-4" style={{ color: 'var(--cin-text-secondary)', fontFamily: 'var(--font-body)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                      {topic.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
