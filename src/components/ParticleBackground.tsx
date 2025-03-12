import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(1);
  
  useEffect(() => {
    // Don't hide loading screen until counter reaches 100
    // and Spline has loaded
    if (loadingProgress >= 100 && splineLoaded) {
      const finalLoadTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // Small delay after reaching 100%
      
      return () => clearTimeout(finalLoadTimer);
    }
  }, [loadingProgress, splineLoaded]);

  useEffect(() => {
    // Counter animation from 1 to 100
    let animationFrame: number;
    const startTime = Date.now();
    const duration = 5000; // Increased from 3000 to 5000 ms (5 seconds) for a slower counter
    
    const animateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      // Calculate progress (0 to 1)
      const progress = Math.min(elapsed / duration, 1);
      
      // Convert to counter value (1 to 100)
      const counterValue = Math.floor(1 + progress * 99);
      setLoadingProgress(counterValue);
      
      if (progress < 1) {
        // Continue animation until we reach 100
        animationFrame = requestAnimationFrame(animateCounter);
      }
    };
    
    // Start animation
    animationFrame = requestAnimationFrame(animateCounter);
    
    return () => {
      // Cleanup animation frame on unmount
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Purple hues
        const colors = [
          'rgba(139, 92, 246, 0.5)',  // Purple
          'rgba(168, 85, 247, 0.4)',  // Purple
          'rgba(155, 135, 245, 0.6)', // Light purple
          'rgba(147, 51, 234, 0.3)',  // Deeper purple
          'rgba(192, 132, 252, 0.4)', // Lighter purple
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particleCount = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / 15000));
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            if (!ctx) return;
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    animate();

    // Scroll event listener for zoom effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle Spline loading completion
  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };
  
  return (
    <>
      {loading && (
        <div className="fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-midnight">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 z-10">
              <Spline 
                scene="https://prod.spline.design/alvGf7c8KXlesb6Q/scene.splinecode" 
                onLoad={handleSplineLoad}
              />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
                  <span className="text-gradient-purple">KRITRIM DHI</span>
                </div>
                
                {/* Loading percentage counter */}
                <div className="text-3xl font-bold text-light-purple mb-3">
                  {loadingProgress}%
                </div>
                
                <div className="w-48 h-2 bg-deep-purple/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-light-purple via-purple-accent to-neon-purple"
                    style={{ width: `${loadingProgress}%`, transition: 'width 0.1s ease-out' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 -z-10 bg-gradient-to-b from-midnight to-deep-purple transition-all duration-1000 ease-in-out ${
          loading ? 'scale-125 opacity-0' : scrolled ? 'opacity-40 scale-100' : 'scale-110 opacity-90'
        }`}
      />
    </>
  );
};

export default ParticleBackground;
