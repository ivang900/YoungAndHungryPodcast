import React from 'react';
import { Mic2, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer
      className="relative"
      role="contentinfo"
      style={{
        background: 'var(--cin-black)',
        borderTop: '1px solid var(--cin-border)',
        paddingTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded flex items-center justify-center"
                style={{
                  background: 'var(--cin-red)',
                  boxShadow: '0 4px 20px rgba(230, 57, 70, 0.25)',
                }}
              >
                <Mic2 className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span
                className="font-heading"
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--cin-text)',
                  letterSpacing: '0.05em',
                }}
              >
                Brand Name
              </span>
            </div>
            <p className="mb-6" style={{ color: 'var(--cin-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '300px' }}>
              Brief description or tagline for your brand goes here.
            </p>
            <div className="flex gap-2" role="navigation" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded flex items-center justify-center transition-all duration-300"
                  aria-label={label}
                  style={{
                    background: 'var(--cin-surface)',
                    border: '1px solid var(--cin-border)',
                    color: 'var(--cin-text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cin-red)';
                    e.currentTarget.style.color = 'var(--cin-red)';
                    e.currentTarget.style.background = 'var(--cin-red-subtle)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(230, 57, 70, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cin-border)';
                    e.currentTarget.style.color = 'var(--cin-text-muted)';
                    e.currentTarget.style.background = 'var(--cin-surface)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3
              className="font-heading mb-4"
              style={{
                color: 'var(--cin-text)',
                fontSize: '1rem',
                letterSpacing: '0.1em',
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Link One', 'Link Two', 'Link Three', 'Link Four'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-300 accent-line-hover inline-block pb-0.5"
                    style={{
                      color: 'var(--cin-text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cin-red)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cin-text-muted)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources navigation">
            <h3
              className="font-heading mb-4"
              style={{
                color: 'var(--cin-text)',
                fontSize: '1rem',
                letterSpacing: '0.1em',
              }}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {['Link One', 'Link Two', 'Link Three', 'Link Four'].map((link, i) => (
                <li key={`res-${i}`}>
                  <a
                    href="#"
                    className="transition-colors duration-300 accent-line-hover inline-block pb-0.5"
                    style={{
                      color: 'var(--cin-text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cin-red)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cin-text-muted)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid var(--cin-border)',
          }}
        >
          <p style={{ color: 'var(--cin-text-muted)', fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>
            © 2026 Brand Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors duration-300"
                style={{
                  color: 'var(--cin-text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cin-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cin-text-muted)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
