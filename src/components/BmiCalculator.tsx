import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, Sparkles, ArrowRight } from 'lucide-react';

interface BmiCalculatorProps {
  onOpenTrialModal: () => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onOpenTrialModal }) => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(172);
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'maintenance'>('muscle');

  // BMI Calculation
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBmi = Math.round(bmi * 10) / 10;

  let bmiCategory = 'Normal';
  let categoryColor = 'text-emerald-400';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    categoryColor = 'text-amber-400';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
    categoryColor = 'text-amber-400';
  } else if (bmi >= 30) {
    bmiCategory = 'Obese';
    categoryColor = 'text-rose-400';
  }

  // Estimated daily protein & workout split
  const dailyProtein = Math.round(weight * (goal === 'muscle' ? 2.0 : 1.6));
  const recommendedDays = goal === 'muscle' ? '5 Days / Week' : '4-5 Days / Week';

  return (
    <section className="py-16 bg-[#05070A] text-white border-y border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
              <Calculator className="w-3.5 h-3.5" /> Interactive Fitness Planner
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Calculate Your Ideal Gym Routine & Macros
            </h3>
            <p className="text-slate-400 text-sm">
              Adjust your weight and height to see personalized daily protein targets and training recommendations at Lifetime Fitness Club.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6 bg-[#05070A] p-6 rounded-2xl border border-white/10">
              
              {/* Goal selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Primary Goal</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setGoal('muscle')}
                    className={`py-2 px-2 rounded-full text-xs font-bold transition-all ${
                      goal === 'muscle' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    💪 Muscle Gain
                  </button>
                  <button
                    onClick={() => setGoal('fatloss')}
                    className={`py-2 px-2 rounded-full text-xs font-bold transition-all ${
                      goal === 'fatloss' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    🔥 Fat Loss
                  </button>
                  <button
                    onClick={() => setGoal('maintenance')}
                    className={`py-2 px-2 rounded-full text-xs font-bold transition-all ${
                      goal === 'maintenance' ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    🧘 Mobility/Fit
                  </button>
                </div>
              </div>

              {/* Weight Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Body Weight:</span>
                  <span className="font-black text-emerald-400">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-white/10 rounded-lg"
                />
              </div>

              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-300">Height:</span>
                  <span className="font-black text-emerald-400">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="210"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-white/10 rounded-lg"
                />
              </div>

            </div>

            {/* Results Output */}
            <div className="lg:col-span-6 bg-[#05070A] p-6 rounded-2xl border border-white/10 space-y-6 text-center sm:text-left">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Your BMI</div>
                  <div className="text-2xl font-black text-white">{roundedBmi}</div>
                  <div className={`text-xs font-bold ${categoryColor}`}>{bmiCategory}</div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Daily Protein Goal</div>
                  <div className="text-2xl font-black text-emerald-400">{dailyProtein}g</div>
                  <div className="text-[11px] text-slate-400">Target isolate/food</div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Dumbbell className="w-4 h-4" /> Lifetime Recommended Routine
                </div>
                <p className="text-xs text-slate-300">
                  {goal === 'muscle' && 'Hammer Strength Push-Pull-Legs 5-day split + post-workout whey shake at our café.'}
                  {goal === 'fatloss' && 'HIIT Cardio row + Functional turf agility + Controlled calorie diet chart.'}
                  {goal === 'maintenance' && 'Full body mobility, Hatha yoga sessions 3x weekly + steady-state cardio.'}
                </p>
              </div>

              <button
                onClick={onOpenTrialModal}
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-full text-xs sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
              >
                <span>👉 Get Trainer Guidance During Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
