import React, { useState, useEffect } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, Star, Menu, X, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrialModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-emerald-950/80 text-emerald-200 border-b border-emerald-500/20 px-4 py-1.5 text-xs font-semibold flex items-center justify-between backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-3 h-3 text-emerald-400" /> Malviya Nagar
            </span>
            <span className="hidden sm:inline-block text-slate-300">
              📍 3rd Floor, V Cube, Opp. Gaurav Tower Marg
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> 5:00 AM - 11:00 PM
            </span>
            <a 
              href={`tel:${GYM_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> {GYM_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#05070A]/95 backdrop-blur-md border-white/10 shadow-2xl py-3' 
            : 'bg-[#05070A]/80 backdrop-blur-sm border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold italic text-white text-lg shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tighter text-white uppercase italic group-hover:text-emerald-400 transition-colors">
                  Lifetime <span className="text-emerald-500">Fitness</span>
                </span>
                <span className="hidden lg:inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  LUXURY GYM
                </span>
              </div>
              <p className="text-[11px] text-white/50 font-medium">Malviya Nagar, Jaipur</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors"
            >
              The Experience
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors"
            >
              Facilities & Cafe
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>Reviews</span>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full text-[10px] font-bold">
                4.9 ★
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors"
            >
              Location & Hours
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Rating pill */}
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-white/70">
              <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              <span className="font-bold text-white">4.9</span>
              <span className="text-white/40">(745+ reviews)</span>
            </div>

            <button
              onClick={onOpenTrialModal}
              id="header-cta-btn"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-95 flex items-center gap-1.5"
            >
              <span>Book Free Trial</span>
              <span className="text-base">👉</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#05070A]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 px-3 text-white/80 hover:bg-white/5 rounded-lg text-sm font-semibold"
            >
              The Experience
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 px-3 text-white/80 hover:bg-white/5 rounded-lg text-sm font-semibold"
            >
              Facilities & Gym Cafe
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left py-2 px-3 text-white/80 hover:bg-white/5 rounded-lg text-sm font-semibold flex items-center justify-between"
            >
              <span>Member Reviews</span>
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full">4.9 ★</span>
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block w-full text-left py-2 px-3 text-white/80 hover:bg-white/5 rounded-lg text-sm font-semibold"
            >
              Location & Hours
            </button>
            
            <div className="pt-2 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-full text-center shadow-[0_0_20px_rgba(16,185,129,0.4)] text-sm"
              >
                👉 Claim Your 1-Day Free Trial
              </button>
              <p className="text-[11px] text-white/40 text-center">
                3rd Floor, V Cube, Malviya Nagar • Open 5 AM - 11 PM
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
