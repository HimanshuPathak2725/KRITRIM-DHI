import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Award, Users } from 'lucide-react';

const Journey = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      title: 'ML Bootcamp Weekend',
      date: 'March 2023',
      category: 'workshop',
      description: 'Two-day intensive bootcamp covering machine learning fundamentals and practical applications.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'AI Innovation Hackathon',
      date: 'May 2023',
      category: 'hackathon',
      description: '24-hour hackathon focused on creating AI solutions for environmental challenges.',
      image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Deep Learning Workshop Series',
      date: 'July 2023',
      category: 'workshop',
      description: 'Weekly workshops on neural networks, CNN, RNN, and transformers with practical sessions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Industry Expert Session: Google AI',
      date: 'September 2023',
      category: 'industry',
      description: 'Interactive session with Google AI researchers on the future of artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'NLP Challenge',
      date: 'October 2023',
      category: 'hackathon',
      description: 'Competitive challenge focused on natural language processing applications.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'AI in Healthcare Workshop',
      date: 'December 2023',
      category: 'workshop',
      description: 'Exploring the applications of AI in medical diagnostics and healthcare management.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Microsoft Azure AI Workshop',
      date: 'February 2024',
      category: 'industry',
      description: 'Hands-on session with Microsoft engineers on Azure AI services and applications.',
      image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Spring AI Hackathon',
      date: 'April 2024',
      category: 'hackathon',
      description: '48-hour hackathon challenging students to create innovative AI solutions for urban challenges.',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  // Memoize filtered events to prevent unnecessary recalculations
  const filteredEvents = React.useMemo(() => 
    activeCategory === 'all' 
      ? events 
      : events.filter(event => event.category === activeCategory),
    [activeCategory]
  );

  // Optimize intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'workshop':
        return <Calendar className="h-5 w-5" />;
      case 'hackathon':
        return <Award className="h-5 w-5" />;
      case 'industry':
        return <Users className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'workshop':
        return '🚀';
      case 'hackathon':
        return '💡';
      case 'industry':
        return '🤝';
      default:
        return '';
    }
  };

  return (
    <section id="our-journey" ref={sectionRef} className="section-padding bg-gradient-to-b from-deep-purple/20 to-midnight overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-purple-accent font-medium px-4 py-1 rounded-full bg-purple-accent/10 mb-2 inline-block">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gradient">
            Our Journey
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Explore the milestones in our journey of fostering AI innovation and learning at KRITRIM DHI.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-deep-purple/40 p-1.5 rounded-lg shadow-lg shadow-purple-accent/20">
            {[
              { value: 'all', label: 'All Events' },
              { value: 'workshop', label: '🚀 Workshops' },
              { value: 'hackathon', label: '💡 Hackathons' },
              { value: 'industry', label: '🤝 Industry Sessions' },
            ].map((cat) => (
              <button
                key={cat.value}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-purple-accent text-white shadow-lg scale-105'
                    : 'text-white/70 hover:text-white hover:bg-deep-purple/60'
                }`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-purple-accent via-light-purple to-purple-accent/30"></div>
          
          <div className="space-y-16 md:space-y-24">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex flex-col md:flex-row items-center timeline-item animate-modern`}
              >
                {/* Left Column: Card for even events */}
                <div className="w-full md:w-1/2 md:text-right">
                  {index % 2 === 0 ? (
                    <div className={`transform transition-all duration-700 ${isVisible[index] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                      {/* ...existing card content... */}
                      <div className="neo-purple rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] group">
                        <div className="relative overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent opacity-60"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 justify-start">
                              <span className="bg-purple-accent/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center border border-purple-accent/20">
                                {getCategoryIcon(event.category)}
                                <span className="ml-1">{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                              </span>
                              <span className="text-white/90 text-sm bg-deep-purple/70 backdrop-blur-sm px-2 py-0.5 rounded">{event.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gradient-purple">{event.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </div>
                {/* Center Column: Timeline Icon */}
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className={`w-14 h-14 rounded-full bg-purple-accent flex items-center justify-center shadow-lg shadow-purple-accent/30 border-4 border-deep-purple transition-all duration-500 ${isVisible[index] ? 'scale-100' : 'scale-0'}`}>
                    <span className="text-2xl">{getCategoryEmoji(event.category)}</span>
                  </div>
                </div>
                {/* Right Column: Card for odd events */}
                <div className="w-full md:w-1/2 md:text-left">
                  {index % 2 !== 0 ? (
                    <div className={`transform transition-all duration-700 ${isVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                      {/* ...existing card content... */}
                      <div className="neo-purple rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] group">
                        <div className="relative overflow-hidden">
                          <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent opacity-60"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 justify-start">
                              <span className="bg-purple-accent/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center border border-purple-accent/20">
                                {getCategoryIcon(event.category)}
                                <span className="ml-1">{event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                              </span>
                              <span className="text-white/90 text-sm bg-deep-purple/70 backdrop-blur-sm px-2 py-0.5 rounded">{event.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gradient-purple">{event.title}</h3>
                          <p className="text-white/80 text-sm leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
