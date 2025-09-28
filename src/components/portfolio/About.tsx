import { Download, User, MapPin, Calendar } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export function About() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const handleDownloadResume = () => {
    // Create a sample PDF download
    fetch("/assets/resume.pdf")
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Mohanad_Hmaid_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error("Error downloading resume:", error);
      window.location.href = "/assets/resume.pdf";
    });
  };

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar and info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Portfolio/assets/About_Avatar.jpg"
                  alt="Mohanad Hmaid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <User className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Gaza - Palestine</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Available for new opportunities</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="mt-6 flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right side - Bio and details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Hello! I'm Mohanad, a passionate full-stack developer with a
                love for creating innovative digital solutions. I specialize in
                building scalable web applications using modern technologies and
                best practices.
              </p>

              <p className="text-lg leading-relaxed">
                With a strong foundation in both frontend and backend
                development, I enjoy tackling complex problems and turning ideas
                into reality. My goal is to create user-centric applications
                that not only look great but also provide exceptional user
                experiences.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <h3 className="text-2xl font-bold text-primary mb-1">5+</h3>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <h3 className="text-2xl font-bold text-primary mb-1">50+</h3>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <h3 className="text-2xl font-bold text-primary mb-1">20+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <h3 className="text-2xl font-bold text-primary mb-1">24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
