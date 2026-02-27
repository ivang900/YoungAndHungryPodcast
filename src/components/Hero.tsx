import React, { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Mic2, X, CheckCircle, Sparkles } from "lucide-react";

/* ── floating ember particles ── */
function Embers() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      dur: 6 + Math.random() * 8,
      size: 1.5 + Math.random() * 2.5,
      drift: (Math.random() - 0.5) * 80,
      isGold: Math.random() > 0.7,
    })),
  []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            background: p.isGold ? '#C9A227' : '#E63946',
            boxShadow: p.isGold
              ? '0 0 8px #C9A227, 0 0 24px rgba(201,162,39,0.4)'
              : '0 0 8px #E63946, 0 0 24px rgba(230,57,70,0.4)',
          }}
          animate={{
            y: [0, -1200],
            x: [0, p.drift],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ── scan lines ── */
function ScanLines() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, opacity: 0.02 }}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0"
          style={{
            top: `${(i / 60) * 100}%`,
            height: '1px',
            background: 'rgba(255,255,255,0.5)',
          }}
        />
      ))}
    </div>
  );
}

/* ── main hero ── */
export function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, 100]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const subtitleY = useTransform(scrollY, [0, 600], [0, 50]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setShowSignup(false);
    }, 2500);
  };

  /* stagger orchestration */
  const entrance = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const titleVariant = {
    hidden: { opacity: 0, letterSpacing: "0.3em", filter: "blur(12px)" },
    show: {
      opacity: 1,
      letterSpacing: "0.04em",
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const lineExpand = {
    hidden: { scaleX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
  };

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#000' }}
    >
      {/* Scaled cinematic bg */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale, zIndex: 0 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 20%, rgba(230,57,70,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 70% 80%, rgba(201,162,39,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 120% 80% at 50% 50%, #080808 0%, #000 100%)
            `,
          }}
        />
      </motion.div>

      <ScanLines />
      <Embers />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-5xl mx-auto px-6 py-24 text-center"
        style={{ zIndex: 10 }}
        variants={entrance}
        initial="hidden"
        animate="show"
      >
        {/* Badge — attention-grabbing with pulse animation */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-12 cursor-pointer"
          role="status"
          aria-label="Badge"
          onClick={() => setShowSignup(true)}
          style={{
            background: 'rgba(230,57,70,0.12)',
            border: '1px solid rgba(230,57,70,0.35)',
            boxShadow: '0 0 30px rgba(230,57,70,0.15)',
          }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(230,57,70,0.1)',
              '0 0 40px rgba(230,57,70,0.25)',
              '0 0 20px rgba(230,57,70,0.1)',
            ],
            borderColor: [
              'rgba(230,57,70,0.3)',
              'rgba(230,57,70,0.6)',
              'rgba(230,57,70,0.3)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{
            scale: 1.06,
            background: 'rgba(230,57,70,0.18)',
          }}
        >
          <Sparkles className="w-4 h-4" aria-hidden="true" style={{ color: '#C9A227' }} />
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.72rem',
            }}
          >
            Sign Up Now!
          </span>
          <span
            style={{
              color: '#E63946',
              fontSize: '0.72rem',
              fontWeight: 600,
            }}
          >
            →
          </span>
        </motion.div>

        {/* Title with parallax — reduced font size */}
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <motion.h1
            variants={titleVariant}
            className="font-heading mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 0.95,
              color: '#FFFFFF',
              textShadow: '0 0 80px rgba(230,57,70,0.2), 0 4px 60px rgba(0,0,0,0.4)',
            }}
          >
            Sample Podcast Info{" "}
            <span style={{ color: '#E63946' }}>Coming</span> Soon{" "}
            <span style={{ color: '#C9A227' }}>TBD</span>
          </motion.h1>
        </motion.div>

        {/* Accent line */}
        <motion.div
          variants={lineExpand}
          className="mx-auto mb-10"
          style={{
            width: '140px',
            height: '2px',
            background: 'linear-gradient(90deg, #E63946, #C9A227)',
            transformOrigin: 'center',
          }}
        />

        {/* Subtitle with parallax */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto mb-14"
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: '#B0B0B0',
              lineHeight: 1.75,
              fontFamily: 'var(--font-body)',
            }}
          >
            This is where we will be displaying podcast logo, snippets etc.
          </motion.p>
        </motion.div>

        {/* CTA / Signup — bigger, brighter button */}
        <AnimatePresence mode="wait">
          {!showSignup ? (
            <motion.div
              key="cta"
              variants={fadeUp}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            >
              <motion.button
                onClick={() => setShowSignup(true)}
                className="px-16 py-5 rounded-sm font-semibold uppercase tracking-wider"
                aria-label="Sign up for mailing list"
                style={{
                  fontSize: '1rem',
                  background: '#E63946',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: '0 0 50px rgba(230,57,70,0.5), 0 0 100px rgba(230,57,70,0.2)',
                  background: '#FF2D3B',
                }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(230,57,70,0.3), 0 0 80px rgba(230,57,70,0.1)',
                    '0 0 50px rgba(230,57,70,0.5), 0 0 120px rgba(230,57,70,0.2)',
                    '0 0 30px rgba(230,57,70,0.3), 0 0 80px rgba(230,57,70,0.1)',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                Sign Up Now
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="max-w-md mx-auto rounded-md p-8"
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                background: '#0F0F0F',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 80px rgba(230,57,70,0.06)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="font-heading"
                  style={{
                    fontSize: '2rem',
                    color: '#FFFFFF',
                    letterSpacing: '0.05em',
                  }}
                >
                  Join Our Mailing List
                </h2>
                <motion.button
                  onClick={() => setShowSignup(false)}
                  className="p-2 rounded"
                  aria-label="Close signup form"
                  style={{ color: '#555' }}
                  whileHover={{ color: '#E63946', rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="email-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label
                      htmlFor="email-signup"
                      className="block mb-2 text-left"
                      style={{
                        color: '#A0A0A0',
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.65rem',
                        fontWeight: 600,
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
                      className="w-full px-4 py-3 rounded-sm mb-4 transition-shadow duration-300"
                      aria-label="Enter your email address"
                      style={{
                        background: '#151515',
                        border: '1px solid rgba(255,255,255,0.06)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        fontSize: '0.95rem',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#E63946';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(230,57,70,0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 rounded-sm font-semibold uppercase tracking-wider"
                      style={{
                        fontSize: '0.85rem',
                        background: '#E63946',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        letterSpacing: '0.06em',
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 8px 30px rgba(230,57,70,0.3)',
                        background: '#FF2D3B',
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Subscribe
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex items-center justify-center gap-3 py-8"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <CheckCircle className="w-7 h-7" aria-hidden="true" style={{ color: '#C9A227' }} />
                    </motion.div>
                    <p className="font-medium" style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}>
                      Successfully subscribed!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 5,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, #050505)',
        }}
      />
    </div>
  );
}
