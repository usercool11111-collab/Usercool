import React, { useState } from 'react';
import { GYM_INFO, TIME_SLOTS, FITNESS_GOALS } from '../data/gymData';
import { TrialBooking } from '../types';
import { X, CheckCircle2, Sparkles, Calendar, Clock, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<TrialBooking>({
    name: '',
    phone: '',
    preferredDate: new Date().toISOString().split('T')[0],
    timeSlot: 'morning',
    goal: FITNESS_GOALS[0]
  });

  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate random pass code
    const code = 'LFT-' + Math.floor(10000 + Math.random() * 90000);
    setConfirmationCode(code);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      preferredDate: new Date().toISOString().split('T')[0],
      timeSlot: 'morning',
      goal: FITNESS_GOALS[0]
    });
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Lifetime Fitness Club! I just claimed my 1-Day Free Trial pass (${confirmationCode}). Name: ${formData.name}, Date: ${formData.preferredDate}, Goal: ${formData.goal}. Please confirm my workout slot!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070A]/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-[#05070A] border border-white/10 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          /* Booking Form */
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" /> 1-Day Pass • Free Access
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Claim Your 1-Day Free Trial
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                No commitment. Just walk in and feel the difference in Malviya Nagar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Your Name <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Mobile Number <span className="text-sky-400">*</span>
                </label>
                <div className="flex gap-2">
                  <span className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-sm font-bold text-slate-400 flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value as any })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                  >
                    {TIME_SLOTS.map(s => (
                      <option key={s.value} value={s.value} className="bg-[#05070A] text-white">{s.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-400"
                >
                  {FITNESS_GOALS.map((g, idx) => (
                    <option key={idx} value={g} className="bg-[#05070A] text-white">{g}</option>
                  ))}
                </select>
              </div>

              {/* Security info note */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Instant trial confirmation. Free access to Strength zone, Cardio & Cafe.</span>
              </div>

              <button
                type="submit"
                id="modal-submit-trial-btn"
                className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base py-3.5 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>👉 Confirm My 1-Day Free Trial</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Pass Screen */
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">
                1-Day VIP Trial Pass Confirmed
              </span>
              <h3 className="text-2xl font-black text-white">
                Welcome to Lifetime Fitness!
              </h3>
              <p className="text-xs text-slate-300">
                Show this digital pass at reception on the 3rd Floor, V Cube, Malviya Nagar.
              </p>
            </div>

            {/* Digital Ticket Badge */}
            <div className="bg-white/5 border border-sky-500/30 p-5 rounded-2xl space-y-3 text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Pass Code</span>
                  <div className="text-xl font-black text-sky-400 tracking-wider">{confirmationCode}</div>
                </div>
                <div className="bg-sky-500/10 text-sky-400 px-2.5 py-1 rounded-full text-xs font-bold border border-sky-500/20">
                  ACTIVE TRIAL
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px]">Guest Name:</span>
                  <span className="font-bold text-white">{formData.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">Date:</span>
                  <span className="font-bold text-white">{formData.preferredDate}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-1 border-t border-white/10 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>3rd Floor, V Cube, Opp. Gaurav Tower Marg</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <a
                href={`https://wa.me/919950550885?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-black py-3 rounded-full text-xs sm:text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Trial via WhatsApp (+91 99505 50885)</span>
              </a>

              <button
                onClick={resetForm}
                className="w-full bg-white/10 hover:bg-white/20 text-slate-300 font-bold py-2.5 rounded-full text-xs transition-colors cursor-pointer"
              >
                Done / Close Pass
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
