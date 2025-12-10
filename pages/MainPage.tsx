import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AuthoritySection from '../components/sections/AuthoritySection';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import PreviewSection from '../components/sections/PreviewSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const MainPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AuthoritySection />
      <ProblemSolutionSection />
      <PreviewSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default MainPage;
