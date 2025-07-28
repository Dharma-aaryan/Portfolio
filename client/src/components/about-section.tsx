import { Briefcase, GraduationCap, Users, ExternalLink, Award, BookOpen, TrendingUp } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  location?: string;
  icon?: string;
  bullets?: string[];
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
  const professionalExperience: ExperienceItem[] = [
    {
      title: "Programming Analyst",
      organization: "Newgen Software",
      period: "Feb 2025 - May 2025",
      location: "Part-time · Remote",
      description: "",
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
      bullets: [
        "Led organizational growth through technical events and Tableau-sponsored workshops",
        "Fostered collaboration among 200+ students and professionals in data analytics and visualization"
      ],
      icon: "/images/logos/envision.png"
    },
    {
      title: "Data and BI Analyst",
      organization: "SCORG Technologies Pvt Ltd",
      period: "Aug 2022 - May 2023",
      location: "Internship · Hybrid",
      description: "",
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
      bullets: [
        "Developed a drone-based spatial data collection system using AngularJS and Node.js",
        "Integrated GIS databases and automated spatial workflows to enhance geospatial accuracy and decision-making efficiency"
      ],
      icon: "/images/logos/droneacharya.png"
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
        
        {/* Professional Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
              <Briefcase className="text-[var(--portfolio-text-primary)]" size={24} />
            </div>
            <h3 className="text-3xl font-bold gradient-text">Professional Experience</h3>
          </div>
          <div className={`grid gap-6 ${professionalExperience.length % 2 === 1 ? 'lg:grid-cols-2 [&>*:last-child]:lg:col-span-2 [&>*:last-child]:lg:max-w-2xl [&>*:last-child]:lg:mx-auto' : 'lg:grid-cols-2'}`}>
            {professionalExperience.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="text-[var(--portfolio-text-primary)]" size={24} />
            </div>
            <h3 className="text-3xl font-bold gradient-text">Education</h3>
          </div>
          <div className={`grid gap-6 ${education.length % 2 === 1 ? 'lg:grid-cols-2 [&>*:last-child]:lg:col-span-2 [&>*:last-child]:lg:max-w-2xl [&>*:last-child]:lg:mx-auto' : 'lg:grid-cols-2'}`}>
            {education.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </div>
        
        {/* Leadership Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
              <Users className="text-[var(--portfolio-text-primary)]" size={24} />
            </div>
            <h3 className="text-3xl font-bold gradient-text">Leadership Experience</h3>
          </div>
          <div className={`grid gap-6 ${leadership.length % 2 === 1 ? 'lg:grid-cols-2 [&>*:last-child]:lg:col-span-2 [&>*:last-child]:lg:max-w-2xl [&>*:last-child]:lg:mx-auto' : 'lg:grid-cols-2'}`}>
            {leadership.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </div>
        
        {/* Publication */}
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="text-[var(--portfolio-text-primary)]" size={24} />
            </div>
            <h3 className="text-3xl font-bold gradient-text">Research Publication</h3>
          </div>
          <PublicationCard publication={publication} />
        </div>
      </div>
    </section>
  );
}
