"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  detail: string;
  action: string;
  link: string;
  index: number;
}

const ContactCard = ({ icon: Icon, title, detail, action, link, index }: ContactCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex items-center gap-6 p-6 bg-card border border-border rounded-2xl hover:border-primary transition-all"
    >
      <div className="p-4 bg-background rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-lg">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-xs uppercase tracking-widest text-muted mb-1">
          {title}
        </h4>
        <p className="font-bold text-lg mb-1">{detail}</p>
        <span className="text-xs text-primary font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
          {action} →
        </span>
      </div>
    </motion.a>
  );
};

export default ContactCard; 