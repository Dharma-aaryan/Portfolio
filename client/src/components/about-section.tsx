import { Briefcase, GraduationCap, Users } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  items: ExperienceItem[];
  className?: string;
}

const SectionCard = ({ icon, title, items, className = "" }: SectionCardProps) => (
  <div className={`bg-[var(--portfolio-primary)]/50 p-6 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift ${className}`}>
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    
    <div className="space-y-5">
      {items.map((item, index) => (
        <div key={index} className="border-l-2 border-[var(--portfolio-accent)] pl-6">
          <h4 className="text-base font-semibold text-[var(--portfolio-accent)] mb-1">{item.title}</h4>
          <p className="text-[var(--portfolio-text-secondary)] mb-2 text-sm">{item.organization} • {item.period}</p>
          <p className="text-xs text-[var(--portfolio-text-secondary)]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function AboutSection() {
  const professionalExperience: ExperienceItem[] = [
    {
      title: "Senior Full Stack Developer",
      organization: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using modern frameworks and cloud technologies."
    },
    {
      title: "Frontend Developer",
      organization: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed responsive user interfaces and collaborated with cross-functional teams."
    },
    {
      title: "Software Engineer Intern",
      organization: "StartupHub",
      period: "Summer 2019",
      description: "Built microservices and APIs for customer-facing applications."
    },
    {
      title: "Web Developer",
      organization: "Freelance",
      period: "2018 - 2020",
      description: "Created custom websites and e-commerce solutions for small businesses."
    },
    {
      title: "Junior Developer",
      organization: "CodeWorks Inc",
      period: "2017 - 2018",
      description: "Assisted in maintaining legacy systems and implementing new features."
    },
    {
      title: "Technical Support Specialist",
      organization: "TechSupport Pro",
      period: "2016 - 2017",
      description: "Provided technical support and troubleshooting for software applications."
    }
  ];

  const education: ExperienceItem[] = [
    {
      title: "Master of Computer Science",
      organization: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Machine Learning and Software Engineering"
    },
    {
      title: "Bachelor of Computer Engineering",
      organization: "MIT",
      period: "2014 - 2018",
      description: "Magna Cum Laude, Focus on Web Technologies"
    }
  ];

  const leadership: ExperienceItem[] = [
    {
      title: "President",
      organization: "Computer Science Student Association",
      period: "2017 - 2018",
      description: "Led a team of 50+ students, organized tech workshops and networking events."
    },
    {
      title: "Vice President",
      organization: "Engineering Honor Society",
      period: "2016 - 2017",
      description: "Managed academic programs and mentorship initiatives for engineering students."
    },
    {
      title: "Team Lead",
      organization: "University Hackathon Committee",
      period: "2015 - 2016",
      description: "Organized annual hackathon with 200+ participants and $10K in prizes."
    }
  ];

  return (
    <section id="about" className="section-padding bg-[var(--portfolio-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of modern web development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience - Takes 2 columns on large screens */}
          <SectionCard
            icon={<Briefcase className="text-[var(--portfolio-text-primary)]" size={24} />}
            title="Professional Experience"
            items={professionalExperience}
            className="lg:col-span-2"
          />
          
          {/* Education - Takes 1 column */}
          <div className="space-y-8">
            <SectionCard
              icon={<GraduationCap className="text-[var(--portfolio-text-primary)]" size={24} />}
              title="Education"
              items={education}
            />
            
            {/* Leadership - Takes 1 column */}
            <SectionCard
              icon={<Users className="text-[var(--portfolio-text-primary)]" size={24} />}
              title="Leadership Experience"
              items={leadership}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
