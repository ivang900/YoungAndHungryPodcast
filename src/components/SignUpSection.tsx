import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export function SignUpSection() {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuestion('');
    }, 3000);
  };

  return (
    <section 
      className="py-16 bg-gradient-to-br from-blue-600 to-purple-600" 
      aria-labelledby="discussion-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <MessageSquare className="w-12 h-12 text-white mx-auto mb-4" aria-hidden="true" />
          
          <h2 id="discussion-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discussion & Q&A
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Have questions or want to join the conversation? Share your thoughts below.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <label htmlFor="question-input" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Question or Comment
              </label>
              <textarea
                id="question-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder=""
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 resize-none"
                aria-label="Enter your question or comment"
              />
              <button
                type="submit"
                className="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Submit Question
              </button>
            </div>
          </form>
        ) : (
          <div 
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg text-center"
            role="status"
            aria-live="polite"
          >
            <p className="text-white font-medium text-lg">
              Thank you! Your question has been submitted.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
