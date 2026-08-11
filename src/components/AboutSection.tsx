import React, { useState } from 'react';
import { GYM_IMAGES } from '../data/gymData';
import { CheckCircle2, XCircle, Sparkles, Trophy, Users, Shield, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hygiene' | 'coaching' | 'equipment' | 'vibe'>('hygiene');

  return (
    <section id="about" className="py-20 bg-[#05070A] text-white relative overflow-hidden">
      {/* Background Subtle Image Parallax overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src={GYM_IMAGES.about}
          alt="Gym Interior Wide"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> The Lifetime Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            This Isn't Just a Gym.{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">It's an Upgrade.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Most gyms feel the same. Crowded. Worn-out equipment. Zero guidance. <strong className="text-white">Lifetime Fitness Club is different.</strong>
          </p>
        </div>

        {/* Content Split: Text & Contrast Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                We built a space where premium meets performance — spotless floors, high-end machines, and trainers who actually care whether you hit your goals.
              </p>
              
              <p className="text-slate-300 text-base leading-relaxed">
                Every visit should feel like an investment in yourself. <strong className="text-emerald-400">Not a chore.</strong>
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white">Hygiene-first environment</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white">Certified, hands-on trainers</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white">Zero waiting, zero crowding</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white">A vibe that keeps you coming back</span>
                </div>
              </div>

              {/* Tagline Banner */}
              <div className="p-4 bg-gradient-to-r from-emerald-600/20 via-emerald-600/10 to-transparent border-l-4 border-emerald-500 rounded-r-xl">
                <p className="text-lg font-black text-emerald-300 italic">
                  "This is fitness, the way it should feel."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Comparison / Feature Preview Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#05070A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white text-sm">Lifetime Upgrade Difference</span>
                </div>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  Malviya Nagar, Jaipur
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => setActiveTab('hygiene')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors ${
                      activeTab === 'hygiene'
                        ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    ✨ Hygiene
                  </button>
                  <button
                    onClick={() => setActiveTab('coaching')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors ${
                      activeTab === 'coaching'
                        ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    🏋️ Trainers
                  </button>
                  <button
                    onClick={() => setActiveTab('equipment')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors ${
                      activeTab === 'equipment'
                        ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    ⚙️ Machines
                  </button>
                  <button
                    onClick={() => setActiveTab('vibe')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg transition-colors ${
                      activeTab === 'vibe'
                        ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    ⚡ Vibe
                  </button>
                </div>

                {/* Tab Detail view */}
                <div className="space-y-4 pt-2">
                  {activeTab === 'hygiene' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="p-4 bg-white/5 rounded-xl border border-emerald-500/30">
                        <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Lifetime Standard</div>
                        <div className="text-sm font-bold text-white">Daily Deep Sanitization & Pristine Washrooms</div>
                        <p className="text-xs text-slate-300 mt-1">Dedicated house staff sanitize machine handles, floor mats, and locker room washrooms hourly.</p>
                      </div>
                      <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 opacity-60">
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Ordinary Commercial Gyms</div>
                        <div className="text-sm font-semibold text-slate-400">Unclean mats, broken lockers, damp odor</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'coaching' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="p-4 bg-white/5 rounded-xl border border-emerald-500/30">
                        <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Lifetime Standard</div>
                        <div className="text-sm font-bold text-white">Hands-on Form Checks & Humble Mentorship</div>
                        <p className="text-xs text-slate-300 mt-1">Coaches like Ajay Sir actively monitor your posture, prevent injuries, and craft custom routine splits.</p>
                      </div>
                      <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 opacity-60">
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Ordinary Commercial Gyms</div>
                        <div className="text-sm font-semibold text-slate-400">Coaches staring at phones or pushing costly packages</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'equipment' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="p-4 bg-white/5 rounded-xl border border-emerald-500/30">
                        <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Lifetime Standard</div>
                        <div className="text-sm font-bold text-white">Smooth Biomechanical Hammer Strength Equipment</div>
                        <p className="text-xs text-slate-300 mt-1">Perfect resistance curves targeting exact muscle fiber contraction for fast hypertrophy.</p>
                      </div>
                      <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 opacity-60">
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Ordinary Commercial Gyms</div>
                        <div className="text-sm font-semibold text-slate-400">Squeaking cables, sticky pulleys & long queues for benches</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'vibe' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="p-4 bg-white/5 rounded-xl border border-emerald-500/30">
                        <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Lifetime Standard</div>
                        <div className="text-sm font-bold text-white">High-Energy Motivational Atmosphere + Gym Café</div>
                        <p className="text-xs text-slate-300 mt-1">Disciplined members, focused lighting, energetic beats, and post-workout protein smoothies.</p>
                      </div>
                      <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 opacity-60">
                        <div className="text-xs uppercase font-bold text-slate-500 mb-1">Ordinary Commercial Gyms</div>
                        <div className="text-sm font-semibold text-slate-400">Noisy overcrowding, poor ventilation & damp atmosphere</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Gym Floor Image Embed */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={GYM_IMAGES.about}
                    alt="Lifetime Fitness Club Interior"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-bold text-white">3rd Floor, V Cube • 8,000+ sq ft Space</span>
                    <span className="text-emerald-400 font-bold">Open Daily 5 AM - 11 PM</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
