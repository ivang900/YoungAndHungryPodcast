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
      className="py-32 bg-obsidian relative overflow-hidden" 
      aria-labelledby="discussion-heading"
    >
      {/* Decorative Background Element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-acid-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-8 border-t-2 border-acid-green/30">
            <MessageSquare className="w-8 h-8 text-acid-green" aria-hidden="true" />
          </div>
          
          <h2 id="discussion-heading" className="font-black text-white mb-6 tracking-tighter uppercase" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
            Discussion & <span className="text-acid-green">Q&A</span>
          </h2>
          
          <p className="text-white/40 font-medium max-w-2xl mx-auto leading-relaxed">
            Have questions or want to join the conversation? Share your thoughts below. 
            Your voice is a critical part of the human-AI synergy.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-3xl p-10 border-t-2 border-acid-green/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Send className="w-24 h-24 text-acid-green" />
              </div>
              
              <label htmlFor="question-input" className="block text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-4 px-1">
                Your Question or Comment
              </label>
              <textarea
                id="question-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What's on your mind?"
                required
                rows={4}
                className="w-full px-6 py-5 bg-obsidian/50 border border-white/5 rounded-2xl text-white placeholder-white/10 focus:outline-none focus:ring-4 focus:ring-acid-green/10 focus:border-acid-green/30 transition-all resize-none font-medium leading-relaxed"
                aria-label="Enter your question or comment"
              />
              <button
                type="submit"
                className="mt-8 w-full group relative bg-acid-green text-obsidian px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all hover:scale-[1.02] shadow-glow hover:shadow-[0_0_40px_rgba(209,255,38,0.3)] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                Submit Question
              </button>
            </div>
          </form>
        ) : (
          <div 
            className="max-w-2xl mx-auto glass border-t-2 border-acid-green px-12 py-10 rounded-3xl text-center animate-fade-in-up"
            role="status"
            aria-live="polite"
          >
            <div className="w-16 h-16 bg-acid-green text-obsidian rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Send className="w-7 h-7" />
            </div>
            <p className="text-white font-black text-2xl uppercase tracking-tight mb-2">
              Message Received
            </p>
            <p className="text-white/40 font-medium">
              Thank you! Your question has been submitted to the collective.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
