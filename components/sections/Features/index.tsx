"use client";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Zap, Gauge, Award } from "lucide-react";
import FeatureCard from "./FeatureCard";
import FeaturesHeader from "./FeaturesHeader";

const features = [
  {
    title: "Преміум склади",
    description: "Використовуємо тільки сертифіковану кераміку та поліуретан.",
    icon: ShieldCheck,
  },
  {
    title: "Розумний запис",
    description: "Наша система автоматизації бронює час за 1 хвилину.",
    icon: Zap,
  },
  {
    title: "Швидкість роботи",
    description:
      "Оптимізовані процеси дозволяють віддавати авто на 20% швидше.",
    icon: Gauge,
  },
  {
    title: "Гарантія якості",
    description: "Офіційна гарантія на всі види послуг до 3-х років.",
    icon: Award,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features = () => {
  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FeaturesHeader />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;