import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Application Developer @ Infosys
            </h3>

            <p className="text-muted-foreground">
              I’m a frontend-focused developer with 3+ years of experience,
              currently working as an Application Developer at Infosys,
              Bengaluru. I specialize in building{" "}
              <strong>
                scalable, responsive, and performant web applications
              </strong>{" "}
              using React, Redux, Node.js, and modern UI libraries.
            </p>

            <p className="text-muted-foreground">
              My experience spans across developing SPA dashboards, integrating
              50+ REST APIs, optimizing performance with caching & lazy loading,
              and delivering projects like{" "}
              <strong>Netflix and Spotify clones</strong>. I thrive on solving
              complex problems with clean, reusable code and creating
              user-friendly digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Expertise in React, Redux, Node.js, Express, and REST APIs
                    to build scalable applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX</h4>
                  <p className="text-muted-foreground">
                    Building responsive, consistent, and user-friendly
                    interfaces with Tailwind CSS & Material-UI.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration</h4>
                  <p className="text-muted-foreground">
                    Worked with cross-functional teams of 10+ engineers,
                    delivering secure and performant microservices with agile
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
