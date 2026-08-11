import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { LifetimeLogo } from './Logo';
import { MapPin, Clock, Phone, Star, Navigation, Calendar, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal }) => {
  return (
    <footer id="location" className="bg-[#05070A] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Brand & Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Brand Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <LifetimeLogo size="lg" />
              </div>
              <p className="text-sm text-slate-400 max-w-md pt-1">
                Jaipur's premier luxury gym space combining strength training, high-tech cardio, expert yoga, personalized diet planning, and a protein cafe.
              </p>
            </div>

            {/* Address & Info Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <span className="font-bold text-white block mb-0.5">Address:</span>
                  <span className="text-slate-300 leading-relaxed block">
                    {GYM_INFO.address}
                  </span>
                  <span className="text-xs text-sky-400 font-medium mt-1 block">
                    ({GYM_INFO.landmarks})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md p-3.5 rounded-xl">
                  <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Timings:</span>
                    <span className="text-slate-300">{GYM_INFO.timings}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md p-3.5 rounded-xl">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Call Now:</span>
                    <a href={`tel:${GYM_INFO.phoneFormatted}`} className="text-sky-400 font-bold hover:underline">
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Rating Strip */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md p-3.5 rounded-xl text-sm">
                <Star className="w-4 h-4 fill-sky-400 text-sky-400 shrink-0" />
                <span className="font-bold text-white">4.9 Rating</span>
                <span className="text-white/20">•</span>
                <span className="text-slate-300 font-medium">745+ Reviews on Google</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenTrialModal}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black px-5 py-2.5 rounded-full text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-1.5 cursor-pointer"
              >
                <span>👉 Book Free Trial</span>
              </button>

              <a
                href={GYM_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-4 py-2.5 rounded-full text-sm transition-colors flex items-center gap-1.5"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>👉 Get Directions</span>
              </a>

              <a
                href={`tel:${GYM_INFO.phoneFormatted}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-4 py-2.5 rounded-full text-sm transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>👉 Call Now</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" /> Malviya Nagar Location Map
              </h4>
              <span className="text-xs text-sky-400 font-medium">V Cube 3rd Floor</span>
            </div>

            {/* Google Map iFrame Container */}
            <div className="relative h-[320px] sm:h-[380px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <iframe
                title="Lifetime Fitness Club Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.873214589212!2d75.8115682!3d26.8439178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db60717208b07%3A0xb3a8bbbe97a9a147!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="absolute bottom-3 left-3 right-3 bg-[#05070A]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Opposite Gaurav Tower Marg</span>
                  <span className="text-slate-400">Easy parking & lift access to 3rd floor</span>
                </div>
                <a
                  href={GYM_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 text-slate-950 font-black px-3 py-1.5 rounded-full shrink-0 text-xs shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lifetime Fitness Club. All Rights Reserved. Malviya Nagar, Jaipur.</p>
          <div className="flex items-center gap-4">
            <span>Hygiene First</span>
            <span>•</span>
            <span>Certified Trainers</span>
            <span>•</span>
            <span>Member First Vibe</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
