import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap, Layers, ShieldCheck, CheckSquare, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Component Design",
    description: "Designing reusable, accessible component libraries using React and TypeScript",
  },
  {
    icon: Layers,
    title: "UI Architecture",
    description: "Building scalable UI systems and patterns for long-lived products",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Improving bundle size, rendering performance and perceived load times",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility",
    description: "Implementing WCAG-friendly interfaces and semantic markup",
  },
  {
    icon: CheckSquare,
    title: "Testing & CI",
    description: "Unit/integration tests and CI workflows to catch regressions early",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Pairing with product and backend teams to ship customer-facing features",
  },
  {
    icon: Server,
    title: "Tooling & DevOps",
    description: "Improving developer experience with linting, bundling and CI automation",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Evaluating new libraries and patterns to keep stacks modern and efficient",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-8 md:py-12 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-6"
            >
              About Me
            </motion.span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Summary</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg md:text-xl">
              <p>
                I am a Frontend Web Developer with 6+ years of hands-on experience building
                polished, accessible, and high-performance web applications. I focus on JavaScript,
                React, Redux, Next.js Node.js and TypeScript to deliver scalable UI systems and intuitive
                user experiences.
              </p>
              <p>
                I design and implement component-driven architectures, optimize rendering
                and load performance, and collaborate closely with product and backend
                teams to ship customer-facing features. I prioritize maintainable code,
                automated testing, and accessibility.
              </p>
              <p>
                I have led feature development across multiple projects, mentored junior
                engineers, and helped improve developer workflows and CI pipelines to
                accelerate delivery while maintaining quality.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="text-center">
                <div className="font-display text-3xl font-bold gradient-text">6+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold gradient-text">5+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl font-bold gradient-text">MS</div>
                <div className="text-xs text-muted-foreground">Degree</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl glass glow-sm group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
