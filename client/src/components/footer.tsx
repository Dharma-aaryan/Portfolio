export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[var(--portfolio-secondary)] border-t border-[var(--portfolio-secondary)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-4">
              Aaryan Dharmadhikari
            </div>
            <p className="text-[var(--portfolio-text-secondary)]">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <nav className="flex flex-wrap items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            >
              Certifications
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
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[var(--portfolio-secondary)] text-center">
          <p className="text-[var(--portfolio-text-secondary)] text-sm">
            © 2025 Aaryan Dharmadhikari. All rights reserved. Built with <span className="text-[var(--portfolio-accent)]">React</span> & modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
