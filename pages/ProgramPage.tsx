import React from 'react';
import { PROGRAM_CONTENT } from '../constants';
import Card from '../components/ui/Card';

const ProgramPage: React.FC = () => {
  return (
    <div className="bg-background py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary text-center mb-8 leading-tight">
          {PROGRAM_CONTENT.title}
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {PROGRAM_CONTENT.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROGRAM_CONTENT.services.map((service, index) => (
            <Card key={index} className="p-8 shadow-xl bg-accent text-secondary transform hover:scale-105 transition-transform duration-300">
              <div className="text-6xl text-primary mb-6 text-center">{service.icon}</div>
              <h2 className="text-3xl font-bold text-secondary mb-4 text-center">{service.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700 text-center">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
