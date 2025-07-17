
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-sm font-light tracking-wide">
            ラウラ・サン・セグンド
          </div>
          <div className="flex space-x-8">
            <a 
              href="https://rodobo.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm font-light hover:text-white/70 transition-colors duration-200"
            >
              Newsletter
            </a>
            <a 
              href="https://rodobo.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm font-light hover:text-white/70 transition-colors duration-200"
            >
              Podcast
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
