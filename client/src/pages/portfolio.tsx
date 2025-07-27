import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="bg-[var(--portfolio-primary)] text-[var(--portfolio-text-primary)]">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
