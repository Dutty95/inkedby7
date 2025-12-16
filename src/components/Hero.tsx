import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {HERO_IMAGES.map((imgSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-50' : 'opacity-0'
            }`}
          >
            <img 
              src={imgSrc} 
              alt={`Tattoo Artist Work ${index + 1}`} 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        ))}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-brand-dark z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-brand-accent text-lg md:text-xl uppercase tracking-[0.3em] mb-4 animate-fadeIn">
          Welcome To
        </h2>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight drop-shadow-lg">
          INKED BY 7
        </h1>
        <p className="font-sans text-gray-300 text-lg md:text-2xl font-light tracking-wide mb-10 max-w-2xl mx-auto border-t border-b border-white/20 py-4">
          Artistry • Technical Skill • Emotional Connection
        </p>
        <a 
          href="#policies" 
          className="inline-block px-8 py-4 bg-brand hover:bg-brand-light text-white font-bold uppercase tracking-widest transition-colors duration-300 rounded-sm"
        >
          Book Appointment
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 z-20">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;