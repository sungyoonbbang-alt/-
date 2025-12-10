import React from 'react';
import Button from '../ui/Button';
import { MAIN_CONTENT, IMAGE_ASSETS } from '../../constants';
import { useNavigate } from 'react-router-dom';

const PreviewSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="preview" className="bg-gradient-to-r from-primary to-orange-700 text-accent py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {MAIN_CONTENT.preview.title}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          {MAIN_CONTENT.preview.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {MAIN_CONTENT.preview.modules.map((module, index) => (
            <div
              key={index}
              className="bg-secondary bg-opacity-90 rounded-xl p-8 shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300 group"
            >
              <div className="text-5xl text-primary mb-4 group-hover:text-accent transition-colors duration-300">{module.icon}</div>
              <h3 className="text-2xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                {module.title}
              </h3>
              <p className="text-md text-gray-300">{module.description}</p>
            </div>
          ))}
        </div>

        <Button onClick={() => navigate('/curriculum')} size="lg" variant="secondary" className="border-accent text-accent hover:bg-accent hover:text-primary">
          커리큘럼 전체 보기
        </Button>
      </div>
    </section>
  );
};

export default PreviewSection;
