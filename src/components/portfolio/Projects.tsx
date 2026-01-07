import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, TrendingUp, ShoppingCart, Wallet, BarChart3, Layout } from "lucide-react";

const projects = [
  {
    title: "Stock Market Visualization Tool",
    description: "Real-time stock market application with dynamic charts and live data integration. Features responsive layouts and seamless cross-device functionality.",
    icon: TrendingUp,
    technologies: ["React.js", "JavaScript", "Chart.js", "RESTful APIs", "CSS3"],
    highlights: ["Real-time data updates", "Dynamic charting", "Responsive design"],
    type: "Professional",
  },
  {
    title: "Product Selling Application",
    description: "Full-featured eCommerce platform with dynamic content management, real-time inventory updates, and pixel-perfect responsive interfaces.",
    icon: ShoppingCart,
    technologies: ["React.js", "Next.js", "Redux", "Storyblok CMS", "RESTful APIs"],
    highlights: ["CMS integration", "State management", "SEO optimized"],
    type: "Professional",
  },
  {
    title: "Expense Tracker Application",
    description: "Full-stack expense tracking solution with responsive dashboards, dynamic charts, and comprehensive data management.",
    icon: Wallet,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Full-stack", "Data visualization", "CRUD operations"],
    type: "Personal",
  },
  {
    title: "GraphQL Data Dashboard",
    description: "React interface integrating GraphQL APIs for optimized data fetching, filtering, and real-time visualization.",
    icon: BarChart3,
    technologies: ["React.js", "GraphQL", "TypeScript", "CSS3"],
    highlights: ["GraphQL integration", "Optimized queries", "Data visualization"],
    type: "Personal",
  },
  {
    title: "Next.js SPA Portfolio",
    description: "Server-side rendered portfolio with REST API integration, SEO best practices, and responsive design throughout.",
    icon: Layout,
    technologies: ["Next.js", "TypeScript", "RESTful APIs", "CSS3"],
    highlights: ["SSR/SSG", "SEO optimized", "Performance focused"],
    type: "Personal",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-6">
            Featured Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-xl glass glow-sm overflow-hidden"
            >
              {/* Type Badge */}
              <span className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-mono ${
                project.type === "Professional" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-accent/20 text-accent"
              }`}>
                {project.type}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs text-muted-foreground"
                  >
                    • {highlight}
                  </span>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-muted text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
