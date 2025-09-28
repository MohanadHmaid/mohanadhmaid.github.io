import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Database,
  Palette,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "api" | "design";
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
    image: "/Portfolio/assets/ecommerce_platform.jpg",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://https://github.com/MohanadHmaid",
    category: "web",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team features, and analytics dashboard.",
    image: "/Portfolio/assets/task_management_app.jpg",
    techStack: ["Next.js", "TypeScript", "Prisma", "Socket.io", "React Query"],
    liveUrl: "https://example.com",
    githubUrl: "https://https://github.com/MohanadHmaid",
    category: "web",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
    image: "/Portfolio/assets/mobile_banking_app.jpg",
    techStack: ["React Native", "Redux", "Firebase", "Node.js"],
    liveUrl: "https://play.google.com",
    githubUrl: "https://https://github.com/MohanadHmaid",
    category: "mobile",
  },
  {
    id: 4,
    title: "API Gateway Service",
    description:
      "Microservices API gateway with authentication, rate limiting, and monitoring capabilities.",
    image: "/Portfolio/assets/api_gateway_service.jpg",
    techStack: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
    githubUrl: "https://https://github.com/MohanadHmaid",
    category: "api",
  },
  {
    id: 5,
    title: "Design System",
    description:
      "Comprehensive design system with reusable components, documentation, and design tokens.",
    image: "/assets/design_system.jpg",
    techStack: ["Storybook", "React", "Figma", "TypeScript"],
    liveUrl: "https://  example.com",
    githubUrl: "https://https://github.com/MohanadHmaid",
    category: "design",
  },
  {
    id: 6,
    title: "Real-time Chat Platform",
    description:
      "Modern chat application with rooms, file sharing, and video calls. Supports thousands of concurrent users.",
    image: "/Portfolio/assets/real_time_chat_platform.jpg",
    techStack: ["React", "Socket.io", "WebRTC", "MongoDB", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://https://github.com/MohanadHmaid",
    category: "web",
  },
];

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  api: Database,
  design: Palette,
};

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const getCategoryIcon = (category: Project["category"]) => {
    const Icon = categoryIcons[category];
    return <Icon className="w-4 h-4" />;
  };

  const getCategoryColor = (category: Project["category"]) => {
    const colors = {
      web: "bg-primary/10 text-primary border-primary/20",
      mobile: "bg-accent/10 text-accent border-accent/20",
      api: "bg-secondary/10 text-secondary border-secondary/20",
      design: "bg-primary/10 text-primary border-primary/20",
    };
    return colors[category];
  };

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div
                  className={`absolute top-4 left-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                    project.category,
                  )}`}
                >
                  {getCategoryIcon(project.category)}
                  {project.category}
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-accent text-white rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Overlay buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card text-foreground rounded-full shadow-lg hover:bg-muted transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://https://github.com/MohanadHmaid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
