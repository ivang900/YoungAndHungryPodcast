import React from 'react';
import { Mic2, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

export function Footer() {
      return (
        <footer className="bg-obsidian text-white/40 py-12 relative overflow-hidden" role="contentinfo">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Brand & Tagline */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border-t border-acid-green/30">
                    <Mic2 className="w-4 h-4 text-acid-green" aria-hidden="true" />
                  </div>
                  <span className="text-lg font-black text-white tracking-tighter uppercase italic">Young & <span className="text-acid-green">Hungry</span></span>
                </div>
                <div className="hidden md:block w-px h-6 bg-white/10" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] max-w-xs text-center md:text-left leading-relaxed">
                  Dr. Young • Ethical AI Synergy • Creative Lab
                </p>
              </div>
    
              {/* Navigation & Socials */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <nav aria-label="Footer navigation" className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <a href="#" className="hover:text-acid-green transition-colors">Episodes</a>
                  <a href="#" className="hover:text-acid-green transition-colors">Lab</a>
                  <a href="#" className="hover:text-acid-green transition-colors">Privacy</a>
                </nav>
                
                <div className="flex gap-3" role="navigation" aria-label="Social media links">
                  {[Twitter, Linkedin, Youtube, Mail].map((Icon, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="w-8 h-8 glass hover:bg-acid-green hover:text-obsidian rounded-lg flex items-center justify-center transition-all duration-300 border border-white/5"
                    >
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
    
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
              <p>© 2026 Young & Hungry. Built for the future of collaboration.</p>
              <div className="flex gap-6">
                <span className="text-acid-green/40">Augmenting Human Potential</span>
              </div>
            </div>
          </div>
        </footer>
      );
    }
    