"use client";
import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

const AIChatButton = () => {
  const telegramBotLink = "https://t.me/study_buddy_ua_bot";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={telegramBotLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 border border-white/10 overflow-hidden"
      >
        {/* Анімація "дихання" фону */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-white/20 blur-xl"
        />

        <Bot size={32} className="text-white relative z-10" />

        {/* Іскорки */}
        <motion.div
          animate={{
            opacity: [0, 1, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute top-3 right-3 text-white/80"
        >
          <Sparkles size={12} />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default AIChatButton;