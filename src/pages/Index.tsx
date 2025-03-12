
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Journey from "@/components/Journey";
import Events from "@/components/Events";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutUs />
        <Journey />
        <Events />
        <JoinForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
