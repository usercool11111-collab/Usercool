import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BmiCalculator } from './components/BmiCalculator';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 font-sans antialiased selection:bg-emerald-600 selection:text-white pb-16 md:pb-0">
      
      {/* Top Header & Sticky Navigation */}
      <Header onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Main Page Layout Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 2. About Us / The Experience Section */}
        <AboutSection />

        {/* 3. Services / Facilities Section */}
        <ServicesSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Interactive BMI & Routine Planner */}
        <BmiCalculator onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 4. Social Proof / Testimonials Section */}
        <TestimonialsSection />

        {/* 5. Final CTA Section */}
        <FinalCta onOpenTrialModal={() => setTrialModalOpen(true)} />
      </main>

      {/* 6. Footer Section */}
      <Footer onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Free Trial Modal Dialog */}
      <FreeTrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenTrialModal={() => setTrialModalOpen(true)} />

    </div>
  );
}
