// import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
// import { useRef } from "react";

// export default function ProjectsSection() {
//   const projects = [
//     {
//       title: "Drag-and-Drop Form Builder",
//       description:
//         "Low-code/no-code platform to streamline form creation for non-technical users. Built using ReactJS and Node.js, this dynamic interface enabled real-time backend integration and improved configuration efficiency by 35%. Designed for reusability across 10+ workflows, empowering business users to independently manage form logic and layouts.",
//       image: "/images/project1.jpg",
//       tech: ["ReactJS", "Node.js", "Low-Code"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       title: "Hospital BI Platform",
//       description:
//         "Real-time analytics solution to monitor operations and patient flow. Developed ETL pipelines and Power BI dashboards for multi-source hospital data. Enabled administrators to track revenue and optimize resource use, contributing to a published healthcare analytics paper.",
//       image: "/images/project2.jpg",
//       tech: ["Power BI", "ETL", "Healthcare Analytics"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       title: "Drone-Based Spatial Data Platform",
//       description:
//         "Geospatial intelligence platform for infrastructure mapping. Developed using AngularJS, Node.js, and MongoDB, integrating GIS logic to enhance location accuracy by 15%. Enabled visualization and automation of field-collected data for real-time operational planning.",
//       image: "/images/project3.jpg",
//       tech: ["AngularJS", "Node.js", "MongoDB", "GIS"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       title: "APS Data Integration & Process Mining",
//       description:
//         "Enterprise analytics strategy for retail and supply chain optimization. Integrated APS systems and defined KPIs to streamline reporting and reduce latency by 17%. Collaborated across teams to align data architecture with business goals.",
//       image: "/images/project4.jpg",
//       tech: ["APS Systems", "Process Mining", "KPIs"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       title: "Customer Segmentation and Targeting",
//       description:
//         "Clustering and persona creation for targeted outreach. Used Python, Pandas, and scikit-learn to segment customer datasets based on behavior and demographics. Created actionable profiles to optimize marketing strategies and improve engagement rates.",
//       image: "/images/project5.jpg",
//       tech: ["Python", "Pandas", "scikit-learn"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       title: "Center Management Android App",
//       description:
//         "Mobile application to support administrative workflows. Built in Java with Firebase backend as part of a government training initiative. Simplified task tracking and communication for regional center management teams.",
//       image: "/images/project6.jpg",
//       tech: ["Java", "Firebase", "Android"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="section-padding bg-[var(--portfolio-secondary)]"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
//             A collection of impactful, real-world projects across software
//             engineering, data pipelines, and business intelligence.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[var(--portfolio-primary)]/50 rounded-2xl overflow-hidden border border-[var(--portfolio-secondary)] hover-lift group cursor-pointer"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   onError={(e) => {
//                     const fallbackImages = [
//                       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
//                       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
//                       "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
//                       "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
//                       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
//                       "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
//                     ];
//                     e.currentTarget.src =
//                       fallbackImages[index] || fallbackImages[0];
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[var(--portfolio-accent)]">
//                   {project.title}
//                 </h3>
//                 <p className="text-[var(--portfolio-text-secondary)] mb-4 text-sm">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)] px-3 py-1 rounded-full text-xs"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <a
//                     href={project.liveUrl}
//                     className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-primary)] transition-colors"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <ExternalLink size={20} />
//                   </a>
//                   <a
//                     href={project.githubUrl}
//                     className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-primary)] transition-colors"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Github size={20} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             href="https://github.com/Dharma-aaryan"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block gradient-bg text-[var(--portfolio-text-primary)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
//           >
//             View All Projects
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Drag-and-Drop Form Builder",
      description:
        "Low-code/no-code platform to streamline form creation for non-technical users. Built using ReactJS and Node.js, this dynamic interface enabled real-time backend integration and improved configuration efficiency by 35%. Designed for reusability across 10+ workflows, empowering business users to independently manage form logic and layouts.",
      image: "/images/newgen.png",
      tech: ["ReactJS", "Node.js", "Low-Code"],
    },
    {
      title: "Hospital BI Platform",
      description:
        "Real-time analytics solution to monitor operations and patient flow. Developed ETL pipelines and Power BI dashboards for multi-source hospital data. Enabled administrators to track revenue and optimize resource use, contributing to a published healthcare analytics paper.",
      image: "/images/scorg.png",
      tech: ["Power BI", "ETL", "Healthcare Analytics"],
    },
    {
      title: "Drone-Based Spatial Data Platform",
      description:
        "Geospatial intelligence platform for infrastructure mapping. Developed using AngularJS, Node.js, and MongoDB, integrating GIS logic to enhance location accuracy by 15%. Enabled visualization and automation of field-collected data for real-time operational planning.",
      image: "/images/drone.png",
      tech: ["AngularJS", "Node.js", "MongoDB", "GIS"],
    },
    {
      title: "APS Data Integration & Process Mining",
      description:
        "Enterprise analytics strategy for retail and supply chain optimization. Integrated APS systems and defined KPIs to streamline reporting and reduce latency by 17%. Collaborated across teams to align data architecture with business goals.",
      image: "/images/GDSC.png",
      tech: ["APS Systems", "Process Mining", "KPIs"],
    },
    {
      title: "Customer Segmentation and Targeting",
      description:
        "Clustering and persona creation for targeted outreach. Used Python, Pandas, and scikit-learn to segment customer datasets based on behavior and demographics. Created actionable profiles to optimize marketing strategies and improve engagement rates.",
      image: "/images/customer.png",
      tech: ["Python", "Pandas", "scikit-learn"],
    },
    {
      title: "Center Management Android App",
      description:
        "Mobile application to support administrative workflows. Built in Java with Firebase backend as part of a government training initiative. Simplified task tracking and communication for regional center management teams.",
      image: "/images/task.png",
      tech: ["Java", "Firebase", "Android"],
    },
  ];

  const scrollByAmount = 320 * 3; // 3 cards at a time

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="section-padding bg-[var(--portfolio-secondary)]"
    >
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text"> Featured </span> Projects
          </h2>
          <p className="text-xl text-[var(--portfolio-text-secondary)] max-w-3xl mx-auto">
            A collection of impactful, real-world projects across software
            engineering, data pipelines, and business intelligence.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 
            bg-[var(--portfolio-primary)] p-3 rounded-full shadow-md 
            hover:bg-[var(--portfolio-accent)] transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[var(--portfolio-primary)]/50 w-[300px] flex-shrink-0 rounded-2xl overflow-hidden border border-[var(--portfolio-secondary)] hover-lift group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const fallbackImages: any[] = [
                        /*...same fallback logic...*/
                      ];
                      e.currentTarget.src =
                        fallbackImages[index] || fallbackImages[0];
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-primary)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[var(--portfolio-accent)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--portfolio-text-secondary)] mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)] px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="flex items-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-primary)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-text-primary)] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 
            bg-[var(--portfolio-primary)] p-3 rounded-full shadow-md 
            hover:bg-[var(--portfolio-accent)] transition-colors duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Dharma-aaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-bg text-[var(--portfolio-text-primary)] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
