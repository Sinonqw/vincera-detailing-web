"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCalculatorStore } from "@/store/useCalculatorStore"; 
import { carTypes, services } from "./data";
import ProgressBar from "./ProgressBar";
import StepVehicle from "./steps/StepVehicle";
import StepServices from "./steps/StepServices";
import StepContact from "./steps/StepContact";

const Calculator = () => {
  const { step, formData } = useCalculatorStore();

  // Логіка розрахунку 
  const calculateTotal = () => {
    const selectedCar = carTypes.find((c) => c.id === formData.carType);
    const multiplier = selectedCar ? selectedCar.price : 1;
    const servicesPrice = services
      .filter((s) => formData.services.includes(s.id))
      .reduce((sum, s) => sum + s.basePrice, 0);
    return Math.round(servicesPrice * multiplier);
  };

  return (
    <section id="calculator" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Онлайн-розрахунок
          </h2>
          <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter">
            Дізнайтеся вартість <br />
            <span className="text-primary">за 60 секунд</span>
          </h3>
        </motion.div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <ProgressBar step={step} totalSteps={3} />

          <AnimatePresence mode="wait">
            {step === 1 && <StepVehicle key="step1" />}
            {step === 2 && <StepServices key="step2" />}
            {step === 3 && (
              <StepContact 
                key="step3" 
                total={calculateTotal()} 
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Calculator;