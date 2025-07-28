import { ArrowRight, ChevronDown, Download } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToNextSection = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-[var(--portfolio-primary)]"
    >
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="gradient-text">Technology Generalist</span><br />
              <span className="text-[var(--portfolio-text-primary)]">Data • Software • Product</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--portfolio-text-secondary)] font-light leading-relaxed mb-8">
              Driving innovation through scalable software, data-driven systems, and user-focused digital solutions, to enhance business processes and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToProjects}
                className="gradient-bg text-[var(--portfolio-text-primary)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 justify-center"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </button>
              <a 
                href="/resume.pdf" 
                download="Aaryan_Dharmadhikari_Resume.pdf"
                className="border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 flex items-center space-x-2 justify-center"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-[var(--portfolio-accent)] shadow-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/profile.jpg"
                  alt="Aaryan Dharmadhikari"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400';
                  }}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-gradient-end)] rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="text-[var(--portfolio-accent)] text-2xl" size={32} />
      </div>
    </section>
  );
}
