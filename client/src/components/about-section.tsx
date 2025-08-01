import { Briefcase, GraduationCap, Users, ExternalLink, Award, BookOpen, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

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
        <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden p-2 mt-1 shadow-sm relative" 
             style={{
               backgroundImage: `url('https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="absolute inset-0 bg-white/80 rounded-xl backdrop-blur-sm"></div>
          <img 
            src={item.icon} 
            alt={`${item.organization} logo`}
            className="w-full h-full object-contain relative z-10"
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

const TabCard = ({ item }: { item: ExperienceItem }) => (
  <div className="bg-[var(--portfolio-primary)]/50 p-8 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift hover:shadow-[0_20px_60px_rgba(0,191,255,0.25)] transition-all duration-300 w-full max-w-none cursor-pointer">
    <div className="flex items-start space-x-6">
      {item.icon && (
        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden p-2 mt-1 shadow-sm relative"
             style={{
               backgroundImage: `url('https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000) + 500}')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="absolute inset-0 bg-white/75 rounded-xl backdrop-blur-sm"></div>
          <img 
            src={item.icon} 
            alt={`${item.organization} logo`}
            className="w-full h-full object-contain relative z-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="text-xl font-bold text-[hsl(195,100%,50%)] mb-3 leading-tight">{item.title}</h4>
        <p className="text-base mb-1">
          <span className="text-[var(--portfolio-accent)] font-medium">{item.organization}</span> • 
          <span className="text-[var(--portfolio-text-primary)] font-medium"> {item.period}</span>
          {item.location && <span className="text-[var(--portfolio-text-primary)]"> • {item.location}</span>}
        </p>
        {item.bullets && item.bullets.length > 0 ? (
          <ul className="text-base text-[var(--portfolio-text-secondary)] leading-relaxed space-y-2 mt-4">
            {item.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[var(--portfolio-accent)] mr-3 mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base text-[var(--portfolio-text-secondary)] leading-relaxed mt-4">
            {item.description}
          </p>
        )}
        
        {/* Special handling for publications - matching certification button style */}
        {item.type === 'publication' && (
          <a 
            href="https://www.ijecbs.com/July2022/4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 items-center space-x-2 group/button cursor-pointer"
          >
            <span>View Publication</span>
            <ExternalLink size={16} className="group-hover/button:translate-x-1 transition-transform duration-300" />
          </a>
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
  const [activeTab, setActiveTab] = useState<'professional' | 'education' | 'leadership' | 'research'>('professional');

  // Separate experiences by category
  const professionalExperience: ExperienceItem[] = [
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
      title: "Programming Intern",
      organization: "SCORG Technologies Pvt. Ltd.",
      period: "Feb 2022 - Apr 2022",
      location: "Internship · Pune, India",
      description: "",
      type: "work",
      startDate: "2022-02",
      bullets: [
        "Developed OCR-based document preprocessing in Python",
        "Focused on data cleaning, segmentation, and feature extraction for unstructured documents"
      ],
      icon: "/images/logos/scorg.png"
    },
    {
      title: "Development Intern",
      organization: "Task Consultants Pvt. Ltd.",
      period: "Jul 2021 - Sep 2021",
      location: "Internship · Hybrid · Pune, India",
      description: "",
      type: "work",
      startDate: "2021-07",
      bullets: [
        "Created an Android app for MBTB's Center Management using Java and Firebase",
        "Improved UI/UX and navigation while streamlining backend operations via Firebase DB"
      ],
      icon: "/images/logos/task-consultants.png"
    }
  ];

  const education: ExperienceItem[] = [
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
      icon: "/images/logos/utd-new.png"
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
      icon: "/images/logos/sppu-new.png"
    }
  ];

  const leadership: ExperienceItem[] = [
    {
      title: "Vice President",
      organization: "EnVision UTD",
      period: "Oct 2023 - May 2025",
      location: "",
      description: "",
      type: "leadership",
      startDate: "2023-10",
      bullets: [
        "Led organizational growth through technical events and Tableau-sponsored workshops",
        "Fostered collaboration among 200+ students and professionals in data analytics and visualization"
      ],
      icon: "/images/logos/envision.jpg"
    },
    {
      title: "Co-Head - Development Team",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2020 - May 2022",
      location: "",
      description: "",
      type: "leadership",
      startDate: "2020-09",
      bullets: [
        "Directed multi-domain tech initiatives across Android, web, and cloud by leading the core development team",
        "Co-developed a community Android app featured by Google's official dev platforms and mentored peers in full-stack development"
      ],
      icon: "/images/logos/gdsc.png"
    },
    {
      title: "Android Lead",
      organization: "Google Developer Student Clubs (GDSC)",
      period: "Sep 2020 - May 2022",
      location: "",
      description: "",
      type: "leadership",
      startDate: "2020-09",
      bullets: [
        "Headed Android development activities and technical mentorship sessions",
        "Organized hands-on coding workshops and contributed to open-source projects supporting student learning and engagement"
      ],
      icon: "/images/logos/android.png"
    }
  ];

  const research: ExperienceItem[] = [
    {
      title: "Enhancing Healthcare Outcomes through Business Intelligence and Real-Time Analytics",
      organization: "IJECBS",
      period: "December 2022",
      location: "Research Publication",
      description: "This research explores the integration of business intelligence systems and real-time analytics to improve healthcare delivery, operational efficiency, and patient outcomes in hospital environments.",
      type: "publication",
      startDate: "2022-07",
      bullets: [
        "Analyzed the impact of BI systems on healthcare operational efficiency",
        "Developed framework for real-time analytics in patient care monitoring"
      ],
      icon: "/images/logos/issn.jpg"
    }
  ];

  const tabs = [
    {
      id: 'professional' as const,
      label: 'Professional',
      icon: <Briefcase size={20} />,
      data: professionalExperience,
      count: professionalExperience.length
    },
    {
      id: 'education' as const,
      label: 'Education',
      icon: <GraduationCap size={20} />,
      data: education,
      count: education.length
    },
    {
      id: 'leadership' as const,
      label: 'Leadership',
      icon: <Users size={20} />,
      data: leadership,
      count: leadership.length
    },
    {
      id: 'research' as const,
      label: 'Research',
      icon: <BookOpen size={20} />,
      data: research,
      count: research.length
    }
  ];

  const getCurrentTabData = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return currentTab ? currentTab.data : [];
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
        
        {/* Tab Section */}
        <div className="mb-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)] shadow-lg scale-105'
                    : 'bg-[var(--portfolio-primary)]/50 text-[var(--portfolio-text-secondary)] hover:bg-[var(--portfolio-secondary)]/50 hover:text-[var(--portfolio-text-primary)] border border-[var(--portfolio-secondary)]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === tab.id 
                    ? 'bg-[var(--portfolio-primary)]/20 text-[var(--portfolio-primary)]'
                    : 'bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-6">
              {getCurrentTabData().map((item, index) => (
                <TabCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
