"use client";
import { useState } from "react";
import { useCalculatorStore } from "@/store/useCalculatorStore";
import { ContactForm } from "@/components/ui/ContactForm";

const StepContact = ({ total }: { total: number }) => {
  const { formData, setContactInfo, prevStep } = useCalculatorStore();
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <ContactForm 
        externalData={formData} 
        buttonText={`Замовити за ${total} грн`}
        onUpdate={(data) => setContactInfo(data)} 
        onSuccess={() => setIsDone(true)}        
      />
      <button onClick={prevStep}>Назад</button>
    </div>
  );
};
export default StepContact