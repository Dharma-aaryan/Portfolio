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
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--portfolio-primary)]/50"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Full Stack</span><br />
            <span className="text-[var(--portfolio-text-primary)]">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--portfolio-text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative technology solutions
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button 
            onClick={scrollToProjects}
            className="gradient-bg text-[var(--portfolio-text-primary)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 flex items-center space-x-2">
            <Download size={20} />
            <span>Download Resume</span>
          </button>
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
