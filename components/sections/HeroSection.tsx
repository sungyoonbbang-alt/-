import React from 'react';
import Button from '../ui/Button';
import { IMAGE_ASSETS, MAIN_CONTENT } from '../../constants';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/contact');
  };

  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{ backgroundImage: `url(${IMAGE_ASSETS.HERO_BG})` }}
    >
      {/* Overlay for high contrast */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-accent max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight drop-shadow-lg animate-fade-in-up">
          {MAIN_CONTENT.headline}
        </h1>
        <p className="text-xl md:text-3xl font-medium leading-relaxed mb-10 drop-shadow-md animate-fade-in delay-200">
          {MAIN_CONTENT.keyMessages[0]}
        </p>
        <Button
          onClick={handleEnrollClick}
          size="lg"
          className="animate-fade-in delay-400 shadow-xl"
        >
          {MAIN_CONTENT.ctaText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
