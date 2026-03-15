"use client";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variants: Variants;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  variants,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.03,
        borderColor: "var(--primary)",
        boxShadow: "0px 10px 30px rgba(255, 107, 0, 0.15)",
      }}
      className="group relative bg-card border border-border p-8 rounded-2xl cursor-default overflow-hidden transition-colors duration-300"
    >
      {/* Декоративный засвет */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-6 inline-block p-4 rounded-xl bg-background text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
          <Icon size={32} strokeWidth={1.5} />
        </div>

        <h4 className="text-xl font-display uppercase mb-4 tracking-tight">
          {title}
        </h4>

        <p className="text-muted leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
