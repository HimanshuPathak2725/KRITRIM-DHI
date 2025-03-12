
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="mb-2">
              <span className="text-2xl font-bold text-gradient-purple">KRITRIM DHI</span>
            </a>
            <p className="text-white/60 text-sm text-center md:text-left">
              The Official AI & ML Society of Dr. Akhilesh Das Gupta Institute of Professional Studies
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-white/60 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-purple-accent mx-1" fill="#8b5cf6" /> by KRITRIM DHI
            </p>
            <p className="text-white/50 text-xs mt-1">
              © {currentYear} KRITRIM DHI. All rights reserved.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About Us', 'Our Journey', 'Events', 'Join Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
