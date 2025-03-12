import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // New effect to close the mobile menu on scroll
  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (window.scrollY > 20 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', closeMenuOnScroll);
    return () => window.removeEventListener('scroll', closeMenuOnScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'purple-glass py-2 sm:py-3' : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="/"
          className="flex items-center group relative z-[101]"
        >
          <span className={`text-xl sm:text-2xl font-bold text-gradient-purple tracking-tight transition-all flex flex-col items-start ${
            isMenuOpen ? 'text-white' : ''
          }`}>
            <span className="sanskrit-text text-sm sm:text-base">कृत्रिम धी</span>
            <span className="tech-text">KRITRIM DHI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {['Home', 'About Us', 'Our Journey', 'Events', 'Join Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm lg:text-base text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/90 hover:text-white transition-colors duration-200 focus:outline-none relative z-[101]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Replace the full-screen sliding overlay with a centered box */}
      <div
        className={`md:hidden fixed inset-0 z-[99] flex items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'bg-deep-purple/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className={`bg-deep-purple rounded-xl shadow-2xl p-8 w-11/12 max-w-sm transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex justify-end mb-4">
            <button
              className="text-white/90 hover:text-white transition-colors duration-200 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6">
            {['Home', 'About Us', 'Our Journey', 'Events', 'Join Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/90 hover:text-white text-lg sm:text-xl font-medium transition-all duration-300"
                onClick={() => {
                  toggleMenu();
                  // Smooth scroll behavior for selected option
                  const element = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
