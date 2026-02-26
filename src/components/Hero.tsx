import React, { useState, useEffect } from "react";
import { Mic2, X, CheckCircle } from "lucide-react";

export function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setShowSignup(false);
    }, 2500);
  };

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden film-grain vignette"
      style={{
        minHeight: '100vh',
        background: 'var(--cin-black)',
      }}
    >
      {/* Cinematic gradient backdrop */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 20%, rgba(230, 57, 70, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 70% 80%, rgba(201, 162, 39, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(6, 6, 6, 1) 0%, rgba(0, 0, 0, 1) 100%)
          `,
        }}
      />

      {/* Horizontal scan line effect */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden" style={{ opacity: 0.03 }}>
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${i * 1.25}%`,
              left: 0,
              right: 0,
              height: '1px',
              background: 'rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 ${loaded ? 'anim-fade-up' : 'opacity-0'}`}
          role="status"
          aria-label="Badge"
          style={{
            background: 'var(--cin-red-subtle)',
            border: '1px solid var(--cin-border-accent)',
          }}
        >
          <Mic2 className="w-4 h-4" aria-hidden="true" style={{ color: 'var(--cin-red)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--cin-red)', fontFamily: 'var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
            Sign Up Now!
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-heading mb-6 ${loaded ? 'anim-title-reveal delay-3' : 'opacity-0'}`}
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            lineHeight: 0.92,
            color: 'var(--cin-text)',
            textShadow: '0 0 80px rgba(230, 57, 70, 0.15)',
          }}
        >
          Sample Podcast Info{" "}
          <span style={{ color: 'var(--cin-red)' }}>Coming</span> Soon{" "}
          <span style={{ color: 'var(--cin-gold)' }}>TBD</span>
        </h1>

        {/* Red accent line under title */}
        <div
          className={`mx-auto mb-8 ${loaded ? 'anim-expand-width delay-8' : ''}`}
          style={{
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--cin-red), var(--cin-gold))',
            borderRadius: '2px',
          }}
        />

        {/* Subtitle */}
        <p
          className={`max-w-3xl mx-auto mb-12 ${loaded ? 'anim-fade-up delay-6' : 'opacity-0'}`}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--cin-text-secondary)',
            lineHeight: 1.7,
            fontFamily: 'var(--font-body)',
          }}
        >
          This is where we will be displaying podcast logo, snippets etc.
        </p>

        {/* CTA */}
        {!showSignup ? (
          <button
            onClick={() => setShowSignup(true)}
            className={`btn-cinematic anim-pulse-glow px-10 py-4 rounded-md text-lg ${loaded ? 'anim-fade-up delay-8' : 'opacity-0'}`}
            aria-label="Sign up for mailing list"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Sign Up Now
          </button>
        ) : (
          <div
            className="max-w-md mx-auto rounded-lg p-8 anim-scale-in"
            style={{
              background: 'var(--cin-surface)',
              border: '1px solid var(--cin-border-hover)',
              boxShadow: '0 30px 100px rgba(0,0,0,0.8), 0 0 60px rgba(230, 57, 70, 0.08)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="font-heading"
                style={{
                  fontSize: '1.8rem',
                  color: 'var(--cin-text)',
                  letterSpacing: '0.06em',
                }}
              >
                Join Our Mailing List
              </h2>
              <button
                onClick={() => setShowSignup(false)}
                className="p-2 rounded transition-colors"
                aria-label="Close signup form"
                style={{
                  color: 'var(--cin-text-muted)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cin-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cin-text-muted)')}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email-signup"
                  className="block text-sm font-medium mb-2 text-left"
                  style={{
                    color: 'var(--cin-text-secondary)',
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: '0.7rem',
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email-signup"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="w-full px-4 py-3 rounded mb-4 transition-all"
                  aria-label="Enter your email address"
                  style={{
                    background: 'var(--cin-surface-raised)',
                    border: '1px solid var(--cin-border)',
                    color: 'var(--cin-text)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cin-red)';
                    e.currentTarget.style.boxShadow = '0 0 20px var(--cin-red-glow)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cin-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
                <button
                  type="submit"
                  className="btn-cinematic w-full px-6 py-3 rounded font-semibold"
                  style={{
                    fontFamily: 'var(--font-body)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: '0.85rem',
                  }}
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div
                className="flex items-center justify-center gap-3 py-6"
                role="status"
                aria-live="polite"
              >
                <CheckCircle
                  className="w-6 h-6"
                  aria-hidden="true"
                  style={{ color: 'var(--cin-gold)' }}
                />
                <p className="font-medium" style={{ color: 'var(--cin-text)', fontFamily: 'var(--font-body)' }}>
                  Successfully subscribed!
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, var(--cin-black-rich))',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
