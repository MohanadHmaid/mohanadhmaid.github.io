import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface skill {
  name: string;
  level: number;
  color: string;
}

const skills: skill[] = [
  {
    name: "Frontend Development",
    level: 95,
    color: "from-primary to-accent",
  },
  {
    name: "Backend Development",
    level: 90,
    color: "from-accent to-secondary",
  },
  {
    name: "Database Design",
    level: 85,
    color: "from-secondary to-primary",
  },
  { name: "DevOps & Cloud", level: 80, color: "from-primary to-secondary" },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GraphQL",
  "Redux",
  "Tailwind CSS",
];

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevels(skills.map((skill) => skill.level));
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {animatedLevels[index]}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: inView ? `${animatedLevels[index]}%` : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut",
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right side - Skills description and tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Expertise in Modern Technologies
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack development with a focus on creating
                scalable, performant, and user-friendly applications. My
                expertise spans across frontend frameworks, backend
                architectures, and cloud technologies.
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">
                  Technologies I work with:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
