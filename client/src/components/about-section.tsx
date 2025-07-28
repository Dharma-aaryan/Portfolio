import { Briefcase, GraduationCap, Users } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon?: string;
}

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  items: ExperienceItem[];
  className?: string;
}

const SectionCard = ({ icon, title, items, className = "" }: SectionCardProps) => (
  <div className={`bg-[var(--portfolio-primary)]/50 p-5 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift ${className}`}>
    <div className="flex items-center mb-5">
      <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center mr-3">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-l-2 border-[var(--portfolio-accent)] pl-4">
          <div className="flex items-start space-x-3">
            {item.icon && (
              <div className="flex-shrink-0 w-7 h-7 rounded-lg overflow-hidden bg-white p-1 mt-0.5">
                <img 
                  src={item.icon} 
                  alt={`${item.organization} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-[var(--portfolio-accent)] mb-1">{item.title}</h4>
              <p className="text-[var(--portfolio-text-secondary)] mb-1 text-xs">{item.organization} • {item.period}</p>
              <p className="text-xs text-[var(--portfolio-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function AboutSection() {
  const professionalExperience: ExperienceItem[] = [
    {
      title: "Programming Analyst",
      organization: "Newgen Software",
      period: "Feb 2025 - May 2025",
      description: "Engineered dynamic web interface using ReactJS, improving efficiency by 35%. Developed low-code/no-code drag-and-drop form builder for non-technical users.",
      icon: "/images/logos/newgen.png"
    },
    {
      title: "Consulting Business Analyst",
      organization: "Synapse ITS",
      period: "Feb 2025 - May 2025",
      description: "Designed strategic analytics roadmap to integrate APS systems with organization-wide KPIs. Reduced operational latency by 17%.",
      icon: "/images/logos/synapse.png"
    },
    {
      title: "Vice President",
      organization: "EnVision UTD",
      period: "Oct 2024 - May 2025",
      description: "Led organizational growth through technical events and Tableau-sponsored workshops, fostering collaboration among 200+ students and professionals.",
      icon: "/images/logos/envision.png"
    },
    {
      title: "Data and BI Analyst",
      organization: "SCORG Technologies Pvt Ltd",
      period: "Aug 2022 - May 2023",
      description: "Built hospital business intelligence platform for real-time monitoring. Designed and optimized ETL pipelines feeding Power BI dashboards.",
      icon: "/images/logos/scorg.png"
    },
    {
      title: "Software Development Intern",
      organization: "DroneAcharya Aerial Innovations Ltd",
      period: "Nov 2022 - Feb 2023",
      description: "Developed drone-based spatial data collection system using AngularJS and Node.js. Integrated GIS databases for enhanced geospatial accuracy.",
      icon: "/images/logos/droneacharya.png"
    },
    {
      title: "Co-Head - Development Team & Android Lead",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      description: "Spearheaded Android development initiatives. Mentored students, conducted workshops, and co-built GDSC website promoting open-source collaboration.",
      icon: "/images/logos/gdsc.png"
    }
  ];

  const education: ExperienceItem[] = [
    {
      title: "Master of Computer Science",
      organization: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Machine Learning and Software Engineering",
      icon: "/images/logos/stanford.png"
    },
    {
      title: "Bachelor of Computer Engineering",
      organization: "MIT",
      period: "2014 - 2018",
      description: "Magna Cum Laude, Focus on Web Technologies",
      icon: "/images/logos/mit.png"
    }
  ];

  const leadership: ExperienceItem[] = [
    {
      title: "President",
      organization: "Computer Science Student Association",
      period: "2017 - 2018",
      description: "Led a team of 50+ students, organized tech workshops and networking events.",
      icon: "/images/logos/cssa.png"
    },
    {
      title: "Vice President",
      organization: "Engineering Honor Society",
      period: "2016 - 2017",
      description: "Managed academic programs and mentorship initiatives for engineering students.",
      icon: "/images/logos/ehs.png"
    },
    {
      title: "Team Lead",
      organization: "University Hackathon Committee",
      period: "2015 - 2016",
      description: "Organized annual hackathon with 200+ participants and $10K in prizes.",
      icon: "/images/logos/hackathon.png"
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
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Professional Experience - Takes 1 column (half) */}
          <SectionCard
            icon={<Briefcase className="text-[var(--portfolio-text-primary)]" size={24} />}
            title="Professional Experience"
            items={professionalExperience}
          />
          
          {/* Education and Leadership - Takes 1 column (half) */}
          <div className="space-y-8">
            <SectionCard
              icon={<GraduationCap className="text-[var(--portfolio-text-primary)]" size={24} />}
              title="Education"
              items={education}
            />
            
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
