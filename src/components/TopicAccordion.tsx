import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Topic {
  id: number;
  title: string;
  description: string;
  details: string;
}

const topics: Topic[] = [
  {
    id: 1,
    title: 'Episode One Title',
    description: 'Brief overview of epidsode one',
    details: 'Detailed information about topic one goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.',
  },
  {
    id: 2,
    title: 'Episode Two Title',
    description: 'Brief overview of Episode two',
    details: 'Detailed information about topic two goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.',
  },
  {
    id: 3,
    title: 'Episode Three Title',
    description: 'Brief overview of Episode three',
    details: 'Detailed information about topic three goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.',
  },
  {
    id: 4,
    title: 'Episode Four Title',
    description: 'Brief overview of Episode four',
    details: 'Detailed information about topic four goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.',
  },
  {
    id: 5,
    title: 'Episode Five Title',
    description: 'Brief overview of Episode five',
    details: 'Detailed information about topic five goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.',
  },
  {
    id: 6,
    title: 'Episode Six Title',
    description: 'Brief overview of Episode six',
    details: 'Detailed information about topic six goes here. This is where you can expand on the concepts, provide examples, and give readers a deeper understanding of this important subject.',
  },
];

function TopicCard({ topic, index, isExpanded, onToggle }: {
  topic: Topic;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromLeft ? -60 : 60, filter: 'blur(4px)' }}
      animate={
        inView
          ? { opacity: 1, x: 0, filter: 'blur(0px)' }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="rounded-sm overflow-hidden"
      style={{
        background: isExpanded ? '#151515' : '#0A0A0A',
        border: `1px solid ${isExpanded ? 'rgba(230,57,70,0.2)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full text-left p-6 focus:outline-none"
        style={{ background: 'transparent' }}
        whileHover={{
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Episode number */}
            <span
              className="block mb-1.5"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: isExpanded ? '#E63946' : '#555555',
                transition: 'color 0.3s',
              }}
            >
              EP {String(topic.id).padStart(2, '0')}
            </span>

            <h3
              className="font-heading mb-1"
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                color: '#FFFFFF',
                letterSpacing: '0.03em',
                lineHeight: 1.1,
              }}
            >
              {topic.title}
            </h3>
            <p style={{
              color: '#555555',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
            }}>
              {topic.description}
            </p>
          </div>

          <motion.div
            className="flex-shrink-0 mt-2"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronDown
              className="w-5 h-5"
              aria-hidden="true"
              style={{ color: isExpanded ? '#E63946' : '#555555' }}
            />
          </motion.div>
        </div>

        {/* Red accent line at bottom of header when expanded */}
        <motion.div
          style={{
            height: '1px',
            marginTop: '1rem',
            background: 'linear-gradient(90deg, #E63946, transparent)',
            transformOrigin: 'left',
          }}
          animate={{ scaleX: isExpanded ? 1 : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`topic-content-${topic.id}`}
            role="region"
            aria-labelledby={`topic-title-${topic.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.35, delay: 0.1 },
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6">
              <p style={{
                color: '#A0A0A0',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.8,
                fontSize: '0.92rem',
              }}>
                {topic.details}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TopicAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const headerRef = React.useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section
      className="relative"
      aria-labelledby="topics-heading"
      style={{
        background: '#050505',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Subtle horizontal divider */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.14) 50%, transparent 90%)',
        }}
      />

      {/* Ambient red glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '60%',
          height: '300px',
          background: 'radial-gradient(ellipse at top center, rgba(230,57,70,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: '#E63946',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              fontWeight: 600,
              marginBottom: '1rem',
            }}
          >
            What We Cover
          </motion.p>

          <motion.h2
            id="topics-heading"
            className="font-heading"
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              color: '#FFFFFF',
              lineHeight: 0.92,
              marginBottom: '1rem',
            }}
          >
            Key Podcast Topics Covered
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: '#555555',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              maxWidth: '32rem',
              margin: '0 auto',
            }}
          >
            Click on any topic below to learn more about what we cover
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              index={index}
              isExpanded={expandedId === topic.id}
              onToggle={() => setExpandedId(expandedId === topic.id ? null : topic.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
