"use client";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden border border-border grayscale invert brightness-90 contrast-125"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.1234!2d37.6!3d55.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU0JzMwLjAiTiAzN8KwMzYnMDAuMCJF!5e0!3m2!1sru!2sru!4v123456789"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Vincera Location"
      />
    </motion.div>
  );
};

export default Map;