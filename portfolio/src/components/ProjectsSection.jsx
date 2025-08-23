import { ArrowRight, ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import netflix from "../assets/images/netflix.png";
import spotify from "../assets/images/spotify.png";
import uber from "../assets/images/uber.png";
import { motion } from "framer-motion";
import "./SnakeBorder.css";
const projects = [
  {
    id: 1,
    title: "RideWith Uber",
    description:
      "A full-featured Uber clone built using the MERN stack with real-time ride booking, driver-passenger matching, and live location tracking.",
    image: uber,
    tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/mahii0028/ridewithuber",
  },
  {
    id: 2,
    title: "Spotify Clone",
    description:
      "A Spotify-inspired music streaming app built with the MERN stack. Includes playlist creation, track management, seamless audio playback, and media storage on Cloudinary.",
    image: spotify,
    tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
    githubUrl: "https://github.com/mahii0028/spotify",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A Netflix clone with dynamic movie browsing, authentication, and video streaming built using React, Firebase, and TMDB API for fetching movie data.",
    image: netflix,
    tags: ["React", "Firebase", "TMDB API"],
    githubUrl: "https://github.com/mahii0028/my_netflix",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="snake-border group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl flex flex-col relative"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <LuGithub size={18} /> Code
                  </a>
                  <a
                    href={project.githubUrl.replace("github.com", "vercel.app")}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-amber-600 hover:underline"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mahii0028"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
