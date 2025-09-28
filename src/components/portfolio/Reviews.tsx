import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    image: "/Portfolio/assets/Sarah_pic.png",
    testimonial:
      "Mohanad delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "CEO",
    company: "Digital Solutions",
    image: "/Portfolio/assets/Ahmed_pic.png",
    testimonial:
      "Working with Mohanad was a game-changer for our startup. He transformed our vision into a beautiful, functional web application that our users love. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "CTO",
    company: "Innovation Labs",
    image: "/Portfolio/assets/Emily_pic.png",
    testimonial:
      "Mohanad's full-stack skills are impressive. He seamlessly handled both frontend and backend development, delivering a robust and scalable solution that continues to serve us well.",
    rating: 5,
  },
];

export function Reviews() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{review.testimonial}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.role} at {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their
              ideas into successful digital products.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
