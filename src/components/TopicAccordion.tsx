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
    <section className="py-16 bg-white" aria-labelledby="topics-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="topics-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Key Podcast Topics Covered
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Click on any topic below to learn more about what we cover
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleTopic(topic.id)}
                onKeyDown={(e) => handleKeyDown(e, topic.id)}
                className="w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={expandedId === topic.id}
                aria-controls={`topic-content-${topic.id}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {topic.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {expandedId === topic.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    )}
                  </div>
                </div>
              </button>
              
              {expandedId === topic.id && (
                <div 
                  id={`topic-content-${topic.id}`}
                  className="px-6 pb-6 bg-gray-50 border-t border-gray-200"
                  role="region"
                  aria-labelledby={`topic-title-${topic.id}`}
                >
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {topic.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
