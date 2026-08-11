import React from 'react';
import { GYM_INFO, GYM_IMAGES } from '../data/gymData';
import { Star, ShieldCheck, Dumbbell, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#05070A] overflow-hidden pt-8 pb-16">
      {/* Background Cinematic Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_IMAGES.hero}
          alt="Lifetime Fitness Club Gym Floor"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-120 opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Immersive UI Dark vignette and atmospheric green radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/80 to-[#05070A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-[#05070A]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8">
        
        {/* Top Location & Rating Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl text-xs sm:text-sm">
          <span className="flex items-center gap-1 text-emerald-400 font-bold">
            <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            4.9 ★ Rating
          </span>
          <span className="text-white/30">•</span>
          <span className="text-slate-200 font-medium">745+ Google Reviews</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-emerald-300 font-semibold hidden sm:inline-flex items-center gap-1">
            📍 Malviya Nagar, Jaipur
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Jaipur's Most Premium Fitness Experience.{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-100 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.45)]">
            Built for Real Results.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
          Strength training. Advanced cardio. Expert yoga. A café that fuels your goals. All in one luxury space in <strong className="text-white font-bold">Malviya Nagar</strong> — trusted by <strong className="text-emerald-400 font-bold">745+ members</strong> who rate us 4.9★.
        </p>

        {/* Call To Action Box */}
        <div className="pt-2 pb-4 max-w-md mx-auto space-y-3">
          <button
            onClick={onOpenTrialModal}
            id="hero-claim-trial-btn"
            className="w-full relative group overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg sm:text-xl py-4 px-8 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>👉 Claim Your 1-Day Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Micro Copy */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            <em>(No commitment. Just walk in and feel the difference.)</em>
          </p>
        </div>

        {/* Value Highlights Grid */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto border-t border-white/10">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl text-left flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
            <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Hammer Strength</div>
              <div className="text-xs text-slate-400">Muscle-building zone</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl text-left flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
            <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Hygienic</div>
              <div className="text-xs text-slate-400">Spotless washrooms</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl text-left flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
            <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Certified Coaches</div>
              <div className="text-xs text-slate-400">1-on-1 diet & form</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl text-left flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
            <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">In-House Café</div>
              <div className="text-xs text-slate-400">Post-workout nutrition</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
