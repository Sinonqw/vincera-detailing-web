"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  { 
    id: 1, 
    title: "Відновлювальне полірування", 
    before: "/images/before-after/car-1-before.png", 
    after: "/images/before-after/car-1-after.png" 
  },
  { 
    id: 2, 
    title: "Детейлінг хімчистка", 
    before: "/images/before-after/car-2-before.png", 
    after: "/images/before-after/car-2-after.png" 
  },
];

const BeforeAfter = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Результати роботи
          </h2>
          <h3 className="text-3xl md:text-5xl font-display uppercase">
            До та Після <span className="text-primary">Vincera</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;