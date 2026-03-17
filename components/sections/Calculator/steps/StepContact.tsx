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
        totalPrice={total}
        onSuccess={() => setIsDone(true)}
      />
      <button onClick={prevStep}>Назад</button>
    </div>
  );
};
export default StepContact;
