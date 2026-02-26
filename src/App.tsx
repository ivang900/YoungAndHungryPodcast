import React from 'react';
import { Hero } from './components/Hero';
import { TopicAccordion } from './components/TopicAccordion';
import { CompactInfo } from './components/CompactInfo';
import { SignUpSection } from './components/SignUpSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TopicAccordion />
      <CompactInfo />
      <SignUpSection />
      <Footer />
    </div>
  );
}
