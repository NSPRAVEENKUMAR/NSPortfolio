import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import FloatingElements from '@/components/FloatingElements';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground custom-scrollbar">
      <ParticleBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <FloatingElements />
    </div>
  );
};

export default Portfolio;