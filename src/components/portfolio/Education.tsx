import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Master's in Computer Science",
    school: "New Mexico State University",
    location: "Las Cruces, NM",
    period: "2024 - 2025",
    gpa: "3.8/4.00",
    type: "Graduate",
  },
  {
    degree: "B. Tech in Computer Science and Engineering",
    school: "Sree Vidyanikethan Engineering College",
    location: "Tirupati, India",
    period: "2014 - 2018",
    gpa: "7.89/10",
    type: "Undergraduate",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-6">
            Academic Background
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 w-full">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-xl glass glow-sm overflow-hidden group"
            >
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary">
                {edu.type}
              </span>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg md:text-xl mb-1 text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-foreground mb-3 text-sm md:text-base">
                    {edu.school}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary font-medium">
                      <Award className="w-4 h-4" />
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* section shadow removed per request */}

        {/* Additional info removed to avoid repeating About section */}
      </div>
    </section>
  );
};

export default Education;
