import React, { useState, useEffect } from 'react';
import { ABOUT_TEXT, ABOUT_SLIDESHOW } from '../constants';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDESHOW.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
           <div className="w-full md:w-1/2 relative">
             <div className="aspect-[3/4] rounded-t-full bg-brand overflow-hidden shadow-2xl relative">
                <img 
                  src="public\ink.png" 
                  alt="Abubakar Omodara" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white font-bold text-2xl uppercase tracking-wider">Abubakar Omodara</h3>
                  <p className="text-brand-light text-sm tracking-widest mt-1">Founder, Director, CEO.</p>
                </div>
             </div>
           </div>
           
           <div className="w-full md:w-1/2 text-center md:text-left">
             <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Meet the Team</h2>
             <div className="w-20 h-1 bg-brand-accent mx-auto md:mx-0 mb-8"></div>
             <p className="text-gray-300 leading-relaxed text-lg mb-6">
               At Inked By 7, we believe that the person holding the machine is just as important as the art itself. Our studio is built on a foundation of passion, precision, and a deep respect for the craft.
             </p>
             <p className="text-gray-400 italic font-serif text-xl">
               "So, if you're ready to wear your story on your skin, let's create something breathtaking together."
             </p>
           </div>
        </div>

        {/* Mission Section */}
        <div className="bg-brand rounded-lg p-8 md:p-12 shadow-xl border-l-4 border-brand-accent">
          <h2 className="font-serif text-3xl text-white mb-8 text-center md:text-left">What our Customers Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {ABOUT_TEXT.map((text, idx) => (
                <p key={idx} className="text-gray-100 font-light leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
            
            {/* Slideshow Container */}
            <div className="h-64 md:h-full min-h-[300px] w-full bg-gray-900 rounded-lg overflow-hidden relative group">
              {ABOUT_SLIDESHOW.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Studio Environment ${idx + 1}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              ))}
              
               <div className="absolute top-4 right-4 bg-black/70 px-4 py-2 border border-red-500 z-10">
                  <span className="text-red-500 font-bold uppercase tracking-widest text-sm animate-pulse">Let's Get Inked</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;