import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

export function SignUpSection() {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1.2]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setQuestion(''); }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-labelledby="discussion-heading"
      style={{
        background: 'linear-gradient(to bottom, #1A0606, #220808)',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Intensifying glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', left: '10%', right: '10%', height: '80%',
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(232,90,27,0.12) 0%, transparent 60%)',
          opacity: glowOpacity, scale: glowScale,
        }}
      />

      {/* Side heat streaks */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(232,90,27,0.25), transparent)', opacity: 0.5 }} />
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(232,90,27,0.25), transparent)', opacity: 0.5 }} />

      {/* Rough edge */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '3px', background: 'linear-gradient(90deg, transparent 5%, rgba(232,90,27,0.08) 30%, rgba(255,107,43,0.1) 50%, rgba(232,90,27,0.08) 70%, transparent 95%)', filter: 'blur(1px)' }} />

      <div className="relative max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={headerInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
            style={{ background: 'rgba(232,90,27,0.08)', border: '1px solid rgba(232,90,27,0.2)' }}
          >
            <MessageSquare className="w-7 h-7" style={{ color: '#FF6B2B' }} />
          </motion.div>

          <motion.h2 id="discussion-heading" className="font-heading mb-5" initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }} animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', color: '#FFFFFF', lineHeight: 0.92 }}>
            Discussion & Q&A
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }} style={{ color: '#6B5550', fontFamily: 'var(--font-body)', fontSize: '1.05rem', maxWidth: '34rem', margin: '0 auto', lineHeight: 1.65 }}>
            Have questions or want to join the conversation? Share your thoughts below.
          </motion.p>
        </div>

        <div ref={formRef}>
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="qform"
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
                transition={{ type: 'spring', damping: 22, stiffness: 200, delay: 0.1 }}
              >
                <motion.div
                  className="rounded-md p-8"
                  style={{ background: '#1E0808', border: '1px solid rgba(255,180,140,0.06)', boxShadow: '0 30px 100px rgba(0,0,0,0.7)' }}
                  whileHover={{ borderColor: 'rgba(232,90,27,0.12)', boxShadow: '0 30px 100px rgba(0,0,0,0.7), 0 0 60px rgba(232,90,27,0.04)' }}
                  transition={{ duration: 0.4 }}
                >
                  <label htmlFor="question-input" className="block mb-3" style={{ color: '#B09890', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.65rem', fontWeight: 600 }}>
                    Your Question or Comment
                  </label>
                  <textarea
                    id="question-input" value={question} onChange={(e) => setQuestion(e.target.value)} required rows={4}
                    className="w-full px-4 py-3 rounded-sm mb-5 resize-none transition-all duration-300"
                    style={{ background: '#250A0A', border: '1px solid rgba(255,180,140,0.06)', color: '#FFFFFF', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.65, outline: 'none' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#FF6B2B'; e.currentTarget.style.boxShadow = '0 0 35px rgba(232,90,27,0.15)'; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,180,140,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 rounded-sm flex items-center justify-center gap-2.5 font-semibold uppercase tracking-wider"
                    style={{ fontSize: '0.8rem', background: 'linear-gradient(135deg, #E63946, #FF6B2B)', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}
                    whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(232,90,27,0.3)' }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Send className="w-4 h-4" />
                    Submit Question
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                key="thanks"
                className="max-w-2xl mx-auto px-8 py-8 rounded-md text-center"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ type: 'spring', damping: 18, stiffness: 250 }}
                style={{ background: 'rgba(232,90,27,0.08)', border: '1px solid rgba(232,90,27,0.2)', boxShadow: '0 0 60px rgba(232,90,27,0.08)' }}
              >
                <p className="font-medium text-lg" style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)' }}>Thank you! Your question has been submitted.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
