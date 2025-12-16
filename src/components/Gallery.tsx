import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Selected Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A curation of permanent artistry.</p>
        </div>

        {/* Main Carousel Stage */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] bg-black rounded-sm shadow-2xl overflow-hidden group">
          
          {/* Main Image */}
          <div 
            className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${GALLERY_ITEMS[activeIndex].url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 w-full p-8 text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <span className="text-brand-accent text-sm tracking-widest uppercase font-bold mb-2 block">
                 {GALLERY_ITEMS[activeIndex].category}
               </span>
               <h3 className="text-white font-serif text-3xl md:text-4xl">
                 {GALLERY_ITEMS[activeIndex].title}
               </h3>
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center mt-8 space-x-4 overflow-x-auto py-4 hide-scrollbar">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-all ${
                index === activeIndex ? 'border-brand-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;