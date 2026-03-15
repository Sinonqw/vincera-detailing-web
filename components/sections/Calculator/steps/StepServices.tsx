"use client";
import { motion } from "framer-motion";
import { services } from "../data";
import { Button } from "@/components/ui/Button";
import { useCalculatorStore } from "@/store/useCalculatorStore"; // Импорт стора

const StepServices = () => {
  
  const { formData, toggleService, nextStep, prevStep } = useCalculatorStore();
  const selectedServices = formData.services;

  return (
    <motion.div 
      key="step2" 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ x: -20, opacity: 0 }}
    >
      <h3 className="text-3xl font-display mb-8 uppercase text-white">
        Шаг 2: Виберіть послуги
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-4 ${
              selectedServices.includes(service.id) 
                ? "border-primary bg-primary/10" 
                : "border-border hover:border-primary/50 text-muted"
            }`}
          >
            <service.icon size={24} className="text-primary" />
            <span className="flex-1 font-bold uppercase text-sm">{service.label}</span>
            <span className="text-primary">від {service.basePrice}₽</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button 
          onClick={prevStep} 
          className="text-muted hover:text-white uppercase text-sm tracking-widest transition-colors"
        >
          Назад
        </button>
        <Button 
          onClick={nextStep} 
          disabled={selectedServices.length === 0}
        >
          Далі
        </Button>
      </div>
    </motion.div>
  );
};

export default StepServices;