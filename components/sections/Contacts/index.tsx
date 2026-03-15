"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import ContactCard from "./ContactCard";
import Map from "./Map";

const contactData = [
  { 
    icon: MapPin, 
    title: "Адреса", 
    detail: "м. Варшава, вул. Автомобільна, 10", // Адаптовано під поточне розташування
    action: "Відкрити в навігаторі", 
    link: "https://google.com/maps" 
  },
  { 
    icon: Phone, 
    title: "Телефон", 
    detail: "+48 123 456 789", 
    action: "Зателефонувати", 
    link: "tel:+48123456789" 
  },
  { 
    icon: MessageSquare, 
    title: "WhatsApp / Telegram", 
    detail: "Пишіть нам у месенджери", 
    action: "Написати", 
    link: "https://t.me/your_bot" 
  },
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">На зв'язку 24/7</h2>
              <h3 className="text-4xl md:text-5xl font-display uppercase mb-6">Чекаємо на вас у <span className="text-primary">Vincera</span></h3>
              <p className="text-muted max-w-md">Приїжджайте на безкоштовний огляд та консультацію. Ми підберемо ідеальний комплекс захисту для вашого авто.</p>
            </motion.div>

            <div className="grid gap-6">
              {contactData.map((contact, i) => (
                <ContactCard key={i} index={i} {...contact} />
              ))}
            </div>
          </div>

          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contacts;