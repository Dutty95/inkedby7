import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Policies from './components/Policies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Policies />
      </main>
      <Contact />
    </div>
  );
}

export default App;