import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-background py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary text-center mb-12 leading-tight">
          {ABOUT_CONTENT.title}
        </h1>

        <Card className="p-8 md:p-12 mb-12 bg-secondary text-accent">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={ABOUT_CONTENT.image}
                alt="방성윤 코치"
                className="w-full h-80 object-cover rounded-lg shadow-xl border-4 border-primary"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {ABOUT_CONTENT.tagline}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {ABOUT_CONTENT.intro}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-4">
                지도 철학: '매직 핸드'의 비결
              </h3>
              <p className="text-md md:text-lg leading-relaxed text-gray-300">
                {ABOUT_CONTENT.philosophy}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-secondary mb-6 text-center border-b-2 border-primary pb-4">
            주요 경력 및 미디어 출연
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
            {ABOUT_CONTENT.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1 text-xl">🏆</span> {achievement}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-8 md:p-12 bg-secondary text-accent">
          <h3 className="text-3xl font-bold text-primary mb-6 text-center border-b-2 border-accent pb-4">
            하이라이트 영상
          </h3>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src={ABOUT_CONTENT.highlightReel}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
