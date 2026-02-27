import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Users, Target, BookOpen } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Task One",
    description: "This is where sample example 1 will go",
    accent: '#E63946',
    glowColor: 'rgba(230,57,70,0.08)',
  },
  {
    icon: BookOpen,
    title: "Task Two",
    description: "This is where sample example 2 will go",
    accent: '#C9A227',
    glowColor: 'rgba(201,162,39,0.08)',
  },
  {
    icon: Users,
    title: "Task Three",
    description: "This is where sample example 3 will go",
    accent: '#FF2D3B',
    glowColor: 'rgba(255,45,59,0.08)',
  },
];

export function CompactInfo() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-labelledby="info-heading"
      style={{
        background: '#0A0A0A',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.14) 50%, transparent 90%)',
        }}
      />

      {/* Parallax diagonal line texture */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY, opacity: 0.02 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.4) 50px,
              rgba(255,255,255,0.4) 51px
            )`,
          }}
        />
      </motion.div>

      {/* Top-down spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '50%',
          height: '400px',
          background: 'radial-gradient(ellipse at top center, rgba(201,162,39,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              color: '#C9A227',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            Hands-On Learning
          </motion.p>
          <motion.h2
            id="info-heading"
            className="font-heading"
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              color: '#FFFFFF',
              lineHeight: 0.92,
            }}
          >
            Hands On AI Misconception Lab
          </motion.h2>
        </div>

        {/* Cards — middle one offset for asymmetry */}
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, margin: '-60px' });

            return (
              <motion.div
                key={card.title}
                ref={cardRef}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 8,
                  filter: 'blur(4px)',
                }}
                animate={
                  cardInView
                    ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: i === 1 ? 24 : -8,
                  borderColor: card.accent,
                  boxShadow: `0 25px 80px rgba(0,0,0,0.6), 0 0 50px ${card.glowColor}`,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                }}
                className="relative rounded-sm p-8"
                style={{
                  background: '#0F0F0F',
                  border: '1px solid rgba(255,255,255,0.06)',
                  marginTop: i === 1 ? '2.5rem' : 0,
                  perspective: '800px',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6"
                  style={{
                    height: '1px',
                    background: `linear-gradient(90deg, transparent, ${card.accent}66, transparent)`,
                  }}
                />

                {/* Icon container */}
                <motion.div
                  className="w-14 h-14 rounded-sm flex items-center justify-center mb-7"
                  style={{
                    background: card.glowColor,
                    border: `1px solid ${card.accent}22`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 30px ${card.glowColor}`,
                  }}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" style={{ color: card.accent }} />
                </motion.div>

                <h3
                  className="font-heading mb-3"
                  style={{
                    fontSize: '1.6rem',
                    color: '#FFFFFF',
                    letterSpacing: '0.04em',
                  }}
                >
                  {card.title}
                </h3>
                <p style={{
                  color: '#A0A0A0',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                  fontSize: '0.92rem',
                }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
