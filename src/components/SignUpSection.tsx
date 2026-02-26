import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export function SignUpSection() {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
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
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="discussion-heading"
      style={{
        background: 'var(--cin-black)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Dramatic red gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 40%, rgba(230, 57, 70, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 20% 80%, rgba(185, 28, 44, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '40%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--cin-red), transparent)',
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 ${visible ? 'anim-fade-up' : 'opacity-0'}`}>
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: 'var(--cin-red-subtle)',
              border: '1px solid var(--cin-border-accent)',
            }}
          >
            <MessageSquare className="w-7 h-7" aria-hidden="true" style={{ color: 'var(--cin-red)' }} />
          </div>

          <h2
            id="discussion-heading"
            className="font-heading mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--cin-text)',
              lineHeight: 0.95,
            }}
          >
            Discussion & Q&A
          </h2>

          <p
            style={{
              color: 'var(--cin-text-muted)',
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              maxWidth: '36rem',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Have questions or want to join the conversation? Share your thoughts below.
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className={`max-w-2xl mx-auto ${visible ? 'anim-fade-up delay-2' : 'opacity-0'}`}
          >
            <div
              className="rounded-lg p-8"
              style={{
                background: 'var(--cin-surface)',
                border: '1px solid var(--cin-border)',
                boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
              }}
            >
              <label
                htmlFor="question-input"
                className="block mb-3"
                style={{
                  color: 'var(--cin-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              >
                Your Question or Comment
              </label>
              <textarea
                id="question-input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder=""
                required
                rows={4}
                className="w-full px-4 py-3 rounded mb-5 resize-none transition-all"
                aria-label="Enter your question or comment"
                style={{
                  background: 'var(--cin-surface-raised)',
                  border: '1px solid var(--cin-border)',
                  color: 'var(--cin-text)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cin-red)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(230, 57, 70, 0.15)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cin-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <button
                type="submit"
                className="btn-cinematic w-full sm:w-auto px-8 py-3 rounded flex items-center justify-center gap-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontSize: '0.85rem',
                }}
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Submit Question
              </button>
            </div>
          </form>
        ) : (
          <div
            className="max-w-2xl mx-auto px-8 py-6 rounded-lg text-center anim-scale-in"
            role="status"
            aria-live="polite"
            style={{
              background: 'var(--cin-red-subtle)',
              border: '1px solid var(--cin-border-accent)',
            }}
          >
            <p className="font-medium text-lg" style={{ color: 'var(--cin-text)', fontFamily: 'var(--font-body)' }}>
              Thank you! Your question has been submitted.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
