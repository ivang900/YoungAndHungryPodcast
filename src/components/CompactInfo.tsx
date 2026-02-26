import React, { useEffect, useRef, useState } from "react";
import { Users, Target, BookOpen } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Task One",
    description: "This is where sample example 1 will go",
    accent: 'var(--cin-red)',
    accentGlow: 'rgba(230, 57, 70, 0.12)',
  },
  {
    icon: BookOpen,
    title: "Task Two",
    description: "This is where sample example 2 will go",
    accent: 'var(--cin-gold)',
    accentGlow: 'rgba(201, 162, 39, 0.12)',
  },
  {
    icon: Users,
    title: "Task Three",
    description: "This is where sample example 3 will go",
    accent: 'var(--cin-red-bright)',
    accentGlow: 'rgba(255, 45, 59, 0.12)',
  },
];

export function CompactInfo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="info-heading"
      style={{
        background: 'var(--cin-surface)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Background texture — diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.015,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.5) 40px,
            rgba(255,255,255,0.5) 41px
          )`,
        }}
      />

      {/* Red glow from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '40%',
          height: '300px',
          background: 'radial-gradient(ellipse at top center, rgba(230, 57, 70, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className={`font-medium mb-4 ${visible ? 'anim-fade-up' : 'opacity-0'}`}
            style={{
              color: 'var(--cin-gold)',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontSize: '0.75rem',
            }}
          >
            Hands-On Learning
          </p>
          <h2
            id="info-heading"
            className={`font-heading ${visible ? 'anim-fade-up delay-1' : 'opacity-0'}`}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cin-text)',
              lineHeight: 0.95,
            }}
          >
            Hands On AI Misconception Lab
          </h2>
        </div>

        {/* Cards — asymmetric layout on desktop */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const offset = index === 1 ? 'md:translate-y-8' : '';
            return (
              <div
                key={card.title}
                className={`relative group rounded-md p-8 transition-all duration-500 ${offset} ${visible ? 'anim-fade-up' : 'opacity-0'}`}
                style={{
                  animationDelay: visible ? `${0.2 + index * 0.12}s` : '0s',
                  background: 'var(--cin-black-rich)',
                  border: '1px solid var(--cin-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = card.accent;
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${card.accentGlow}`;
                  e.currentTarget.style.transform = `translateY(${index === 1 ? 'calc(2rem - 6px)' : '-6px'})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cin-border)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = `translateY(${index === 1 ? '2rem' : '0'})`;
                }}
              >
                {/* Accent top line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '1.5rem',
                    right: '1.5rem',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                    opacity: 0.5,
                    borderRadius: '1px',
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded flex items-center justify-center mb-6"
                  style={{
                    background: card.accentGlow,
                    border: `1px solid ${card.accent}33`,
                  }}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" style={{ color: card.accent }} />
                </div>

                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--cin-text)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ color: 'var(--cin-text-secondary)', fontFamily: 'var(--font-body)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
