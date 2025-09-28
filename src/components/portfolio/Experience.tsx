import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    organization: "Nilesoft Shell",
    location: "Egypt (Remote)",
    period: "2023 - Present",
    description:
      "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies.",
    achievements: [
      "Architected and built scalable microservices handling 1M+ requests daily",
      "Led a team of 5 developers in agile development practices",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Pal Technology Web Services",
    organizationUrl: "https://paltech.ps/",
    location: "Palestine",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects using modern web technologies and best practices.",
    achievements: [
      "Built responsive web applications for 15+ clients",
      "Improved application performance by 40% through optimization",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "Islamic University of Gaza",
    location: "Palestine",
    period: "2018 - 2022",
    description:
      "Focused on software engineering, algorithms, and data structures with a strong foundation in computer science principles.",
    achievements: [
      "Graduated with Honors (3.8/4.0 GPA)",
      "Led the university's programming club",
      "Completed capstone project on machine learning applications",
    ],
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Gaza Sky Geeks",
    location: "Palestine",
    period: "2021 - 2021",
    description:
      "Gained hands-on experience in modern frontend development and collaborated with senior developers.",
    achievements: [
      "Developed user interfaces for mobile and web applications",
      "Learned industry best practices and coding standards",
      "Contributed to open-source projects",
    ],
  },
];

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                        item.type === "work"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-white"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Briefcase className="w-6 h-6" />
                      ) : (
                        <GraduationCap className="w-6 h-6" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-primary">
                          {item.organizationUrl ? (
                            <a
                              href={item.organizationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {item.organization}
                            </a>
                          ) : (
                            item.organization
                          )}
                        </h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {item.achievements && (
                        <div className="pt-2">
                          <h5 className="text-sm font-semibold mb-2">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
