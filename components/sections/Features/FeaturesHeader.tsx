"use client";
import { motion } from "framer-motion";

const FeaturesHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center md:text-left"
    >
      <h2 className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
        Чому обирають нас
      </h2>
      <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter max-w-2xl">
        Технології захисту <br /> та естетики вашого авто
      </h3>
    </motion.div>
  );
};

export default FeaturesHeader;