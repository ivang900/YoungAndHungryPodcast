import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Hero } from './components/Hero';
import { TopicAccordion } from './components/TopicAccordion';
import { CompactInfo } from './components/CompactInfo';
import { SignUpSection } from './components/SignUpSection';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen film-grain" style={{ background: 'var(--c-void)' }}>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <Hero />
      <TopicAccordion />
      <CompactInfo />
      <SignUpSection />
      <Footer />
    </div>
  );
}
