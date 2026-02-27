import React, { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Mic2, X, CheckCircle, Sparkles } from "lucide-react";

/* ── flame wisps + sparks + ash ── */
function FlameParticles() {
  const particles = useMemo(() => {
    const flames = Array.from({ length: 12 }).map((_, i) => ({
      id: `flame-${i}`,
      type: 'flame' as const,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      dur: 3 + Math.random() * 4,
      width: 3 + Math.random() * 5,
      height: 12 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 40,
    }));
    const sparks = Array.from({ length: 14 }).map((_, i) => ({
      id: `spark-${i}`,
      type: 'spark' as const,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      dur: 5 + Math.random() * 7,
      size: 1.5 + Math.random() * 3,
      drift: (Math.random() - 0.5) * 100,
      isGold: Math.random() > 0.5,
    }));
    const ash = Array.from({ length: 8 }).map((_, i) => ({
      id: `ash-${i}`,
      type: 'ash' as const,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      dur: 8 + Math.random() * 6,
      size: 2 + Math.random() * 3,
      drift: (Math.random() - 0.5) * 120,
    }));
    return [...flames, ...sparks, ...ash];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {particles.map((p) => {
        if (p.type === 'flame') {
          return (
            <motion.div
              key={p.id}
              className="absolute"
              style={{
                left: `${p.left}%`,
                bottom: '-2%',
                width: p.width,
                height: p.height,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                background: 'linear-gradient(to top, #FF6B2B, #FFB347, rgba(255,179,71,0))',
                filter: 'blur(1px)',
                boxShadow: '0 0 12px rgba(255,107,43,0.6), 0 0 30px rgba(232,90,27,0.3)',
              }}
              animate={{
                y: [0, -300 - Math.random() * 200],
                x: [0, p.drift],
                opacity: [0, 0.9, 0.8, 0],
                scaleX: [1, 0.6, 0.3],
                scaleY: [1, 1.4, 0.5],
              }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
            />
          );
        }
        if (p.type === 'spark') {
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.left}%`,
                bottom: '-5%',
                width: p.size,
                height: p.size,
                background: p.isGold ? '#FFB347' : '#FF6B2B',
                boxShadow: p.isGold
                  ? '0 0 8px #FFB347, 0 0 20px rgba(255,179,71,0.5)'
                  : '0 0 8px #FF6B2B, 0 0 20px rgba(255,107,43,0.5)',
              }}
              animate={{
                y: [0, -1000 - Math.random() * 400],
                x: [0, p.drift],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
            />
          );
        }
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              bottom: '10%',
              width: p.size,
              height: p.size,
              background: 'rgba(80,40,30,0.7)',
            }}
            animate={{
              y: [0, -800 - Math.random() * 400],
              x: [0, p.drift],
              opacity: [0, 0.5, 0.4, 0],
              rotate: [0, 360],
            }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

/* ── scan lines ── */
function ScanLines() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, opacity: 0.015 }}>
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0"
          style={{ top: `${(i / 60) * 100}%`, height: '1px', background: 'rgba(255,200,150,0.5)' }}
        />
      ))}
    </div>
  );
}

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
    setTimeout(() => { setSubmitted(false); setEmail(""); setShowSignup(false); }, 2500);
  };

  const entrance = { hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };
  const titleVariant = {
    hidden: { opacity: 0, letterSpacing: "0.3em", filter: "blur(12px)" },
    show: { opacity: 1, letterSpacing: "0.04em", filter: "blur(0px)", transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
  };
  const lineExpand = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 } },
  };

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#0A0000' }}
    >
      {/* Volcanic sky */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 20%, rgba(230,57,70,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 30% 80%, rgba(232,90,27,0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 70% 80%, rgba(255,107,43,0.06) 0%, transparent 50%)
            `,
          }}
        />
        {/* Distant lava glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '30%', background: 'linear-gradient(to bottom, transparent, rgba(232,90,27,0.06), rgba(192,78,32,0.1))' }}
        />
      </motion.div>

      <ScanLines />
      <FlameParticles />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 3, background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,0,0,0.6) 100%)' }}
      />

      {/* Rocky edge hints at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 4, height: '120px',
          background: `
            linear-gradient(to bottom, transparent 0%, rgba(10,0,0,0.3) 50%, rgba(13,2,2,0.8) 100%),
            radial-gradient(ellipse 20% 100% at 5% 100%, rgba(20,5,5,0.8) 0%, transparent 70%),
            radial-gradient(ellipse 15% 100% at 95% 100%, rgba(20,5,5,0.7) 0%, transparent 70%)
          `,
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
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-12 cursor-pointer"
          role="status"
          onClick={() => setShowSignup(true)}
          style={{
            background: 'rgba(232,90,27,0.12)',
            border: '1px solid rgba(255,107,43,0.35)',
          }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(232,90,27,0.1)',
              '0 0 40px rgba(232,90,27,0.25)',
              '0 0 20px rgba(232,90,27,0.1)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.06, background: 'rgba(232,90,27,0.18)' }}
        >
          <Sparkles className="w-4 h-4" style={{ color: '#FFB347' }} />
          <span style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem' }}>
            Sign Up Now!
          </span>
          <span style={{ color: '#FF6B2B', fontSize: '0.72rem', fontWeight: 600 }}>→</span>
        </motion.div>

        {/* Title */}
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <motion.h1
            variants={titleVariant}
            className="font-heading mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 0.95,
              color: '#FFFFFF',
              textShadow: '0 0 80px rgba(232,90,27,0.25), 0 4px 60px rgba(0,0,0,0.5)',
            }}
          >
            Sample Podcast Info{" "}
            <span style={{ color: '#FF6B2B' }}>Coming</span> Soon{" "}
            <span style={{ color: '#FFB347' }}>TBD</span>
          </motion.h1>
        </motion.div>

        {/* Accent line */}
        <motion.div
          variants={lineExpand}
          className="mx-auto mb-10"
          style={{ width: '140px', height: '2px', background: 'linear-gradient(90deg, #E63946, #FF6B2B, #FFB347)', transformOrigin: 'center' }}
        />

        {/* Subtitle */}
        <motion.div style={{ y: subtitleY }}>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto mb-28"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)', color: '#B09890', lineHeight: 1.75, fontFamily: 'var(--font-body)' }}
          >
            This is where we will be displaying podcast logo, snippets etc.
          </motion.p>
        </motion.div>

        {/* CTA — follows same scroll parallax as text */}
        <motion.div style={{ y: subtitleY, opacity: titleOpacity }}>
        <AnimatePresence mode="wait">
          {!showSignup ? (
            <motion.div key="cta" variants={fadeUp} exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}>
              <motion.button
                onClick={() => setShowSignup(true)}
                className="rounded-sm font-semibold uppercase tracking-wider"
                style={{ fontSize: '1.1rem', paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '1.1rem', paddingBottom: '1.1rem', background: 'linear-gradient(135deg, #E63946, #FF6B2B)', color: '#FFFFFF', border: 'none', cursor: 'pointer', letterSpacing: '0.08em' }}
                whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(232,90,27,0.5), 0 0 100px rgba(255,107,43,0.2)' }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(232,90,27,0.3), 0 0 80px rgba(255,107,43,0.1)',
                    '0 0 50px rgba(232,90,27,0.5), 0 0 120px rgba(255,107,43,0.2)',
                    '0 0 30px rgba(232,90,27,0.3), 0 0 80px rgba(255,107,43,0.1)',
                  ],
                }}
                transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
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
              style={{ background: '#120404', border: '1px solid rgba(255,107,43,0.15)', boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 80px rgba(232,90,27,0.06)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading" style={{ fontSize: '2rem', color: '#FFFFFF', letterSpacing: '0.05em' }}>
                  Join Our Mailing List
                </h2>
                <motion.button
                  onClick={() => setShowSignup(false)}
                  className="p-2 rounded"
                  style={{ color: '#6B5550' }}
                  whileHover={{ color: '#FF6B2B', rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="email-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                    <label htmlFor="email-signup" className="block mb-2 text-left" style={{ color: '#B09890', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.65rem', fontWeight: 600 }}>
                      Email Address
                    </label>
                    <input
                      id="email-signup" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="w-full px-4 py-3 rounded-sm mb-4 transition-shadow duration-300"
                      style={{ background: '#1E0808', border: '1px solid rgba(255,180,140,0.06)', color: '#FFFFFF', fontFamily: 'var(--font-body)', outline: 'none', fontSize: '0.95rem' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#FF6B2B'; e.currentTarget.style.boxShadow = '0 0 30px rgba(232,90,27,0.2)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,180,140,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                    <motion.button
                      type="submit"
                      className="w-full px-6 py-3 rounded-sm font-semibold uppercase tracking-wider"
                      style={{ fontSize: '0.85rem', background: 'linear-gradient(135deg, #E63946, #FF6B2B)', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}
                      whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(232,90,27,0.3)' }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Subscribe
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div key="success" className="flex items-center justify-center gap-3 py-8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', damping: 15 }}>
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                      <CheckCircle className="w-7 h-7" style={{ color: '#FFB347' }} />
                    </motion.div>
                    <p className="font-medium" style={{ color: '#FFFFFF', fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}>Successfully subscribed!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ zIndex: 5, height: '200px', background: 'linear-gradient(to bottom, transparent, #0D0202)' }}
      />
    </div>
  );
}
