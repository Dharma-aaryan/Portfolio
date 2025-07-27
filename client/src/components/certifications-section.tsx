import { Award, ExternalLink, Calendar } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      id: "AWS-SAA-C03",
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      issueDate: "March 2024",
      credentialUrl: "https://aws.amazon.com/certification/verify/"
    },
    {
      id: "CKAD-2024",
      title: "Certified Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation",
      issueDate: "January 2024",
      credentialUrl: "https://www.cncf.io/certification/ckad/"
    },
    {
      id: "GCP-ACE-2023",
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      issueDate: "November 2023",
      credentialUrl: "https://cloud.google.com/certification/cloud-engineer"
    },
    {
      id: "PSM-I-2023",
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      issueDate: "September 2023",
      credentialUrl: "https://www.scrum.org/professional-scrum-certifications"
    },
    {
      id: "TF-ASSOC-2023",
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      issueDate: "August 2023",
      credentialUrl: "https://www.hashicorp.com/certification/terraform-associate"
    },
    {
      id: "REACT-DEV-2023",
      title: "Meta React Developer Professional Certificate",
      issuer: "Meta (via Coursera)",
      issueDate: "June 2023",
      credentialUrl: "https://www.coursera.org/professional-certificates/meta-react-developer"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-[var(--portfolio-primary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            Professional certifications demonstrating expertise across cloud platforms, development frameworks, and industry best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-[var(--portfolio-secondary)]/50 p-6 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift group"
            >
              {/* Header with icon */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-[var(--portfolio-text-primary)]" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[var(--portfolio-text-secondary)] mb-1">
                    ID: {cert.id}
                  </div>
                </div>
              </div>
              
              {/* Certification details */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)] mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-[var(--portfolio-accent)] font-medium mb-3">
                  {cert.issuer}
                </p>
                <div className="flex items-center text-[var(--portfolio-text-secondary)] text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>Issued: {cert.issueDate}</span>
                </div>
              </div>
              
              {/* Show credential button */}
              <a 
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[var(--portfolio-primary)] border border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-4 py-3 rounded-lg font-medium hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 flex items-center justify-center space-x-2 group/button"
              >
                <span>Show Credential</span>
                <ExternalLink size={16} className="group-hover/button:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}