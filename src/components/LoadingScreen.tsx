import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useLoading } from '../contexts/LoadingContext';

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(1);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (loadingProgress >= 100 && splineLoaded) {
      const finalLoadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(finalLoadTimer);
    }
  }, [loadingProgress, splineLoaded, setIsLoading]);

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();
    const duration = 5000;
    
    const animateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const counterValue = Math.floor(1 + progress * 99);
      setLoadingProgress(counterValue);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCounter);
      }
    };
    
    animationFrame = requestAnimationFrame(animateCounter);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-50 flex items-center justify-center bg-midnight">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-10">
          <Spline 
            scene="https://prod.spline.design/alvGf7c8KXlesb6Q/scene.splinecode" 
            onLoad={() => setSplineLoaded(true)}
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-transparent">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
              <span className="text-gradient-purple">KRITRIM DHI</span>
            </div>
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
  );
};

export default LoadingScreen;
