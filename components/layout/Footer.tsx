import React from 'react';
import { MAIN_CONTENT } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-400 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-accent mb-2">방성윤 슈팅 마스터</h3>
          <p className="text-sm">
            {MAIN_CONTENT.footer.copyright}
          </p>
        </div>
        <div className="flex space-x-6">
          {MAIN_CONTENT.footer.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300 text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
