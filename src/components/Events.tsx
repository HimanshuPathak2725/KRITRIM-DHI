
import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const events = [
    {
      title: 'AI & Machine Learning Bootcamp',
      date: 'May 15-16, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium, ADGIPS',
      description: 'Join us for a comprehensive two-day bootcamp covering AI fundamentals, machine learning algorithms, and hands-on projects.',
      image: 'https://images.unsplash.com/photo-1581092921461-7384ed02359b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Workshop', 'Beginners'],
      link: '#'
    },
    {
      title: 'Natural Language Processing Workshop',
      date: 'June 5, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Lab 204, ADGIPS',
      description: 'Learn about NLP techniques, transformer models, and build your own text classification system in this hands-on workshop.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Workshop', 'Intermediate'],
      link: '#'
    },
    {
      title: 'Summer Hackathon 2024',
      date: 'July 8-9, 2024',
      time: '9:00 AM onwards',
      location: 'Virtual Event',
      description: 'A 36-hour hackathon challenging participants to create innovative AI solutions for sustainable development goals.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Hackathon', 'All Levels'],
      link: '#'
    },
    {
      title: 'Computer Vision Master Class',
      date: 'August 12, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Lab 301, ADGIPS',
      description: 'Deep dive into computer vision algorithms, CNN architectures, and object detection with practical implementation.',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Master Class', 'Advanced'],
      link: '#'
    },
  ];

  const handleMouseEnter = (index: number) => {
    setActiveEvent(index);
  };

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, events.length);
  }, [events.length]);

  return (
    <section id="events" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-accent font-medium">Upcoming</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
            Events & Announcements
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Join us for our upcoming events, workshops, and hackathons to enhance your skills and connect with the AI community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="purple-glass rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]"
              onMouseEnter={() => handleMouseEnter(index)}
              style={{
                transform: activeEvent === index ? 'scale(1.03)' : 'scale(1)',
                zIndex: activeEvent === index ? 1 : 0
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-deep-purple/90"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-accent/80 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-purple-accent" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-white/70 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-purple-accent" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-white/70 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-purple-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <a
                  href={event.link}
                  className="inline-flex items-center px-4 py-2 bg-purple-accent/20 text-purple-accent hover:bg-purple-accent hover:text-white rounded-lg text-sm font-medium transition-colors duration-300"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
