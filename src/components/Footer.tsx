import React from 'react';
import { Mic2, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mic2 className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-white">Brand Name</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Brief description or tagline for your brand goes here.
            </p>
            <div className="flex gap-3" role="navigation" aria-label="Social media links">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link One</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link Two</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link Three</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link Four</a></li>
            </ul>
          </nav>

          <nav aria-label="Resources navigation">
            <h3 className="text-white font-semibold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link One</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link Two</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link Three</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Link Four</a></li>
            </ul>
          </nav>
        </div>

        <div className="pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © 2026 Brand Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors focus:outline-none focus:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}