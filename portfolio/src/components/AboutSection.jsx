import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import cvFile from "../assets/files/MAHESH_RESUME.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side (Text) */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold">
              Application Developer @ Infosys
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m a frontend-focused developer with 3+ years of experience,
              currently working as an Application Developer at Infosys,
              Bengaluru. I specialize in building{" "}
              <strong>
                scalable, responsive, and performant web applications
              </strong>{" "}
              using React, Redux, Node.js, and modern UI libraries.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My experience spans across developing SPA dashboards, integrating
              50+ REST APIs, optimizing performance with caching & lazy loading,
              and delivering projects like{" "}
              <strong>Netflix and Spotify clones</strong>. I thrive on solving
              complex problems with clean, reusable code and creating
              user-friendly digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="cosmic-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href={cvFile}
                download="MAHESH_RESUME.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side (Cards) */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Expertise in React, Redux, Node.js, Express, and REST APIs to build scalable applications.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX",
                desc: "Building responsive, consistent, and user-friendly interfaces with Tailwind CSS & Material-UI.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Collaboration",
                desc: "Worked with cross-functional teams of 10+ engineers, delivering secure and performant microservices with agile practices.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="gradient-border p-6 card-hover rounded-xl shadow-lg bg-neutral-900/40 backdrop-blur-sm border border-white/10 hover:shadow-primary/20 transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
