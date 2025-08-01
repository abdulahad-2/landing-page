"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

// Custom tech icon component
const TechIcon = ({ tech }: { tech: string }) => {
  const iconMap: { [key: string]: string } = {
    "Apache Derby": "apachederby.svg",
    CSS: "css.svg",
    Contentful: "contentful.svg",
    Docker: "docker.svg",
    FastAPI: "fastapi.svg",
    Flutter: "flutter.svg",
    FlutterFlow: "flutterflow.svg",
    GCP: "gcp.svg",
    Gemini: "gemini.svg",
    Java: "java.svg",
    JavaScript: "javascript.svg",
    "Next.js": "nextjsv2.svg",
    OpenAI: "openai.svg",
    Python: "python.svg",
    Rasa: "rasa.svg",
    React: "react.svg",
    ShadCN: "shadcn.svg",
    "Spring Boot": "springboot.svg",
    "Tailwind CSS": "tailwind.svg",
    "WebSockets": "websockets.svg",
    WordPress: "wordpress.svg",
    PHP: "php.svg",
    HTML: "html.svg",
    TypeScript: "ts.svg",
    Shopify: "shopify.svg",
    "Shadcn UI": "shadcn.svg",
  };

  const iconFileName = iconMap[tech];

  if (iconFileName) {
    return (
      <Image
        src={`/techstack/${iconFileName}`}
        alt={`${tech} icon`}
        width={16}
        height={16}
        className="h-4 w-4"
      />
    );
  }

  // Fallback to default code icon if custom icon not found
  return <Code className="h-4 w-4" />;
};

const projects = [
  {
    id: 1,
    title: "Custom Shopify Store",
    category: "Shopify Developer",
    description: "eCommerce",
    image: "/proj/projectOne.webp",
    technologies: ["React", "JavaScript", "HTML", "CSS", "TypeScript", "Shopify"],
    liveUrl: "https://by39tk-uv.myshopify.com/",
  },
  {
    id: 2,
    title: "GDSC PLM Website",
    category: "Web Developer",
    description: "Portfolio & Community",
    image: "/proj/projectTwo.webp",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://www.gdsc-plm.org/",
  },
  {
    id: 3,
    title: "GrievDesk",
    category: "Full Stack Developer",
    description: "Web Apps",
    image: "/proj/projectThree.webp",
    technologies: ["React", "CSS", "Spring Boot"],
    liveUrl: "https://plmce-grievdesk.web.app/",
  },
  {
    id: 4,
    title: "Conso Programming Language and Compiler",
    category: "Full Stack Developer",
    description: "Web Apps",
    image: "/proj/projectFour.webp",
    technologies: ["React", "CSS", "Python", "FastAPI", "WebSockets"],
    liveUrl: "https://conso-frontend-v2.onrender.com/",
  },
  {
    id: 5,
    title: "AceFrame",
    category: "Web Developer",
    description: "Web Apps",
    image: "/proj/projectFive.webp",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://aceframe.web.app/",
  },
  {
    id: 6,
    title: "KhanJee – Authentic Pakistani Cuisine & Catering in Montreal",
    category: "WordPress Developer",
    description: "eCommerce, WordPress",
    image: "/proj/projectSix.webp",
    technologies: ["JavaScript", "PHP", "HTML", "CSS", "WordPress"],
    liveUrl: "https://khanjeecanada.com/",
  },
  {
    id: 106,
    title: "GDSC PLM",
    category: "WordPress Developer",
    description: "Portfolio & Community",
    image: "/proj/projectTwo.webp",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    liveUrl: "https://www.gdsc-plm.org/",
  },
  {
    id: 107,
    title: "The Ikigai",
    category: "WordPress Developer",
    description: "WordPress",
    image: "/proj/ikigai.webp",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    liveUrl: "https://theikigai.co/",
  },
  {
    id: 108,
    title: "Jamachi Plastic Surgery",
    category: "WordPress Developer",
    description: "WordPress",
    image: "/proj/jamichi.webp",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    liveUrl: "https://jamachi.com.au/",
  },
  {
    id: 109,
    title: "EMS Innovations",
    category: "WordPress Developer",
    description: "WordPress",
    image: "/proj/ems.webp",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    liveUrl: "https://emsinnovations.com.au/",
  },
  {
    id: 101,
    title: "Dark‑Mode React Admin Dashboard",
    category: "Lead Front‑End Developer & DevOps Engineer",
    description: "Portfolio & Community",
    image: "/proj/reactdashboard.webp",
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://abdulahad-2.github.io/admin-dashboard/#/dashboard",
  },
  {
    id: 102,
    title: "Responsive Personal Branding Website Design & Development",
    category: "Lead Web Designer & Front‑End Developer",
    description: "WordPress, Portfolio & Community",
    image: "/proj/igor.webp",
    technologies: ["JavaScript", "CSS", "HTML", "WordPress", "PHP"],
    liveUrl: "https://igorvainshtein.com/",
  },
  {
    id: 103,
    title: "Responsive B2B Consulting Website Design & Development",
    category: "Lead Web Designer & Front‑End Developer",
    description: "WordPress",
    image: "/proj/priotize.webp",
    technologies: ["JavaScript", "CSS", "HTML", "WordPress", "PHP"],
    liveUrl: "https://priorityib.com.au/",
  },
  {
    id: 104,
    title: "Nonprofit Advocacy Website Design & Development",
    category: "Lead Web Designer & WordPress Developer",
    description: "WordPress",
    image: "/proj/australia.webp",
    technologies: ["JavaScript", "CSS", "HTML", "WordPress", "PHP"],
    liveUrl: "https://aidn.org.au/",
  },
  {
    id: 105,
    title: "The Mehfil – Modern Catering & Events Website",
    category: "Modern Catering & Events Website",
    description: "eCommerce, WordPress",
    image: "/proj/mehfil.webp",
    technologies: ["JavaScript", "CSS", "HTML", "WordPress", "PHP"],
    liveUrl: "https://themehfil.ca/",
  },
];

export function ProjectsSection() {
  const handleProjectClick = (liveUrl: string) => {
    if (liveUrl !== "#") {
      window.open(liveUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl hover-glow transition-all duration-300 overflow-hidden border-2 border-border hover:border-primary/20 scroll-animate project-card interactive-element"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project.liveUrl)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500} // or any appropriate number
                  height={300} // or any appropriate number
                  className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Cyan overlay with icon on hover */}
                <div className="project-overlay">
                  <ExternalLink className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                </div>

                {/* Removed the number display */}
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className="text-xs font-inconsolata"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-base sm:text-lg font-playfair group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-inconsolata">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="tech-icon-container interactive-element"
                    >
                      <div className="tech-icon">
                        <TechIcon tech={tech} />
                      </div>
                      <span className="tech-name font-inconsolata">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
