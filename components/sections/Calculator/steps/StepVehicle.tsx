"use client";
import { useCalculatorStore } from "@/store/useCalculatorStore";
import { carTypes } from "../data";

const StepVehicle = () => {
  const { formData, setCarType } = useCalculatorStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {carTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => setCarType(type.id)}
          className={`p-6 rounded-2xl border-2 hover:bg-primary hover:bg-primary/10 hover:border-primary hover:cursor-pointer transition-all ${
            formData.carType === type.id
              ? "border-primary bg-primary/10"
              : "border-border"
          }`}
        >
          {/* Контент кнопки */}
          <span className="text-white ">{type.label}</span>
        </button>
      ))}
    </div>
  );
};
export default StepVehicle;
