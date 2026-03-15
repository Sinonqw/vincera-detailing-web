"use client";
import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import SliderHandle from "./SliderHandle";

interface ProjectCardProps {
  title: string;
  before: string;
  after: string;
}

const ProjectCard = ({ title, before, after }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={before} alt="До" />}
          itemTwo={<ReactCompareSliderImage src={after} alt="Після" />}
          className="h-[300px] md:h-[450px]"
          style={{ width: "100%", cursor: "ew-resize" }}
          handle={<SliderHandle />}
        />

        {/* Бейджі */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full uppercase">
          До
        </div>
        <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full uppercase">
          Після
        </div>
      </div>

      <h4 className="mt-6 text-xl font-display uppercase tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h4>
    </motion.div>
  );
};

export default ProjectCard;