
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 animate-fade-in-up">
            <span className="px-4 py-1.5 rounded-full purple-glass text-xs sm:text-sm font-medium text-light-purple inline-block">
              Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in tracking-tight">
            <span className="text-gradient">कृत्रिम धी</span>
            <br />
            <span className="text-gradient-purple">KRITRIM DHI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in max-w-2xl">
            Empowering Minds, Innovating with AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 animate-fade-in">
            <a
              href="#join-us"
              className="px-6 py-3 rounded-lg bg-purple-accent text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 flex items-center justify-center"
            >
              Join Us
              <ArrowRight size={18} className="ml-2" />
            </a>
            
            <a
              href="#about-us"
              className="px-6 py-3 rounded-lg purple-glass text-white font-medium transition-all duration-300 hover:bg-deep-purple/50 hover:scale-105 flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up delay-100">
            {[
              { count: '25+', label: 'Workshops Conducted', emoji: '🚀' },
              { count: '10+', label: 'Hackathons Organized', emoji: '💡' },
              { count: '15+', label: 'Industry Sessions', emoji: '🤝' },
            ].map((item, index) => (
              <div
                key={index}
                className="purple-glass p-6 rounded-xl text-center transition-transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-2 font-bold text-gradient-purple">
                  {item.count}
                </div>
                <div className="text-white/80 flex flex-col items-center">
                  <span className="text-xl sm:text-2xl mb-1">{item.emoji}</span>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about-us" className="text-white/70 hover:text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L12 20M12 20L18 14M12 20L6 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
