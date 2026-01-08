import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Publicis Sapient",
    client: "Goldman Sachs",
    role: "Interactive Web Developer",
    location: "Hyderabad, India",
    period: "January 2022 – December 2024",
    description: [
      "Developed and maintained responsive web applications using React.js, Next.js, and TypeScript for Goldman Sachs' internal platforms",
      "Built rich data-driven interfaces using Ag-Grid with large JSON datasets, sorting, filtering, and pagination features",
      "Led UI development, conducted code reviews, and mentored junior developers",
      "Implemented component-based architecture and reusable modules for improved maintainability",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Ag-Grid", "Redux"],
  },
  {
    company: "Infosys Limited",
    role: "Technology Lead",
    location: "Hyderabad, India",
    period: "July 2018 – December 2021",
    description: [
      "Led front-end development using React.js, Next.js, Redux, and Storyblok CMS for eCommerce workflows",
      "Built a real-time stock market application with dynamic charts using Chart.js and external API integrations",
      "Designed reusable, modular components and implemented advanced state management",
      "Optimized frontend performance and SEO using Next.js server-side rendering",
      "Collaborated with UI/UX teams to create pixel-perfect, responsive interfaces",
    ],
    technologies: ["React.js", "Next.js", "Redux", "Storyblok CMS", "Chart.js", "RESTful APIs"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-6">
            Work History
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row gap-6 mb-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 w-4 h-4 rounded-full bg-primary glow mt-8 z-10" />

              {/* Content Card */}
              <div className="flex-1 ml-12 md:ml-12">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl glass glow-sm"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl">{exp.role}</h3>
                      <p className="text-primary font-semibold text-base md:text-lg">
                        {exp.company}
                        {exp.client && <span className="text-muted-foreground"> • {exp.client}</span>}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm md:text-base text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-base md:text-base text-muted-foreground flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-sm font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
