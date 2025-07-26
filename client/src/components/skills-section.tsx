import { Code, BarChart3 } from "lucide-react";

export default function SkillsSection() {
  const techSkills = [
    "JavaScript", "TypeScript", "React", "Angular", 
    "Node.js", "Python", "AWS", "Docker"
  ];

  const dataSkills = [
    "Machine Learning", "TensorFlow", "Pandas", "NumPy",
    "SQL", "MongoDB", "Tableau", "Power BI"
  ];

  return (
    <section id="skills" className="section-padding bg-[var(--portfolio-primary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            Comprehensive technical expertise across modern development stacks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Skills */}
          <div className="bg-[var(--portfolio-secondary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)]">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <Code className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Tech Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {techSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-[var(--portfolio-primary)]/50 px-4 py-3 rounded-lg border border-[var(--portfolio-secondary)] hover:border-[var(--portfolio-accent)] transition-colors duration-300"
                >
                  <span className="text-[var(--portfolio-text-primary)] font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Skills */}
          <div className="bg-[var(--portfolio-secondary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)]">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <BarChart3 className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Data Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {dataSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-[var(--portfolio-primary)]/50 px-4 py-3 rounded-lg border border-[var(--portfolio-secondary)] hover:border-[var(--portfolio-accent)] transition-colors duration-300"
                >
                  <span className="text-[var(--portfolio-text-primary)] font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
