import React from "react";
import { Users, Target, BookOpen } from "lucide-react";

export function CompactInfo() {
  return (
    <section
      className="py-32 bg-deep-gray relative overflow-hidden"
      aria-labelledby="info-heading"
    >
      {/* Decorative SVG Pattern Backdrop */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#D1FF26" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Focal Point Content */}
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-[1px] bg-acid-green/40" />
              <span className="text-[10px] font-black text-acid-green uppercase tracking-[0.3em]">Interactive Lab</span>
            </div>
            
            <h2
              id="info-heading"
              className="font-black text-white mb-8 tracking-tighter leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
            >
              Working <span className="text-acid-green">WITH</span> <br/>
              Artificial Intelligence
            </h2>
            
            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl mb-12">
              Our Misconception Lab isn't about AI replacement—it's about augmentation. 
              Learn how to leverage these tools to amplify your human potential and 
              redefine what's possible in your creative workflow.
            </p>
          </div>

          {/* Right: Cards (Asymmetrical & Overlapping) */}
          <div className="lg:w-1/2 relative">
            <div className="relative grid gap-6">
              
              {/* Card 1: Shifted Left on LG */}
              <div className="glass p-8 rounded-3xl border-white/10 hover:border-acid-green/30 transition-all duration-500 hover:scale-[1.02] relative lg:-ml-8 lg:mr-8">
                <div className="w-14 h-14 bg-acid-green text-obsidian rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                  <Target className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  Task One
                </h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  This is where sample example 1 will go. Exploring the initial touchpoints of collaboration.
                </p>
              </div>

              {/* Card 2: Shifted Right & Overlapping on LG */}
              <div className="glass p-8 rounded-3xl border-white/10 hover:border-acid-green/30 transition-all duration-500 hover:scale-[1.02] relative lg:ml-8 lg:-mr-8 z-20">
                <div className="w-14 h-14 bg-white/10 text-acid-green rounded-2xl flex items-center justify-center mb-6 border border-acid-green/20">
                  <BookOpen className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  Task Two
                </h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  This is where sample example 2 will go. Diving deep into the methodology of synergistic workflows.
                </p>
              </div>

              {/* Card 3: Centered */}
              <div className="glass p-8 rounded-3xl border-white/10 hover:border-acid-green/30 transition-all duration-500 hover:scale-[1.02] relative lg:mx-4">
                <div className="w-14 h-14 bg-white/10 text-acid-green rounded-2xl flex items-center justify-center mb-6 border border-acid-green/20">
                  <Users className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  Task Three
                </h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  This is where sample example 3 will go. Fostering a community that understands the true value of AI.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}