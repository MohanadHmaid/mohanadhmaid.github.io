import { useState, useEffect } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

export function Header() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const isMobile = useIsMobile();

  const { displayText: nameText, isComplete: nameComplete } =
    useTypingAnimation({
      text: "Mohanad Hmaid",
      speed: 100,
      delay: 500,
    });

  const { displayText: titleText } = useTypingAnimation({
    text: "Full Stack Developer",
    speed: 80,
    delay: nameComplete ? 800 : 0,
  });

  useEffect(() => {
    if (nameComplete) {
      const timer = setTimeout(() => setShowSubtitle(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [nameComplete]);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isMobile ? 'pt-20' : ''
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                  {nameText}
                  <span className="animate-pulse">|</span>
                </h1>

                {showSubtitle && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mt-4">
                      {titleText}
                      <span className="animate-pulse">|</span>
                    </h2>
                  </motion.div>
                )}
              </div>

              {showSubtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  Crafting exceptional digital experiences with modern
                  technologies. Passionate about creating scalable, user-centric
                  applications.
                </motion.p>
              )}

              {showSubtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById("projects");
                      if (element) {
                        const navbarHeight = 80;
                        const elementPosition = element.offsetTop - navbarHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth"
                        });
                      }
                    }}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        const navbarHeight = 80;
                        const elementPosition = element.offsetTop - navbarHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth"
                        });
                      }
                    }}
                    className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Contact Me
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right side - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/Portfolio/assets/Main_Avatar.png"
                    alt="Mohanad Hmaid"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  💻 Frontend
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                >
                  🚀 Backend
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}