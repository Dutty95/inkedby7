import React from 'react';
import { CONTACT_INFO, SOCIALS } from '../constants';
import { Instagram, Camera, Video, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = `*New Tattoo Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    // Your WhatsApp number (use international format without + or spaces)
    const whatsappNumber = '2347089493072'; // Your number from constants
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram': return <Instagram size={24} />;
      case 'camera': return <Camera size={24} />;
      case 'video': return <Video size={24} />;
      default: return <Instagram size={24} />;
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Inquiry Form */}
          <div>
            <div className="mb-8">
              <h3 className="text-brand-accent text-sm uppercase tracking-widest font-bold mb-2">Get Inked</h3>
              <h2 className="font-serif text-4xl text-white">Send an Inquiry</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-wider">Placement & Idea</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Describe where you want the tattoo and your design idea..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="flex items-center gap-2 bg-brand hover:bg-white hover:text-gray-900 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm"
              >
                <span>Send via WhatsApp</span>
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Info Column */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <div className="font-serif text-3xl font-bold tracking-wider text-white mb-4">
                  INKED <span className="text-brand-accent font-light">BY 7</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Professional tattoo artistry tailored to your unique story. 
                  We provide an immersive experience that combines artistry, technical skill, and emotional connection.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gray-300">
                  <MapPin className="text-brand-accent mt-1" size={20} />
                  <div>
                    <h5 className="font-bold text-white uppercase text-xs tracking-wider mb-1">Studio</h5>
                    <p>Lagos, Nigeria</p>
                    <p className="text-xs text-gray-500">(Available for Travel)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300">
                  <Mail className="text-brand-accent mt-1" size={20} />
                  <div>
                    <h5 className="font-bold text-white uppercase text-xs tracking-wider mb-1">Email</h5>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-light transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300">
                  <Phone className="text-brand-accent mt-1" size={20} />
                  <div>
                    <h5 className="font-bold text-white uppercase text-xs tracking-wider mb-1">Phone</h5>
                    <p>{CONTACT_INFO.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12 pt-8 border-t border-gray-800">
               <h5 className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Our Work</h5>
               <div className="flex gap-4">
                  {SOCIALS.map((social) => (
                    <a 
                      key={social.platform}
                      href={social.url}
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300"
                      aria-label={social.platform}
                    >
                      {getIcon(social.icon)}
                    </a>
                  ))}
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Inked By Seven Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="font-serif italic">Designed with precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;