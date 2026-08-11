import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal }) => {
  return (
    <>
      {/* Desktop & Mobile Floating Right Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Quick Chat Floating Button */}
        <a
          href={GYM_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-sky-500 hover:bg-sky-400 text-slate-950 p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center border-2 border-sky-300/40"
          title="Chat with Lifetime Fitness on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950 stroke-sky-500" />
          <span className="absolute right-full mr-3 bg-slate-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            WhatsApp Us (+91 99505 50885)
          </span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${GYM_INFO.phoneFormatted}`}
          className="group relative bg-white/10 hover:bg-white/20 border-2 border-sky-500/40 text-sky-400 p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center backdrop-blur-md"
          title="Call Lifetime Fitness Reception"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-[#05070A] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Call Reception
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#05070A]/95 border-t border-white/10 backdrop-blur-md px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="space-y-0.5">
          <div className="text-xs font-black text-white flex items-center gap-1">
            <span>Lifetime Fitness Club</span>
            <span className="text-[10px] bg-sky-500/20 text-sky-400 px-1.5 rounded-full border border-sky-500/20">4.9 ★</span>
          </div>
          <div className="text-[10px] text-slate-400">Malviya Nagar, Jaipur</div>
        </div>

        <button
          onClick={onOpenTrialModal}
          className="bg-sky-500 text-slate-950 font-black px-4 py-2.5 rounded-full text-xs shadow-[0_0_15px_rgba(56,189,248,0.4)] flex items-center gap-1 shrink-0 cursor-pointer"
        >
          <span>👉 1-Day Free Trial</span>
        </button>
      </div>
    </>
  );
};
