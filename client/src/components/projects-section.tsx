import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and AWS services.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Node.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Dashboard",
      description: "Machine learning analytics dashboard with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with offline capabilities and sync.",
      image: "https://pixabay.com/get/g84a41f1136e64372127ccfc3069e4c92ca7d94558aa4cb29244028a7abe249faf77f2d86f67cbd407763e6bdbb4fff37a5effaa5e6994b2e5fdb84203fbb1921_1280.jpg",
      tech: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[var(--portfolio-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            A collection of innovative solutions and creative implementations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[var(--portfolio-primary)]/50 rounded-2xl overflow-hidden border border-[var(--portfolio-secondary)] hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--portfolio-accent)]">{project.title}</h3>
                <p className="text-[var(--portfolio-text-secondary)] mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)] px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-primary)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-primary)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="gradient-bg text-[var(--portfolio-text-primary)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
