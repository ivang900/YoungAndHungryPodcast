import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Topic {
  id: number;
  title: string;
  description: string;
  details: string;
}

export function TopicAccordion() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
    <section className="py-40 bg-obsidian relative overflow-hidden" aria-labelledby="topics-heading">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-acid-green/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-start">
        {/* Left: Section Info (Shifted Left) */}
        <div className="md:w-1/3 sticky top-24">
          <div className="inline-block px-3 py-1 rounded-full glass mb-6">
            <span className="text-[10px] font-black text-acid-green uppercase tracking-widest">The Curriculum</span>
          </div>
          <h2 id="topics-heading" className="font-black text-white mb-6 tracking-tighter leading-none relative" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
            Key Podcast <br/>
            <span className="relative inline-block">
              Topics
              <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 10C30 4 100 2 198 8" stroke="#D1FF26" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <p className="text-white/40 font-medium leading-relaxed mb-8">
            Click on any topic below to learn more about how we explore the intersection of human creativity and machine intelligence.
          </p>
        </div>

        {/* Right: Accordion (Break the Grid) */}
        <div className="md:w-2/3 w-full space-y-4">
          {topics.map((topic, index) => (
            <div 
              key={topic.id}
              className={`glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/5 border-white/5 ${expandedId === topic.id ? 'bg-white/10 ring-1 ring-acid-green/20 scale-[1.02]' : ''}`}
              style={{
                marginLeft: (typeof window !== 'undefined' && window.innerWidth >= 768) ? (index % 2 === 0 ? '0' : '2rem') : '0',
                marginRight: (typeof window !== 'undefined' && window.innerWidth >= 768) ? (index % 2 === 0 ? '2rem' : '0') : '0'
              }}
            >
              <button
                onClick={() => toggleTopic(topic.id)}
                onKeyDown={(e) => handleKeyDown(e, topic.id)}
                className="w-full text-left p-8 transition-colors focus:outline-none"
                aria-expanded={expandedId === topic.id}
                aria-controls={`topic-content-${topic.id}`}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black text-white/20 uppercase">EP {topic.id.toString().padStart(2, '0')}</span>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-acid-green transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-white/40 text-sm mt-1 font-medium italic">
                      {topic.description}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border transition-all ${expandedId === topic.id ? 'bg-acid-green border-acid-green text-obsidian' : 'bg-white/5 border-white/10 text-white/40'}`}>
                    {expandedId === topic.id ? (
                      <ChevronUp className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-6 h-6" aria-hidden="true" />
                    )}
                  </div>
                </div>
              </button>
              
              {expandedId === topic.id && (
                <div 
                  id={`topic-content-${topic.id}`}
                  className="px-8 pb-8 animate-fade-in-up"
                  role="region"
                  aria-labelledby={`topic-title-${topic.id}`}
                >
                  <p className="text-white/60 leading-relaxed font-medium">
                    {topic.details}
                  </p>
                  <div className="mt-6 flex gap-4">
                    <div className="h-1 w-12 bg-acid-green/40 rounded-full" />
                    <div className="h-1 w-6 bg-white/10 rounded-full" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
