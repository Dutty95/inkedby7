import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['home', 'about', 'gallery', 'policies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', sub: '01', id: 'home' },
    { name: 'About', href: '#about', sub: '02', id: 'about' },
    { name: 'Portfolio', href: '#gallery', sub: '03', id: 'gallery' },
    { name: 'Policies', href: '#policies', sub: '04', id: 'policies' },
    { name: 'Contact', href: '#contact', sub: '05', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll to section
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Fixed Floating Header Elements */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="flex justify-between items-center p-6 md:p-8">
          
          {/* Logo - Fixed Top Left with Ink Drip Effect */}
          <div className="pointer-events-auto">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="relative font-serif text-2xl md:text-3xl font-bold tracking-wider group"
            >
              <span className="relative z-10 text-white group-hover:text-brand-accent transition-colors duration-300">
                INKED 
              </span>
              <span className="relative z-10 text-brand-accent font-light"> BY 7</span>
              
              {/* Animated underline ink effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
          </div>

          {/* Menu Trigger - Fixed Top Right with Counter */}
          <div className="pointer-events-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-3 focus:outline-none relative"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <span className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-accent transition-colors">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              <div className={`relative p-2 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent/10 ${isOpen ? 'rotate-180 border-brand-accent' : 'rotate-0'}`}>
                {isOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-white" />
                )}
              </div>
              
              {/* Active section indicator */}
              {!isOpen && (
                <span className="absolute -bottom-1 right-0 text-[10px] text-brand-accent/70 font-mono">
                  {navLinks.find(link => link.id === activeSection)?.sub}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Navigation */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-brand-dark to-gray-900 z-40 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center px-4">
          <nav className="flex flex-col space-y-6 md:space-y-8 text-center" role="navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative overflow-hidden font-serif text-4xl md:text-6xl lg:text-7xl transition-all duration-500 ${
                  activeSection === link.id 
                    ? 'text-brand-accent scale-110' 
                    : 'text-gray-300 hover:text-brand-accent hover:scale-105'
                } ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
                  textShadow: activeSection === link.id ? '0 0 20px rgba(255, 107, 107, 0.3)' : 'none'
                }}
              >
                {/* Left decorative numbering */}
                <span className="absolute top-1/2 -left-8 md:-left-16 -translate-y-1/2 text-xs md:text-sm font-sans text-brand-accent/40 font-bold transition-all duration-300 group-hover:text-brand-accent group-hover:-left-12 md:group-hover:-left-20">
                  {link.sub}
                </span>

                {/* Link text with split animation */}
                <span className="inline-block">
                  {link.name.split('').map((char, i) => (
                    <span 
                      key={i}
                      className="inline-block transition-all duration-300 group-hover:-translate-y-1"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>

                {/* Active indicator */}
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-accent rounded-full"></span>
                )}

                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            ))}
          </nav>
          
          {/* Bottom info with social proof */}
          <div className={`mt-12 md:mt-16 space-y-4 text-center transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase">
              Lagos • Nigeria
            </div>
            <div className="flex items-center justify-center gap-2 text-brand-accent/70 text-xs">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span>Available for Bookings</span>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className={`absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-brand-accent/30 transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-brand-accent/30 transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;