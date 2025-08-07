// import { Award, ExternalLink, Calendar } from "lucide-react";

// interface Certification {
//   id: string;
//   title: string;
//   issuer: string;
//   issueDate: string;
//   credentialUrl: string;
// }

// export default function CertificationsSection() {
//   const certifications: Certification[] = [
//     {
//       id: "146561826",
//       title: "SnowPro Core Certification",
//       issuer: "Snowflake",
//       issueDate: "June 2025",
//       credentialUrl:
//         "https://www.snowflake.com/en/data-cloud/snowpro-certification/",
//     },
//     {
//       id: "8063cc204e...d12eda85e",
//       title: "Corporate Finance",
//       issuer: "LinkedIn",
//       issueDate: "March 2024",
//       credentialUrl: "https://www.linkedin.com/learning/certificates",
//     },
//     {
//       id: "AWS-CF-2022",
//       title: "AWS Academy Cloud Foundations",
//       issuer: "Amazon Web Services",
//       issueDate: "May 2022",
//       credentialUrl: "https://aws.amazon.com/training/awsacademy/",
//     },
//     {
//       id: "AWS-ML-2022",
//       title: "AWS Academy Machine Learning Foundations",
//       issuer: "Amazon Web Services",
//       issueDate: "April 2022",
//       credentialUrl: "https://aws.amazon.com/training/awsacademy/",
//     },
//     {
//       id: "24730145-1024",
//       title: "JavaScript Certificate",
//       issuer: "Sololearn",
//       issueDate: "February 2022",
//       credentialUrl: "https://www.sololearn.com/certificates",
//     },
//     {
//       id: "#1097-24730145",
//       title: "React + Redux Certificate",
//       issuer: "Sololearn",
//       issueDate: "January 2022",
//       credentialUrl: "https://www.sololearn.com/certificates",
//     },
//     {
//       id: "ys9fsq1aoh",
//       title: "Node.js Master Class",
//       issuer: "Pirple",
//       issueDate: "November 2021",
//       credentialUrl: "https://www.pirple.com/",
//     },
//     {
//       id: "E9V2WQCLNRFE",
//       title: "Introduction to IoT & Embedded Systems",
//       issuer: "Coursera",
//       issueDate: "September 2021",
//       credentialUrl: "https://www.coursera.org/learn/iot",
//     },
//     {
//       id: "MBTB-JAVA-2021",
//       title: "Java Programming with JDBC, Multi-threading & Networking",
//       issuer: "Maharashtra Business Training Board (MBTB)",
//       issueDate: "July 2021",
//       credentialUrl: "https://www.msbte.org.in/",
//     },
//     {
//       id: "YAY-21L9Y60G",
//       title: "Python Certificate",
//       issuer: "GirlScript Foundation",
//       issueDate: "January 2021",
//       credentialUrl: "https://www.girlscript.tech/",
//     },
//     {
//       id: "YAY-200MRLL5",
//       title: "Front-End Web Development",
//       issuer: "GirlScript Foundation",
//       issueDate: "December 2020",
//       credentialUrl: "https://www.girlscript.tech/",
//     },
//     {
//       id: "C3149A16-1C32-3055-9813-D883255B9123",
//       title: "Programming in Python",
//       issuer: "Internshala Trainings",
//       issueDate: "August 2020",
//       credentialUrl: "https://internshala.com/trainings",
//     },
//   ];

//   return (
//     <section
//       id="certifications"
//       className="section-padding bg-[var(--portfolio-primary)]"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="gradient-text">Certifications</span> & Credentials
//           </h2>
//           <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
//             Recognized credentials demonstrating technical, analytical, and
//             cloud expertise across platforms and technologies.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="bg-[var(--portfolio-secondary)]/50 p-6 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift group cursor-pointer flex flex-col h-full"
//             >
//               {/* Header with icon */}
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
//                   <Award
//                     className="text-[var(--portfolio-text-primary)]"
//                     size={24}
//                   />
//                 </div>
//               </div>

//               {/* Certification details */}
//               <div className="mb-6 flex-1">
//                 <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)] mb-3 leading-tight min-h-[3.5rem] flex items-start">
//                   {cert.title}
//                 </h3>
//                 <p className="text-[var(--portfolio-accent)] font-medium mb-3">
//                   {cert.issuer}
//                 </p>
//                 <div className="flex items-center text-[var(--portfolio-text-secondary)] text-sm mb-4">
//                   <Calendar size={16} className="mr-2" />
//                   <span>Issued: {cert.issueDate}</span>
//                 </div>
//               </div>

//               {/* Show credential button */}
//               <div className="mt-auto">
//                 <a
//                   href={cert.credentialUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-4 py-3 rounded-lg font-medium hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 flex items-center justify-center space-x-2 group/button cursor-pointer"
//                 >
//                   <span>Show Credential</span>
//                   <ExternalLink
//                     size={16}
//                     className="group-hover/button:translate-x-1 transition-transform duration-300"
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ExternalLink,
  Award,
} from "lucide-react";
import { useRef } from "react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
}

export default function CertificationsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollByAmount = 320 * 3;

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  const certifications: Certification[] = [
    {
      id: "146561826",
      title: "SnowPro Core Certification",
      issuer: "Snowflake",
      issueDate: "June 2025",
      credentialUrl:
        "https://www.snowflake.com/en/data-cloud/snowpro-certification/",
    },
    {
      id: "8063cc204e...d12eda85e",
      title: "Corporate Finance",
      issuer: "LinkedIn",
      issueDate: "March 2024",
      credentialUrl: "https://www.linkedin.com/learning/certificates",
    },
    {
      id: "AWS-CF-2022",
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      issueDate: "May 2022",
      credentialUrl: "https://aws.amazon.com/training/awsacademy/",
    },
    {
      id: "AWS-ML-2022",
      title: "AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services",
      issueDate: "April 2022",
      credentialUrl: "https://aws.amazon.com/training/awsacademy/",
    },
    {
      id: "24730145-1024",
      title: "JavaScript Certificate",
      issuer: "Sololearn",
      issueDate: "February 2022",
      credentialUrl: "https://www.sololearn.com/certificates",
    },
    {
      id: "#1097-24730145",
      title: "React + Redux Certificate",
      issuer: "Sololearn",
      issueDate: "January 2022",
      credentialUrl: "https://www.sololearn.com/certificates",
    },
    {
      id: "ys9fsq1aoh",
      title: "Node.js Master Class",
      issuer: "Pirple",
      issueDate: "November 2021",
      credentialUrl: "https://www.pirple.com/",
    },
    {
      id: "E9V2WQCLNRFE",
      title: "Introduction to IoT & Embedded Systems",
      issuer: "Coursera",
      issueDate: "September 2021",
      credentialUrl: "https://www.coursera.org/learn/iot",
    },
    {
      id: "MBTB-JAVA-2021",
      title: "Programming in Java with JDBC, Multi-threading",
      issuer: "MBTB - Task Consultants",
      issueDate: "July 2021",
      credentialUrl: "https://www.msbte.org.in/",
    },
    {
      id: "YAY-21L9Y60G",
      title: "Python Certificate",
      issuer: "GirlScript Foundation",
      issueDate: "January 2021",
      credentialUrl: "https://www.girlscript.tech/",
    },
    {
      id: "YAY-200MRLL5",
      title: "Front-End Web Development",
      issuer: "GirlScript Foundation",
      issueDate: "December 2020",
      credentialUrl: "https://www.girlscript.tech/",
    },
    {
      id: "C3149A16-1C32-3055-9813-D883255B9123",
      title: "Programming in Python",
      issuer: "Internshala Trainings",
      issueDate: "August 2020",
      credentialUrl: "https://internshala.com/trainings",
    },
  ];

  return (
    <section
      id="certifications"
      className="section-padding bg-[var(--portfolio-primary)]"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            Recognized credentials demonstrating technical, analytical, and
            cloud expertise across platforms and technologies.
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-md bg-[var(--portfolio-secondary)] hover:bg-blue-500 transition-colors"
        >
          <ChevronLeft
            size={24}
            className="text-[var(--portfolio-accent)] hover:text-white transition-colors"
          />
        </button>

        {/* Scrollable Certifications */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[var(--portfolio-secondary)]/50 p-6 w-[300px] flex-shrink-0 rounded-2xl border border-[var(--portfolio-secondary)] hover-lift group cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award
                    className="text-[var(--portfolio-text-primary)]"
                    size={24}
                  />
                </div>
              </div>
              <div className="mb-6 flex-1">
                <h3 className="text-lg font-bold text-[var(--portfolio-text-primary)] mb-3 leading-tight min-h-[3.5rem] line-clamp-2 break-words">
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
              <div className="mt-auto">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] px-4 py-3 rounded-lg font-medium hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-all duration-300 flex items-center justify-center space-x-2 group/button"
                >
                  <span>Show Credential</span>
                  <ExternalLink
                    size={16}
                    className="group-hover/button:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-md bg-[var(--portfolio-secondary)] hover:bg-blue-500 transition-colors"
        >
          <ChevronRight
            size={24}
            className="text-[var(--portfolio-accent)] hover:text-white transition-colors"
          />
        </button>
      </div>
    </section>
  );
}
