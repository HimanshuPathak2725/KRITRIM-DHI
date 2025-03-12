import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-24 isolate overflow-hidden"
    >
      <ParticleBackground />
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 animate-fade-in-up">
            <span className="px-4 py-1.5 rounded-full purple-glass text-xs sm:text-sm font-medium text-light-purple inline-block">
              Dr. Akhilesh Das Gupta Institute of Professional Studies, New Delhi
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight transform-gpu">
            <span className="block animate-float hover-glow-text mb-2 sanskrit-text">
              कृत्रिम धी
            </span>
            <span className="gradient-text-enhanced tech-text tracking-wider">
              KRITRIM DHI
            </span>
          </h1>
          
          <p className="animate-modern text-xl md:text-2xl text-white/80 mb-8 max-w-2xl hover:text-white transition-colors duration-300">
            Empowering Minds, Innovating with AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16">
            <a
              href="#join-us"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-purple-accent to-purple-600 bg-size-200 text-white font-medium transition-all duration-300 hover:bg-right-bottom hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center"
            >
              Join Us
              <ArrowRight size={18} className="ml-2" />
            </a>
            
            <a
              href="#about-us"
              className="px-6 py-3 rounded-lg purple-glass text-white font-medium transition-all duration-300 hover:bg-purple-accent/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center"
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
