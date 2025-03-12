import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Journey from "@/components/Journey";
import Events from "@/components/Events";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";
import { useLoading } from '../contexts/LoadingContext';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <ParticleBackground />
          <Navbar />
          <HeroSection />
          <AboutUs />
          <Journey />
          <Events />
          <JoinForm />
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
