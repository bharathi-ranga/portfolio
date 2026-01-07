import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in cross-functional Agile teams",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying current with modern web technologies",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Software Engineer with <strong className="text-foreground">6+ years of experience</strong> designing 
                and developing responsive, scalable, and high-performance web applications.
              </p>
              <p>
                Expert in <strong className="text-foreground">React.js, Next.js, Redux, JavaScript/TypeScript, and Node.js</strong>, 
                with hands-on experience building client-facing features, integrating APIs, and 
                optimizing user interfaces for performance and accessibility.
              </p>
              <p>
                Proven ability to work in cross-functional Agile teams, mentor junior developers, 
                implement test-driven development, and contribute to infrastructure improvements. 
                Passionate about delivering high-quality digital experiences that have measurable business impact.
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
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl glass glow-sm group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
