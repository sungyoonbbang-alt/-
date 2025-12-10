import React from 'react';
import { MAIN_CONTENT } from '../../constants';
import Card from '../ui/Card';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section id="problem-solution" className="bg-background py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-12 leading-tight">
          {MAIN_CONTENT.problemSolution.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Problems */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 border-b-4 border-primary pb-4 inline-block">
              흔한 문제점
            </h3>
            <div className="space-y-8">
              {MAIN_CONTENT.problemSolution.problems.map((problem, index) => (
                <Card key={index} className="flex flex-col md:flex-row items-center p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={problem.image}
                    alt={problem.heading}
                    className="w-full md:w-40 h-40 object-cover rounded-lg mr-0 md:mr-6 mb-4 md:mb-0"
                  />
                  <div className="text-left">
                    <h4 className="text-xl md:text-2xl font-bold text-secondary mb-2">{problem.heading}</h4>
                    <p className="text-gray-700 text-lg">{problem.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8 border-b-4 border-primary pb-4 inline-block">
              방성윤의 해결책
            </h3>
            <div className="space-y-8">
              {MAIN_CONTENT.problemSolution.solutions.map((solution, index) => (
                <Card key={index} className="p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <h4 className="text-xl md:text-2xl font-bold text-primary mb-2 flex items-center">
                    <span className="text-3xl mr-3">✓</span> {solution.heading}
                  </h4>
                  <p className="text-gray-700 text-lg">{solution.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
