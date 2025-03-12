
import { useState } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JoinForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    year: '',
    interests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.course || !formData.year) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Success message
    toast({
      title: "Form Submitted!",
      description: "Thank you for joining KRITRIM DHI. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      course: '',
      year: '',
      interests: '',
      message: '',
    });
    
    console.log("Form submitted:", formData);
  };

  return (
    <section id="join-us" className="section-padding bg-gradient-to-b from-midnight to-deep-purple/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Join the Community
              </h2>
              
              <p className="text-white/80 mb-8">
                Become a part of KRITRIM DHI and access exclusive AI/ML workshops, hackathons, learning resources, and connect with like-minded individuals.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2 text-sm">
                    Full Name <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-deep-purple/30 text-white border border-purple-accent/30 focus:border-purple-accent rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-purple-accent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2 text-sm">
                    Email Address <span className="text-purple-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-deep-purple/30 text-white border border-purple-accent/30 focus:border-purple-accent rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-purple-accent transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="course" className="block text-white/90 mb-2 text-sm">
                      Course <span className="text-purple-accent">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full bg-deep-purple/30 text-white border border-purple-accent/30 focus:border-purple-accent rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-purple-accent transition-colors"
                      required
                    >
                      <option value="" disabled>Select course</option>
                      <option value="BCA">BCA</option>
                      <option value="MCA">MCA</option>
                      <option value="BBA">BBA</option>
                      <option value="MBA">MBA</option>
                      <option value="BTech">BTech</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-white/90 mb-2 text-sm">
                      Year <span className="text-purple-accent">*</span>
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full bg-deep-purple/30 text-white border border-purple-accent/30 focus:border-purple-accent rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-purple-accent transition-colors"
                      required
                    >
                      <option value="" disabled>Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-white/90 mb-2 text-sm">
                    Areas of Interest
                  </label>
                  <input
                    type="text"
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full bg-deep-purple/30 text-white border border-purple-accent/30 focus:border-purple-accent rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-purple-accent transition-colors"
                    placeholder="e.g., Machine Learning, Computer Vision, NLP"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/90 mb-2 text-sm">
                    Why do you want to join?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-deep-purple/30 text-white border border-purple-accent/30 focus:border-purple-accent rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-purple-accent transition-colors resize-none"
                    placeholder="Tell us a bit about your interest in AI/ML..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-accent text-white py-3 rounded-lg font-medium hover:bg-purple-accent/90 transition-colors flex items-center justify-center group"
                >
                  <span>Submit Application</span>
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="purple-glass rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-gradient-purple">
                Connect With Us
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-purple-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-light-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <a href="mailto:kritrimdhi@adgips.in" className="text-purple-accent hover:text-light-purple transition-colors">
                      kritrimdhi@adgips.in
                    </a>
                    <p className="text-white/60 text-sm mt-1">
                      We'll get back to you within 48 hours
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-accent/20 flex items-center justify-center hover:bg-purple-accent/40 transition-colors"
                    >
                      <Github className="w-5 h-5 text-light-purple" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-accent/20 flex items-center justify-center hover:bg-purple-accent/40 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-light-purple" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-accent/20 flex items-center justify-center hover:bg-purple-accent/40 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-light-purple" viewBox="0 0 16 16">
                        <path d="M16 8C16 3.58 12.42 0 8 0 3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-purple-accent/20 flex items-center justify-center hover:bg-purple-accent/40 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-light-purple" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-medium mb-4">Join our Discord</h4>
                  <a
                    href="#"
                    className="purple-glass flex items-center justify-center py-3 rounded-lg hover:bg-purple-accent/20 transition-all group"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-light-purple">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="currentColor"/>
                    </svg>
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      Discord Community
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
