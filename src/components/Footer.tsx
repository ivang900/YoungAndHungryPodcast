import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mic2, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Mail, label: 'Email' },
];

const quickLinks = ['Link One', 'Link Two', 'Link Three', 'Link Four'];
const resourceLinks = ['Link One', 'Link Two', 'Link Three', 'Link Four'];

/* ── Animated lava surface ── */
function LavaSurface() {
  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '60px', overflow: 'hidden' }}>
      {/* Animated SVG lava waves */}
      <svg
        viewBox="0 0 480 60"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      >
        <defs>
          <linearGradient id="lavaGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C04E20" />
            <stop offset="30%" stopColor="#E85A1B" />
            <stop offset="50%" stopColor="#FF6B2B" />
            <stop offset="70%" stopColor="#E85A1B" />
            <stop offset="100%" stopColor="#C04E20" />
          </linearGradient>
          <linearGradient id="lavaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB347" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C04E20" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main lava wave */}
        <motion.path
          fill="url(#lavaGrad1)"
          animate={{
            d: [
              'M0,25 Q40,10 80,22 T160,25 T240,20 T320,25 T400,22 T480,25 L480,60 L0,60 Z',
              'M0,20 Q40,30 80,18 T160,22 T240,28 T320,18 T400,25 T480,20 L480,60 L0,60 Z',
              'M0,28 Q40,15 80,25 T160,20 T240,24 T320,28 T400,18 T480,28 L480,60 L0,60 Z',
              'M0,22 Q40,28 80,20 T160,28 T240,22 T320,20 T400,28 T480,22 L480,60 L0,60 Z',
              'M0,25 Q40,10 80,22 T160,25 T240,20 T320,25 T400,22 T480,25 L480,60 L0,60 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Highlight wave — bright top edge */}
        <motion.path
          fill="url(#lavaGrad2)"
          animate={{
            d: [
              'M0,26 Q60,14 120,24 T240,22 T360,26 T480,24 L480,35 L0,35 Z',
              'M0,22 Q60,30 120,20 T240,26 T360,20 T480,22 L480,35 L0,35 Z',
              'M0,28 Q60,18 120,28 T240,20 T360,28 T480,20 L480,35 L0,35 Z',
              'M0,22 Q60,28 120,22 T240,28 T360,22 T480,26 L480,35 L0,35 Z',
              'M0,26 Q60,14 120,24 T240,22 T360,26 T480,24 L480,35 L0,35 Z',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Hot glow above the lava line */}
      <div
        className="absolute -top-20 left-0 right-0"
        style={{
          height: '40px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,107,43,0.08))',
        }}
      />
    </div>
  );
}

/* ── Lava bubbles ── */
function LavaBubbles() {
  const bubbles = useMemo(() =>
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: 8 + Math.random() * 84,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 8,
      dur: 3 + Math.random() * 4,
    })),
  []);

  return (
    <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '80px', overflow: 'hidden' }}>
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.left}%`,
            top: '30px',
            width: b.size,
            height: b.size,
            background: 'radial-gradient(circle at 30% 30%, #FFB347, #E85A1B)',
            boxShadow: '0 0 8px rgba(255,107,43,0.5), inset 0 -2px 4px rgba(192,78,32,0.6)',
          }}
          animate={{
            y: [0, -20 - Math.random() * 15],
            scale: [0, 1, 1.2, 0.8, 0],
            opacity: [0, 0.8, 0.9, 0.6, 0],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

/* ── Heat shimmer effect ── */
function HeatShimmer() {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{
        height: '100px',
        background: 'linear-gradient(to bottom, rgba(255,107,43,0.03), transparent)',
        filter: 'blur(2px)',
      }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scaleY: [1, 1.02, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <footer
      ref={ref}
      className="relative"
      role="contentinfo"
      style={{
        background: 'linear-gradient(to bottom, #2A0A08 0%, #4A1A12 20%, #6E2818 40%, #853218 60%, #A04020 80%, #C04E20 100%)',
        paddingTop: '5rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Lava surface at top of footer */}
      <LavaSurface />
      <LavaBubbles />
      <HeatShimmer />

      {/* Molten glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '60%',
          height: '120px',
          background: 'radial-gradient(ellipse at top, rgba(255,107,43,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255,179,71,0.06) 0%, transparent 60%)',
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto px-6"
        style={{ zIndex: 2 }}
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #E63946, #FF6B2B)',
                  boxShadow: '0 0 20px rgba(232,90,27,0.3)',
                }}
                whileHover={{
                  boxShadow: '0 0 40px rgba(255,107,43,0.5)',
                  scale: 1.08,
                }}
              >
                <Mic2 className="w-5 h-5 text-white" aria-hidden="true" />
              </motion.div>
              <span
                className="font-heading"
                style={{
                  fontSize: '1.5rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.06em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
              >
                Brand Name
              </span>
            </div>
            <p
              style={{
                color: 'rgba(255,220,200,0.5)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                maxWidth: '280px',
                marginBottom: '1.5rem',
              }}
            >
              Brief description or tagline for your brand goes here.
            </p>

            {/* Social icons */}
            <div className="flex gap-2" role="navigation" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,180,140,0.1)',
                    color: 'rgba(255,220,200,0.5)',
                  }}
                  variants={fadeUp}
                  whileHover={{
                    borderColor: '#FFB347',
                    color: '#FFB347',
                    background: 'rgba(255,107,43,0.15)',
                    boxShadow: '0 4px 25px rgba(255,107,43,0.2)',
                    y: -3,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav variants={fadeUp} aria-label="Footer navigation">
            <h3
              className="font-heading mb-5"
              style={{
                color: '#FFFFFF',
                fontSize: '1rem',
                letterSpacing: '0.12em',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="inline-block relative"
                    style={{
                      color: 'rgba(255,220,200,0.5)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}
                    whileHover={{ color: '#FFB347', x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Resources */}
          <motion.nav variants={fadeUp} aria-label="Resources navigation">
            <h3
              className="font-heading mb-5"
              style={{
                color: '#FFFFFF',
                fontSize: '1rem',
                letterSpacing: '0.12em',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, i) => (
                <li key={`res-${i}`}>
                  <motion.a
                    href="#"
                    className="inline-block relative"
                    style={{
                      color: 'rgba(255,220,200,0.5)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}
                    whileHover={{ color: '#FFB347', x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="pt-5 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,180,140,0.12)' }}
        >
          <p style={{
            color: 'rgba(255,220,200,0.4)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
          }}>
            © 2026 Brand Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <motion.a
                key={link}
                href="#"
                style={{
                  color: 'rgba(255,220,200,0.4)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                }}
                whileHover={{ color: '#FFB347' }}
                transition={{ duration: 0.25 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
