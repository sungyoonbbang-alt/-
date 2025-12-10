import React from 'react';
import Button from '../ui/Button';
import { MAIN_CONTENT, IMAGE_ASSETS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/contact');
  };

  return (
    <section id="cta" className="relative py-20 md:py-32 px-4 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${IMAGE_ASSETS.CLASS_VIBE})` }}>
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-secondary opacity-80"></div>
      <div className="relative container mx-auto max-w-4xl text-center text-accent z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-tight drop-shadow-lg">
          {MAIN_CONTENT.ctaText}
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-10 drop-shadow-md">
          {MAIN_CONTENT.keyMessages[1]}
        </p>
        <Button onClick={handleEnrollClick} size="lg" className="animate-pulse shadow-2xl">
          지금 바로 신청하기
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
