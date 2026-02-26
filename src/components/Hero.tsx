import React, { useState, useEffect } from "react";
import { Mic2, X, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
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
      className="relative flex items-center justify-center overflow-hidden bg-obsidian"
      style={{
        minHeight: '65vh',
      }}
    >
      {/* Premium Spotlight Background */}
      <div
        className="absolute inset-0 z-0 animate-slow-pan opacity-60"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(209, 255, 38, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(18, 18, 18, 1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(18, 18, 18, 1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Film Grain & Noise Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none noise-overlay opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-none mb-8 glass ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          role="status"
          aria-label="Badge"
        >
          <Mic2 className="w-3.5 h-3.5" aria-hidden="true" style={{ color: 'var(--acid-green)' }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--acid-green)' }}>
            Sign Up Now! -Click Below!
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-black mb-6 text-white tracking-tighter leading-[0.85] ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            fontSize: 'clamp(2rem, 8vw, 5rem)',
            animationDelay: '0.2s',
            textShadow: '0 0 60px rgba(0,0,0,0.5)',
          }}
        >
          Sample Podcast Info{" "}
          <span className="text-acid-green" style={{ color: 'var(--acid-green)' }}>Coming</span> Soon{" "}
          <span className="text-purple-600">TBD</span>
        </h1>

        {/* Premium Divider */}
        <div
          className={`mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-acid-green to-transparent opacity-30 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ width: '200px', animationDelay: '0.4s', backgroundColor: 'var(--acid-green)' }}
        />

        {/* Subtitle */}
        <p
          className={`max-w-2xl mx-auto mb-10 text-lg md:text-xl text-white/60 font-medium leading-relaxed ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            animationDelay: '0.5s',
          }}
        >
          This is where we will be displaying podcast logo, snippets etc.
        </p>

        {/* CTA */}
        {!showSignup ? (
          <button
            onClick={() => setShowSignup(true)}
            className={`group relative px-40 py-20 rounded-none font-black uppercase tracking-widest text-xl shadow-glow transition-all duration-500 hover:scale-105 active:scale-95 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}
            aria-label="Sign up for mailing list"
            style={{ 
              animationDelay: '0.6s',
              backgroundColor: 'var(--acid-green)',
              color: 'var(--obsidian)',
              border: 'none'
            }}
          >
            <span className="relative z-10">Sign Up Now - Click Here!</span>
          </button>
        ) : (
          <div
            className="max-w-md mx-auto rounded-2xl p-10 glass animate-fade-in-up shadow-2xl"
            style={{
              background: 'rgba(18, 18, 18, 0.8)',
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2
                className="font-black text-2xl text-white uppercase tracking-tight"
              >
                Join Our Mailing List
              </h2>
              <button
                onClick={() => setShowSignup(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-acid-green transition-all"
                aria-label="Close signup form"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left">
                  <label
                    htmlFor="email-signup"
                    className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 px-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email-signup"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none transition-all focus:border-acid-green/50 focus:bg-white/10 focus:ring-4 focus:ring-acid-green/5"
                    aria-label="Enter your email address"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-acid-green text-obsidian font-black uppercase tracking-widest text-sm transition-all hover:bg-white active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div
                className="flex flex-col items-center justify-center gap-4 py-8"
                role="status"
                aria-live="polite"
              >
                <CheckCircle
                  className="w-12 h-12 text-acid-green"
                  aria-hidden="true"
                />
                <p className="font-bold text-lg text-white">
                  Successfully subscribed!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}