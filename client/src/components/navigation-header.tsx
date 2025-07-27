import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            Aaryan Dharmadhikari
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--portfolio-text-primary)]"
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
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300 text-left"
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
