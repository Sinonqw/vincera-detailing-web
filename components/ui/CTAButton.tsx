"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

const CTAButton = ({ className, variant = "primary", text = "Записатися" }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Блокування скролу
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/*  Оверлей */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
          />

          {/* Контент модалки */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-card border border-border p-8 rounded-3xl shadow-2xl z-[10001]"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 text-muted hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6 text-white">
              <h3 className="text-2xl font-display uppercase tracking-wider mb-2">Запис на сервіс</h3>
              <p className="text-muted text-sm">Оберіть зручний спосіб зв'язку</p>
            </div>

            <ContactForm onSuccess={() => {}} setIsOpen={setIsOpen} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Button variant={variant} className={className} onClick={() => setIsOpen(true)}>
        {text}
      </Button>

      {/* Рендеримо модалку через портал у body */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
};

export default CTAButton;