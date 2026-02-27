import React, { useRef } from 'react';
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
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Red glow at top of footer */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '30%',
          height: '80px',
          background: 'radial-gradient(ellipse at top, rgba(230,57,70,0.06) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-6"
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
                  background: '#E63946',
                }}
                whileHover={{
                  boxShadow: '0 0 30px rgba(230,57,70,0.4)',
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
                }}
              >
                Brand Name
              </span>
            </div>
            <p
              style={{
                color: '#555555',
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
                    background: '#0F0F0F',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: '#555555',
                  }}
                  variants={fadeUp}
                  whileHover={{
                    borderColor: '#E63946',
                    color: '#E63946',
                    background: 'rgba(230,57,70,0.06)',
                    boxShadow: '0 4px 25px rgba(230,57,70,0.15)',
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
                      color: '#555555',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}
                    whileHover={{ color: '#E63946', x: 4 }}
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
                      color: '#555555',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}
                    whileHover={{ color: '#E63946', x: 4 }}
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
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{
            color: '#555555',
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
                  color: '#555555',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                }}
                whileHover={{ color: '#E63946' }}
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
