import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection System",
      date: "Nov 2025",
      domain: "AI/ML",
      tech: ["Python", "NLP", "Machine Learning"],
      description: "Uses AI/ML techniques to automatically distinguish between true and false news articles based on content and metadata. Analyzes text features, source credibility and engagement patterns to help users and platforms flag potentially misleading or fabricated news before it spreads widely.",
    },
    {
      title: "Secure File Sharing using Hash",
      date: "May 2025",
      domain: "Cyber Security",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      description: "Incorporating hashing in secure file sharing systems to provide high-level security, ensuring data protection from unauthorized modification and confirming the authenticity of the sender and file integrity.",
    },
    {
      title: "Leftover Food Management System",
      date: "Nov 2022",
      domain: "Front-End Development",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      description: "Efficiently manages and reduces food waste in hostel mess. Ensures proper handling, redistribution, or disposal of leftover food while reducing environmental impact and contributing to social good.",
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium">▸ My Projects</p>
          <h2 className="text-4xl font-bold">What I've Built</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-primary font-medium">{project.date}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="https://github.com/shriyanshitiwari22" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-primary mb-3">{project.domain}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx}
                    className="px-2 py-1 bg-background text-xs rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
