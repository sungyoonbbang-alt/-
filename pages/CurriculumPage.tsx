import React from 'react';
import { CURRICULUM_CONTENT } from '../constants';
import Card from '../components/ui/Card';

const CurriculumPage: React.FC = () => {
  return (
    <div className="bg-background py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary text-center mb-8 leading-tight">
          {CURRICULUM_CONTENT.title}
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {CURRICULUM_CONTENT.description}
        </p>

        <div className="relative space-y-12">
          {/* Vertical line for timeline effect */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full z-0"></div>

          {CURRICULUM_CONTENT.weeks.map((week, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center relative">
              {/* Dot for timeline */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bg-primary rounded-full w-8 h-8 flex items-center justify-center z-10 border-4 border-accent">
                <span className="text-white font-bold">{index + 1}</span>
              </div>

              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'
                }`}
              >
                <Card className={`p-8 shadow-xl transform hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} lg:max-w-xl`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center lg:text-left">
                    {week.week}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <p className="text-md md:text-lg font-semibold text-primary">
                      준비물: <span className="font-normal text-gray-800">{week.materials}</span>
                    </p>
                    <p className="text-md md:text-lg font-semibold text-primary">
                      수업 방식: <span className="font-normal text-gray-800">{week.method}</span>
                    </p>
                  </div>
                </Card>
              </div>
              {/* Empty div for spacing on opposite side in timeline view */}
              <div className="hidden lg:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
