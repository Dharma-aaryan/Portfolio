import { useState } from "react";
import { Code, Database, Cloud, Palette, Server, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      name: "React",
      level: 95,
      category: "Frontend",
      icon: <Code size={24} />,
      color: "from-blue-400 to-blue-600",
      description: "Advanced React development with hooks, context, and modern patterns"
    },
    {
      name: "TypeScript",
      level: 90,
      category: "Frontend",
      icon: <Code size={24} />,
      color: "from-blue-500 to-blue-700",
      description: "Type-safe development with advanced TypeScript features"
    },
    {
      name: "Node.js",
      level: 88,
      category: "Backend",
      icon: <Server size={24} />,
      color: "from-green-400 to-green-600",
      description: "Server-side JavaScript with Express and modern frameworks"
    },
    {
      name: "PostgreSQL",
      level: 85,
      category: "Database",
      icon: <Database size={24} />,
      color: "from-indigo-400 to-indigo-600",
      description: "Relational database design, optimization, and complex queries"
    },
    {
      name: "AWS",
      level: 82,
      category: "Cloud",
      icon: <Cloud size={24} />,
      color: "from-orange-400 to-orange-600",
      description: "Cloud infrastructure, serverless, and DevOps practices"
    },
    {
      name: "Python",
      level: 80,
      category: "Backend",
      icon: <Code size={24} />,
      color: "from-yellow-400 to-yellow-600",
      description: "Backend development, data processing, and automation"
    },
    {
      name: "Docker",
      level: 78,
      category: "DevOps",
      icon: <Cloud size={24} />,
      color: "from-cyan-400 to-cyan-600",
      description: "Containerization and microservices architecture"
    },
    {
      name: "React Native",
      level: 75,
      category: "Mobile",
      icon: <Smartphone size={24} />,
      color: "from-purple-400 to-purple-600",
      description: "Cross-platform mobile app development"
    },
    {
      name: "UI/UX Design",
      level: 72,
      category: "Design",
      icon: <Palette size={24} />,
      color: "from-pink-400 to-pink-600",
      description: "User interface design and user experience optimization"
    }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="section-padding bg-[var(--portfolio-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            A comprehensive overview of my technical proficiencies and areas of expertise
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--portfolio-accent)] text-center">
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSkillsByCategory(category).map((skill, index) => (
                  <div
                    key={skill.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Card */}
                    <div className="bg-[var(--portfolio-secondary)] rounded-2xl p-6 border border-[var(--portfolio-secondary)] hover-lift transition-all duration-300 group-hover:border-[var(--portfolio-accent)]/50">
                      {/* Header */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--portfolio-text-primary)]">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-[var(--portfolio-text-secondary)]">
                            {skill.level}% Proficiency
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-[var(--portfolio-primary)] rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                            style={{ 
                              width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                              transitionDelay: hoveredSkill === skill.name ? `${index * 100}ms` : '0ms'
                            }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`text-sm text-[var(--portfolio-text-secondary)] transition-all duration-300 ${
                        hoveredSkill === skill.name ? 'opacity-100 max-h-20' : 'opacity-70 max-h-12'
                      } overflow-hidden`}>
                        {skill.description}
                      </p>

                      {/* Hover Glow Effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Summary */}
        <div className="mt-16 text-center">
          <div className="bg-[var(--portfolio-secondary)] rounded-2xl p-8 border border-[var(--portfolio-secondary)]">
            <h3 className="text-2xl font-bold mb-4">
              {hoveredSkill ? `${hoveredSkill} Expertise` : 'Hover over skills to explore'}
            </h3>
            <p className="text-[var(--portfolio-text-secondary)] max-w-2xl mx-auto">
              {hoveredSkill 
                ? skills.find(s => s.name === hoveredSkill)?.description 
                : 'Interactive skill visualization - hover over any skill card to see detailed proficiency levels and descriptions.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}