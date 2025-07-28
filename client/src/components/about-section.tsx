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
  <div className={`bg-[var(--portfolio-primary)]/50 p-8 rounded-3xl border border-[var(--portfolio-secondary)] hover-lift shadow-lg ${className}`}>
    <div className="flex items-center mb-8">
      <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mr-4 shadow-md">
        {icon}
      </div>
      <h3 className="text-2xl font-bold gradient-text">{title}</h3>
    </div>
    
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="bg-[var(--portfolio-secondary)]/30 p-6 rounded-2xl border-l-4 border-[var(--portfolio-accent)] hover:bg-[var(--portfolio-secondary)]/50 transition-colors duration-300">
          <div className="flex items-start space-x-4">
            {item.icon && (
              <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white p-2 mt-1 shadow-sm">
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
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-bold text-[var(--portfolio-accent)] mb-2 leading-tight">{item.title}</h4>
              <p className="text-[var(--portfolio-text-primary)] font-medium mb-2 text-sm">{item.organization} • {item.period}</p>
              <p className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed">
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
      title: "MS, Information Technology & Management",
      organization: "University of Texas at Dallas",
      period: "2023 - 2025",
      description: "Dallas, TX - Graduate program focusing on IT strategy, data management, and business technology integration",
      icon: "/images/logos/utd.png"
    },
    {
      title: "BE, Computer Engineering (Honors in Data Science)",
      organization: "Savitribai Phule Pune University (SPPU)",
      period: "2019 - 2023",
      description: "India - Bachelor's degree with specialized honors in Data Science and computer engineering fundamentals",
      icon: "/images/logos/sppu.png"
    }
  ];

  const leadership: ExperienceItem[] = [
    {
      title: "Vice President",
      organization: "EnVision UTD · University of Texas at Dallas",
      period: "Oct 2024 - May 2025",
      description: "Led a data visualization student organization focused on industry collaboration, technical workshops, and Tableau-sponsored events. Facilitated professional development for 200+ students through interactive learning initiatives and real-world analytics use cases.",
      icon: "/images/logos/envision-utd.png"
    },
    {
      title: "Co-Head - Development Team",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      description: "Directed multi-domain tech initiatives across Android, web, and cloud by leading the core development team. Co-developed a community Android app featured by Google's official dev platforms and mentored peers in full-stack development.",
      icon: "/images/logos/gdsc-dev.png"
    },
    {
      title: "Android Lead",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      description: "Headed Android development activities and technical mentorship sessions. Organized hands-on coding workshops and contributed to open-source projects supporting student learning and engagement.",
      icon: "/images/logos/gdsc-android.png"
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
        
        <div className="grid xl:grid-cols-2 gap-12">
          {/* Professional Experience - Takes 1 column (half) */}
          <SectionCard
            icon={<Briefcase className="text-[var(--portfolio-text-primary)]" size={28} />}
            title="Professional Experience"
            items={professionalExperience}
          />
          
          {/* Education and Leadership - Takes 1 column (half) */}
          <div className="space-y-12">
            <SectionCard
              icon={<GraduationCap className="text-[var(--portfolio-text-primary)]" size={28} />}
              title="Education"
              items={education}
            />
            
            <SectionCard
              icon={<Users className="text-[var(--portfolio-text-primary)]" size={28} />}
              title="Leadership Experience"
              items={leadership}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
