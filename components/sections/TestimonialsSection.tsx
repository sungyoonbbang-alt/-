import React from 'react';
import { MAIN_CONTENT } from '../../constants';
import Card from '../ui/Card';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-primary py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-12 leading-tight">
          수강생들의 놀라운 변화
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {MAIN_CONTENT.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary text-accent p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-6 gap-4">
                <img
                  src={testimonial.beforeImage}
                  alt="Before"
                  className="w-32 h-32 rounded-full object-cover border-4 border-gray-500"
                />
                <span className="text-4xl text-primary mx-4">→</span>
                <img
                  src={testimonial.afterImage}
                  alt="After"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
              </div>
              <p className="text-lg italic leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <p className="text-xl font-bold text-primary">- {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
