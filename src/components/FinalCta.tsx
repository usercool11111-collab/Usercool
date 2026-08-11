import React from 'react';
import { GYM_IMAGES } from '../data/gymData';
import { ArrowRight, Sparkles, Clock, MapPin, ShieldCheck } from 'lucide-react';

interface FinalCtaProps {
  onOpenTrialModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative py-24 bg-[#05070A] text-white overflow-hidden border-t border-white/10">
      {/* Background High Contrast Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={GYM_IMAGES.hero}
          alt="Motivational Gym Workout"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-125 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/90 to-[#05070A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
          <Sparkles className="w-3.5 h-3.5" /> Start Today
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Your Best Body Starts With{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-white bg-clip-text text-transparent">
            One Decision.
          </span>
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          Stop scrolling. Stop planning "from Monday." Walk into Jaipur's most premium fitness club — and feel the difference from day one.
        </p>

        {/* CTA Button Box */}
        <div className="pt-4 max-w-md mx-auto space-y-3">
          <button
            onClick={onOpenTrialModal}
            id="final-cta-claim-btn"
            className="w-full relative group overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg sm:text-xl py-4 px-8 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>👉 Claim Your 1-Day Free Trial Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Micro copy */}
          <p className="text-xs sm:text-sm text-emerald-400 font-semibold italic">
            *(Limited slots available daily. Trainers fill up fast.)*
          </p>
        </div>

        {/* Address and timing strip */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" /> 3rd Floor, V Cube, Malviya Nagar, Jaipur
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-400" /> Open Daily: 5:00 AM - 11:00 PM
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Free Parking Available
          </span>
        </div>

      </div>
    </section>
  );
};
