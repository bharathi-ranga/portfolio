import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  technologies: string[];
  type: "Professional" | "Personal";
  company?: string;
  duration?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);

  const interactive = project.type === "Personal";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onMouseEnter={() => project.type === "Professional" && setFlipped(true)}
      onMouseLeave={() => project.type === "Professional" && setFlipped(false)}
      className="group relative p-0 rounded-xl overflow-hidden min-h-[300px] md:min-h-[360px]"
        style={{ perspective: 1200 }}
    >
      

      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          style={{
            transition: "transform 0.7s",
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            height: "100%",
          }}
        >
          {/* Front */}
          <div style={{ backfaceVisibility: "hidden" }} className="absolute inset-0 p-6 rounded-xl glass overflow-hidden">
            <span
              className={`absolute right-4 px-2 py-1 rounded-full text-xs font-mono ${
                interactive ? "bottom-20" : "bottom-6"
              } ${project.type === "Professional" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}
              aria-hidden
            >
              {project.type}
            </span>
            <div className="flex flex-col h-full">
              {/* Icon and Title side-by-side */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-0 text-primary">{project.title}</h3>
              </div>

              {/* Company and duration below title */}
              {project.type === "Professional" && (
                <div className="mb-4 text-sm pl-3 md:pl-4">
                  {project.company && (
                    <div className="font-display text-base md:text-lg font-medium text-foreground">{project.company}</div>
                  )}
                  {project.duration && (
                    <div className="font-mono text-xs text-muted-foreground mt-1">{project.duration}</div>
                  )}
                </div>
              )}

              {/* Technologies with light shady border */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 p-3 rounded-md border border-muted/20 shadow-sm bg-muted/5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-transparent text-teal-600 dark:text-teal-400 text-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto" />
            </div>
          </div>

          {/* Back */}
          <div
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
            className="absolute inset-0 p-8 rounded-xl glass overflow-auto"
          >
            <h3 className="font-display font-bold text-2xl mb-4 text-primary">{project.title}</h3>
            <div className="whitespace-pre-line text-base leading-7 text-muted-foreground space-y-3">{project.description}</div>
          </div>
        </div>
      </div>

      {interactive && (
        <div className="absolute left-6 right-6 bottom-6">
          <div className="flex gap-3 pt-4 border-t border-border">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </div>
        </div>
      )}

      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      </div>
    </motion.div>
  );
}
