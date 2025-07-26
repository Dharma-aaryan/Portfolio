import { Briefcase, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--portfolio-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of modern web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="bg-[var(--portfolio-primary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[var(--portfolio-accent)] pl-6">
                <h4 className="text-lg font-semibold text-[var(--portfolio-accent)] mb-2">Senior Full Stack Developer</h4>
                <p className="text-[var(--portfolio-text-secondary)] mb-2">TechCorp Solutions • 2022 - Present</p>
                <p className="text-sm text-[var(--portfolio-text-secondary)]">
                  Leading development of scalable web applications using modern frameworks and cloud technologies.
                </p>
              </div>
              
              <div className="border-l-2 border-[var(--portfolio-accent)] pl-6">
                <h4 className="text-lg font-semibold text-[var(--portfolio-accent)] mb-2">Frontend Developer</h4>
                <p className="text-[var(--portfolio-text-secondary)] mb-2">Digital Innovations • 2020 - 2022</p>
                <p className="text-sm text-[var(--portfolio-text-secondary)]">
                  Developed responsive user interfaces and collaborated with cross-functional teams.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="bg-[var(--portfolio-primary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="text-[var(--portfolio-text-primary)] text-xl" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-[var(--portfolio-accent)] pl-6">
                <h4 className="text-lg font-semibold text-[var(--portfolio-accent)] mb-2">Master of Computer Science</h4>
                <p className="text-[var(--portfolio-text-secondary)] mb-2">Stanford University • 2018 - 2020</p>
                <p className="text-sm text-[var(--portfolio-text-secondary)]">
                  Specialized in Machine Learning and Software Engineering
                </p>
              </div>
              
              <div className="border-l-2 border-[var(--portfolio-accent)] pl-6">
                <h4 className="text-lg font-semibold text-[var(--portfolio-accent)] mb-2">Bachelor of Computer Engineering</h4>
                <p className="text-[var(--portfolio-text-secondary)] mb-2">MIT • 2014 - 2018</p>
                <p className="text-sm text-[var(--portfolio-text-secondary)]">
                  Magna Cum Laude, Focus on Web Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
