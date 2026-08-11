import React, { useState } from 'react';
import { SERVICES, SAMPLE_CAFE_MENU } from '../data/gymData';
import { FacilityService, CafeItem } from '../types';
import { Dumbbell, Activity, Sparkles, Coffee, ClipboardCheck, ArrowRight, Check, X, ShieldCheck, Flame } from 'lucide-react';

interface ServicesSectionProps {
  onOpenTrialModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenTrialModal }) => {
  const [selectedService, setSelectedService] = useState<FacilityService | null>(null);
  const [showCafeMenuModal, setShowCafeMenuModal] = useState(false);
  const [selectedCafeCategory, setSelectedCafeCategory] = useState<'All' | 'Shakes' | 'Snacks' | 'Juices' | 'Meals'>('All');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-emerald-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-emerald-400" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Dumbbell className="w-6 h-6 text-emerald-400" />;
    }
  };

  const filteredCafeMenu = selectedCafeCategory === 'All'
    ? SAMPLE_CAFE_MENU
    : SAMPLE_CAFE_MENU.filter(item => item.category === selectedCafeCategory);

  return (
    <section id="services" className="py-20 bg-[#05070A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            🏋️ World-Class Amenities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Everything You Need.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-white bg-clip-text text-transparent">
              Under One Roof.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Designed for serious lifters, busy professionals, yoga enthusiasts, and anyone seeking a luxury fitness experience in Malviya Nagar.
          </p>
        </div>

        {/* 5-Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isCafe = service.id === 'cafe';

            return (
              <div
                key={service.id}
                className={`group relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image & Overlay */}
                <div>
                  <div className="relative h-56 overflow-hidden rounded-t-2xl border-b border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 brightness-90 group-hover:brightness-105 filter drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/40 to-transparent group-hover:via-[#05070A]/20 transition-all duration-500" />
                    
                    {/* Glowing Accent Ring on Hover */}
                    <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-emerald-500/40 rounded-t-2xl transition-all duration-300 pointer-events-none" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 bg-[#05070A]/85 backdrop-blur-md p-3 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                      {getServiceIcon(service.icon)}
                    </div>

                    {isCafe && (
                      <button
                        onClick={() => setShowCafeMenuModal(true)}
                        className="absolute bottom-3 right-3 bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-lg hover:bg-emerald-500 transition-colors flex items-center gap-1"
                      >
                        <Coffee className="w-3.5 h-3.5" /> View Café Menu
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 pt-2 border-t border-white/10">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      if (isCafe) {
                        setShowCafeMenuModal(true);
                      } else {
                        setSelectedService(service);
                      }
                    }}
                    className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/10"
                  >
                    <span>{isCafe ? 'Explore Nutrition Café Menu' : 'View Facility Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner below services */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-black text-white">Experience all facilities during your 1-Day Trial</h4>
            <p className="text-sm text-slate-300">No payment required. Get guided by our certified coaches from day one.</p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="shrink-0 bg-emerald-600 text-white font-bold px-6 py-3 rounded-full text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-500 transition-colors"
          >
            👉 Book Free Trial Now
          </button>
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070A]/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#05070A] border border-white/10 rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-lg font-black text-white">
                {selectedService.title}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase text-emerald-400">Included Amenities</div>
                <ul className="space-y-2">
                  {selectedService.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenTrialModal();
                }}
                className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-full text-center text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-500"
              >
                👉 Claim Free Trial for {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gym Cafe Menu Modal */}
      {showCafeMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070A]/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-[#05070A] border border-white/10 rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowCafeMenuModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Lifetime Gym Café Menu</h3>
                <p className="text-xs text-slate-400">Post-workout protein, cold-pressed juices & clean macro meals</p>
              </div>
            </div>

            {/* Category selector */}
            <div className="flex flex-wrap gap-2">
              {(['All', 'Shakes', 'Juices', 'Snacks', 'Meals'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCafeCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                    selectedCafeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCafeMenu.map(item => (
                <div key={item.id} className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white leading-tight">{item.name}</div>
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="bg-emerald-500/10 text-emerald-400 font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {item.protein}
                      </span>
                      <span className="text-slate-400 flex items-center gap-0.5">
                        <Flame className="w-3 h-3 text-orange-400" /> {item.calories} kcal
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
              <span>☕ Freshly prepared at 3rd Floor, V Cube Gym Cafe</span>
              <button
                onClick={() => {
                  setShowCafeMenuModal(false);
                  onOpenTrialModal();
                }}
                className="bg-emerald-600 text-white font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Book 1-Day Trial
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
