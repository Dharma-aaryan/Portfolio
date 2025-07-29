import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['about', 'projects', 'certifications', 'contact']);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Aaryan Dharmadhikari
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 cursor-pointer ${
                activeSection === 'about' 
                  ? 'text-[var(--portfolio-accent)] border-b-2 border-[var(--portfolio-accent)]' 
                  : 'text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className={`transition-colors duration-300 cursor-pointer ${
                activeSection === 'certifications' 
                  ? 'text-[var(--portfolio-accent)] border-b-2 border-[var(--portfolio-accent)]' 
                  : 'text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)]'
              }`}
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-300 cursor-pointer ${
                activeSection === 'projects' 
                  ? 'text-[var(--portfolio-accent)] border-b-2 border-[var(--portfolio-accent)]' 
                  : 'text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)]'
              }`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 cursor-pointer ${
                activeSection === 'contact' 
                  ? 'text-[var(--portfolio-accent)] border-b-2 border-[var(--portfolio-accent)]' 
                  : 'text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)]'
              }`}
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--portfolio-text-primary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--portfolio-secondary)]">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('certifications')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left cursor-pointer"
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
