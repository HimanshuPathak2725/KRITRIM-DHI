
import { BrainCircuit, Lightbulb, Rocket, UserPlus, Handshake, Users } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      title: 'AI & ML Awareness',
      description: 'Creating awareness about cutting-edge AI and ML technologies through workshops, seminars, and hands-on sessions.',
      icon: BrainCircuit,
    },
    {
      title: 'Skill Development',
      description: 'Providing opportunities for students to develop practical skills in AI/ML through guided projects and mentorship.',
      icon: Lightbulb,
    },
    {
      title: 'Research & Innovation',
      description: 'Encouraging students to explore new ideas and innovations in the field of artificial intelligence and machine learning.',
      icon: Rocket,
    },
    {
      title: 'Industry Collaboration',
      description: 'Building connections with industry leaders to provide students with real-world exposure and opportunities.',
      icon: Handshake,
    },
    {
      title: 'Competitions & Challenges',
      description: 'Organizing hackathons and competitions to promote problem-solving and collaborative learning.',
      icon: UserPlus,
    },
    {
      title: 'Community Building',
      description: 'Creating a supportive community of AI enthusiasts to share knowledge, experiences, and opportunities.',
      icon: Users,
    },
  ];

  return (
    <section id="about-us" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-accent font-medium">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
            What is KRITRIM DHI?
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            KRITRIM DHI is a student-led AI and ML society at Dr. Akhilesh Das Gupta Institute of Professional Studies, dedicated to fostering innovation and expertise in artificial intelligence and machine learning technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="purple-glass rounded-xl p-6 hover-lift hover-glow group"
            >
              <div className="h-12 w-12 rounded-lg bg-purple-accent/20 flex items-center justify-center mb-5 group-hover:bg-purple-accent/30 transition-colors">
                <feature.icon className="h-6 w-6 text-light-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
