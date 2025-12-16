import React from 'react';
import { POLICIES } from '../constants';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Policies: React.FC = () => {
  return (
    <section id="policies" className="py-20 bg-brand text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-2 space-y-8">
             <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-gray-300 text-sm uppercase tracking-[0.2em] mb-2">Service Narrative</h3>
                <h2 className="font-serif text-5xl text-white leading-tight">Let's Clear <br/> It Up!</h2>
             </div>
             <p className="text-gray-200 text-lg font-light">
               Transparency is key to a great tattoo experience. Please review our studio policies before booking to ensure a smooth process for both artist and client.
             </p>
             <div className="bg-gray-900/30 p-6 rounded-lg">
                <h4 className="flex items-center gap-2 font-bold text-white mb-2">
                  <AlertCircle size={20} className="text-brand-accent"/> Note:
                </h4>
                <p className="text-sm">We are available to travel for appointments. Terms & Conditions apply.</p>
             </div>
          </div>

          {/* Right: The List */}
          <div className="lg:col-span-3 bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-2xl border border-white/5">
            <ul className="space-y-6">
              {POLICIES.map((policy) => (
                <li key={policy.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 size={20} className="text-green-400/80" />
                  </div>
                  <p className="text-gray-200 font-light leading-relaxed border-b border-white/5 pb-4 w-full">
                    {policy.text}
                  </p>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-center">
              <p className="font-serif italic text-gray-400 mb-6">Thank you for understanding.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Policies;