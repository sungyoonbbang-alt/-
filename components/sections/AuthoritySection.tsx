import React from 'react';
import { IMAGE_ASSETS, MAIN_CONTENT } from '../../constants';

const AuthoritySection: React.FC = () => {
  return (
    <section id="authority" className="bg-secondary text-accent py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image on left for larger screens, top for small screens */}
          <div className="flex-shrink-0 md:w-1/3">
            <img
              src={IMAGE_ASSETS.COACH_PROFILE}
              alt="방성윤 코치 프로필"
              className="w-full h-80 md:h-full object-cover rounded-lg shadow-xl border-4 border-primary transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content on right for larger screens, bottom for small screens */}
          <div className="flex-grow md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              {MAIN_CONTENT.authority.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              {MAIN_CONTENT.authority.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg md:text-xl">
              {MAIN_CONTENT.authority.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start">
                  <span className="text-primary mr-3 text-2xl">★</span> {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
