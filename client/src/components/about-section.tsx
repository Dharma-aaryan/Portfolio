import { Briefcase, GraduationCap, Users, ExternalLink, Award, BookOpen, TrendingUp, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  location?: string;
  icon?: string;
  bullets?: string[];
  type: 'work' | 'education' | 'leadership' | 'publication';
  startDate: string; // For sorting chronologically
}

interface ImpactHighlight {
  icon: React.ReactNode;
  number: string;
  label: string;
}

interface Publication {
  title: string;
  journal: string;
  date: string;
  summary: string;
  url: string;
}

const ImpactHighlights = () => {
  const highlights: ImpactHighlight[] = [
    {
      icon: <Briefcase className="text-[var(--portfolio-text-primary)]" size={20} />,
      number: "8+",
      label: "Professional Roles"
    },
    {
      icon: <TrendingUp className="text-[var(--portfolio-text-primary)]" size={20} />,
      number: "20+",
      label: "Projects Completed"
    },
    {
      icon: <Award className="text-[var(--portfolio-text-primary)]" size={20} />,
      number: "10+",
      label: "Certifications"
    },
    {
      icon: <BookOpen className="text-[var(--portfolio-text-primary)]" size={20} />,
      number: "1",
      label: "Research Publication"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      {highlights.map((highlight, index) => (
        <div key={index} className="bg-[var(--portfolio-primary)]/50 p-6 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift text-center">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
            {highlight.icon}
          </div>
          <div className="text-2xl font-bold gradient-text mb-1">{highlight.number}</div>
          <div className="text-sm text-[var(--portfolio-text-secondary)]">{highlight.label}</div>
        </div>
      ))}
    </div>
  );
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
  <div className="bg-[var(--portfolio-primary)]/50 p-6 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift shadow-lg hover:shadow-xl transition-all duration-300">
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
        <p className="text-[var(--portfolio-text-primary)] font-medium mb-1 text-sm">
          {item.organization} • {item.period}
          {item.location && ` • ${item.location}`}
        </p>
        {item.bullets && item.bullets.length > 0 ? (
          <ul className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed space-y-1 mt-3">
            {item.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[var(--portfolio-accent)] mr-2 mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed mt-3">
            {item.description}
          </p>
        )}
      </div>
    </div>
  </div>
);

const TimelineNode = ({ item, index, isLast }: { item: ExperienceItem; index: number; isLast: boolean }) => {
  const getTypeConfig = (type: string) => {
    switch (type) {
      case 'work':
        return {
          icon: <Briefcase size={20} />,
          color: 'bg-blue-500',
          bgColor: 'bg-blue-50 dark:bg-blue-950/30',
          borderColor: 'border-blue-200 dark:border-blue-800'
        };
      case 'education':
        return {
          icon: <GraduationCap size={20} />,
          color: 'bg-green-500',
          bgColor: 'bg-green-50 dark:bg-green-950/30',
          borderColor: 'border-green-200 dark:border-green-800'
        };
      case 'leadership':
        return {
          icon: <Users size={20} />,
          color: 'bg-purple-500',
          bgColor: 'bg-purple-50 dark:bg-purple-950/30',
          borderColor: 'border-purple-200 dark:border-purple-800'
        };
      case 'publication':
        return {
          icon: <BookOpen size={20} />,
          color: 'bg-orange-500',
          bgColor: 'bg-orange-50 dark:bg-orange-950/30',
          borderColor: 'border-orange-200 dark:border-orange-800'
        };
      default:
        return {
          icon: <Calendar size={20} />,
          color: 'bg-gray-500',
          bgColor: 'bg-gray-50 dark:bg-gray-950/30',
          borderColor: 'border-gray-200 dark:border-gray-800'
        };
    }
  };

  const config = getTypeConfig(item.type);

  return (
    <div className="relative flex items-start group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-[var(--portfolio-accent)] to-[var(--portfolio-secondary)] opacity-30"></div>
      )}
      
      {/* Timeline Node */}
      <div className={`relative z-10 w-12 h-12 ${config.color} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        {config.icon}
      </div>
      
      {/* Content Card */}
      <div className={`ml-6 flex-1 ${config.bgColor} ${config.borderColor} border p-6 rounded-2xl hover-lift shadow-lg hover:shadow-xl transition-all duration-300 mb-8`}>
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
            <div className="flex items-center space-x-2 mb-2">
              <span className={`text-xs px-2 py-1 rounded-full ${config.color} text-white font-medium uppercase tracking-wide`}>
                {item.type}
              </span>
              <span className="text-xs text-[var(--portfolio-text-secondary)]">{item.period}</span>
            </div>
            <h4 className="text-lg font-bold text-[var(--portfolio-accent)] mb-2 leading-tight">{item.title}</h4>
            <p className="text-[var(--portfolio-text-primary)] font-medium mb-1 text-sm">
              {item.organization}
              {item.location && ` • ${item.location}`}
            </p>
            {item.bullets && item.bullets.length > 0 ? (
              <ul className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed space-y-1 mt-3">
                {item.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[var(--portfolio-accent)] mr-2 mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed mt-3">
                {item.description}
              </p>
            )}
            
            {/* Special handling for publications */}
            {item.type === 'publication' && (
              <a 
                href="https://www.ijecbs.com/July2022/4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)] px-4 py-2 rounded-lg font-medium hover:bg-[var(--portfolio-accent)]/90 transition-colors duration-300 mt-4"
              >
                <span>View Publication</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PublicationCard = ({ publication }: { publication: Publication }) => (
  <div className="bg-[var(--portfolio-primary)]/50 p-6 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift shadow-lg">
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
        <BookOpen className="text-[var(--portfolio-text-primary)]" size={24} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-bold text-[var(--portfolio-accent)] mb-2 leading-tight">{publication.title}</h4>
        <p className="text-[var(--portfolio-text-primary)] font-medium mb-3 text-sm">
          {publication.journal} • {publication.date}
        </p>
        <p className="text-sm text-[var(--portfolio-text-secondary)] leading-relaxed mb-4">
          {publication.summary}
        </p>
        <a 
          href={publication.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)] px-4 py-2 rounded-lg font-medium hover:bg-[var(--portfolio-accent)]/90 transition-colors duration-300"
        >
          <span>Show Publication</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </div>
);

export default function AboutSection() {
  // Combine all experiences for chronological timeline
  const allExperiences: ExperienceItem[] = [
    {
      title: "Programming Analyst",
      organization: "Newgen Software",
      period: "Feb 2025 - May 2025",
      location: "Part-time · Remote",
      description: "",
      type: "work",
      startDate: "2025-02",
      bullets: [
        "Engineered a dynamic web interface using ReactJS to streamline data configuration workflows, improving efficiency by 35%",
        "Developed a low-code/no-code drag-and-drop form builder that empowered non-technical users to build and manage complex forms independently"
      ],
      icon: "/images/logos/newgen.png"
    },
    {
      title: "Consulting Business Analyst",
      organization: "Synapse ITS",
      period: "Feb 2025 - May 2025",
      location: "Apprenticeship · Remote",
      description: "",
      type: "work",
      startDate: "2025-02",
      bullets: [
        "Designed a strategic analytics roadmap to integrate APS systems with organization-wide KPIs",
        "Improved data flow and reporting quality by aligning pipelines with business needs, reducing operational latency by 17%"
      ],
      icon: "/images/logos/synapse.png"
    },
    {
      title: "Vice President",
      organization: "EnVision UTD",
      period: "Oct 2024 - May 2025",
      location: "Part-time",
      description: "",
      type: "leadership",
      startDate: "2024-10",
      bullets: [
        "Led organizational growth through technical events and Tableau-sponsored workshops",
        "Fostered collaboration among 200+ students and professionals in data analytics and visualization"
      ],
      icon: "/images/logos/envision.png"
    },
    {
      title: "Master of Science in Information Technology and Management",
      organization: "University of Texas at Dallas",
      period: "Aug 2023 - May 2025",
      location: "Dallas, TX",
      description: "",
      type: "education",
      startDate: "2023-08",
      bullets: [
        "Specialized in Data Analytics, Business Intelligence, and Technology Strategy",
        "Coursework: Advanced Database Systems, Machine Learning, Business Process Management, IT Project Management"
      ],
      icon: "/images/logos/utd.png"
    },
    {
      title: "Data and BI Analyst",
      organization: "SCORG Technologies Pvt Ltd",
      period: "Aug 2022 - May 2023",
      location: "Internship · Hybrid",
      description: "",
      type: "work",
      startDate: "2022-08",
      bullets: [
        "Built a hospital business intelligence platform for real-time monitoring of patient flow, revenue, and resource allocation",
        "Designed and optimized ETL pipelines feeding Power BI dashboards, leading to operational cost savings",
        "Published research on improving healthcare delivery through BI and real-time analytics"
      ],
      icon: "/images/logos/scorg.png"
    },
    {
      title: "Software Development Intern",
      organization: "DroneAcharya Aerial Innovations Ltd",
      period: "Nov 2022 - Feb 2023",
      location: "Internship · On-site",
      description: "",
      type: "work",
      startDate: "2022-11",
      bullets: [
        "Developed a drone-based spatial data collection system using AngularJS and Node.js",
        "Integrated GIS databases and automated spatial workflows to enhance geospatial accuracy and decision-making efficiency"
      ],
      icon: "/images/logos/droneacharya.png"
    },
    {
      title: "Enhancing Healthcare Outcomes through Business Intelligence and Real-Time Analytics",
      organization: "IJECBS",
      period: "July 2022",
      location: "Research Publication",
      description: "This research explores the integration of business intelligence systems and real-time analytics to improve healthcare delivery, operational efficiency, and patient outcomes in hospital environments.",
      type: "publication",
      startDate: "2022-07",
      bullets: [
        "Analyzed the impact of BI systems on healthcare operational efficiency",
        "Developed framework for real-time analytics in patient care monitoring"
      ],
      icon: "/images/logos/ijecbs.png"
    },
    {
      title: "Co-Head - Development Team",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      location: "Part-time",
      description: "",
      type: "leadership",
      startDate: "2021-09",
      bullets: [
        "Directed multi-domain tech initiatives across Android, web, and cloud by leading the core development team",
        "Co-developed a community Android app featured by Google's official dev platforms and mentored peers in full-stack development"
      ],
      icon: "/images/logos/gdsc-dev.png"
    },
    {
      title: "Android Lead",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      location: "Part-time",
      description: "",
      type: "leadership",
      startDate: "2021-09",
      bullets: [
        "Headed Android development activities and technical mentorship sessions",
        "Organized hands-on coding workshops and contributed to open-source projects supporting student learning and engagement"
      ],
      icon: "/images/logos/gdsc-android.png"
    },
    {
      title: "Bachelor of Engineering in Computer Engineering",
      organization: "Savitribai Phule Pune University (SPPU)",
      period: "Jul 2019 - Jun 2023",
      location: "Pune, India",
      description: "",
      type: "education",
      startDate: "2019-07",
      bullets: [
        "Graduated with First Class honors, focusing on software development, data structures, and computer systems",
        "Led multiple academic projects in web development, mobile applications, and database management systems"
      ],
      icon: "/images/logos/sppu.png"
    }
  ];

  // Sort experiences by start date (most recent first)
  const sortedExperiences = allExperiences.sort((a, b) => b.startDate.localeCompare(a.startDate));

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
      description: "",
      bullets: [
        "Led a data visualization student organization focused on industry collaboration, technical workshops, and Tableau-sponsored events",
        "Facilitated professional development for 200+ students through interactive learning initiatives and real-world analytics use cases"
      ],
      icon: "/images/logos/envision-utd.png"
    },
    {
      title: "Co-Head - Development Team",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      description: "",
      bullets: [
        "Directed multi-domain tech initiatives across Android, web, and cloud by leading the core development team",
        "Co-developed a community Android app featured by Google's official dev platforms and mentored peers in full-stack development"
      ],
      icon: "/images/logos/gdsc-dev.png"
    },
    {
      title: "Android Lead",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2021 - Jul 2022",
      description: "",
      bullets: [
        "Headed Android development activities and technical mentorship sessions",
        "Organized hands-on coding workshops and contributed to open-source projects supporting student learning and engagement"
      ],
      icon: "/images/logos/gdsc-android.png"
    }
  ];

  const publication: Publication = {
    title: "Enhancing Healthcare Outcomes through Business Intelligence and Real-Time Analytics",
    journal: "IJECBS",
    date: "July 2022",
    summary: "This research explores the integration of business intelligence systems and real-time analytics to improve healthcare delivery, operational efficiency, and patient outcomes in hospital environments.",
    url: "https://www.ijecbs.com/July2022/4.pdf"
  };

  return (
    <section id="about" className="section-padding bg-[var(--portfolio-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto mb-12">
            Passionate about creating innovative solutions and pushing the boundaries of modern web development
          </p>
        </div>
        
        {/* Impact Highlights */}
        <ImpactHighlights />
        
        {/* Timeline Section */}
        <div className="mb-8">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
              <Calendar className="text-[var(--portfolio-text-primary)]" size={24} />
            </div>
            <h3 className="text-3xl font-bold gradient-text">Professional Journey</h3>
          </div>
          
          {/* Timeline Legend */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-[var(--portfolio-text-secondary)]">Work Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-[var(--portfolio-text-secondary)]">Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-[var(--portfolio-text-secondary)]">Leadership</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-[var(--portfolio-text-secondary)]">Research</span>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {sortedExperiences.map((item, index) => (
              <TimelineNode 
                key={index} 
                item={item} 
                index={index} 
                isLast={index === sortedExperiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
