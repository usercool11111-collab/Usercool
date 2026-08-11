import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, CheckCircle, Quote, ThumbsUp, Sparkles, Search } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'verified' | 'hygiene' | 'trainer'>('all');

  const filteredReviews = TESTIMONIALS.filter(review => {
    if (activeFilter === 'verified') return review.verified;
    if (activeFilter === 'hygiene') return review.content.toLowerCase().includes('clean') || review.content.toLowerCase().includes('hygienic');
    if (activeFilter === 'trainer') return review.content.toLowerCase().includes('trainer') || review.content.toLowerCase().includes('coach') || review.highlightTrainer;
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-[#05070A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-emerald-400" /> Real Google Feedback
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            ⭐ 4.9 out of 5 — <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Rated by 745+ Happy Members</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            See why Malviya Nagar locals, lifters, and doctors call Lifetime Fitness Club the best gym in Jaipur.
          </p>
        </div>

        {/* Google Reviews Official Widget Badge */}
        <div className="mb-12 max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-lg">
              {/* Google G logo SVG */}
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-emerald-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
                <span className="ml-2 font-black text-white text-lg">4.9 / 5.0</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                Verified Google Business Profile • <strong>745+ Member Reviews</strong>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Lifetime+Fitness+Club+Malviya+Nagar+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white/5 border border-white/10 hover:border-emerald-400 text-white hover:text-emerald-400 text-xs font-bold px-4 py-2.5 rounded-full transition-all flex items-center gap-2"
          >
            <span>Verify on Google Maps</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
              activeFilter === 'all' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-slate-400 border border-white/10'
            }`}
          >
            All Top Reviews ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setActiveFilter('hygiene')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
              activeFilter === 'hygiene' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-slate-400 border border-white/10'
            }`}
          >
            ✨ Hygiene & Equipment
          </button>
          <button
            onClick={() => setActiveFilter('trainer')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
              activeFilter === 'trainer' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-slate-400 border border-white/10'
            }`}
          >
            🏋️ Coaches & Guidance
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl relative flex flex-col justify-between hover:border-emerald-500/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-emerald-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-white/10 group-hover:text-emerald-500/20 transition-colors" />
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-6 font-medium italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 font-bold text-white flex items-center justify-center text-sm shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                  {review.author.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white text-sm truncate">{review.author}</span>
                    {review.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    )}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {review.role || 'Verified Member'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
