import { Car, Truck, ShieldCheck, Zap, Waves } from "lucide-react";
import { IVehicleType, IService } from "@/types/calculator";

export const carTypes: IVehicleType[] = [
  { id: "sedan", label: "Седан", icon: Car, price: 1.0 },
  { id: "suv", label: "Кросовер", icon: Truck, price: 1.2 },
  { id: "premium", label: "Позашляховик / Бізнес", icon: ShieldCheck, price: 1.5 },
];

export const services: IService[] = [
  { id: "polish", label: "Полірування", icon: Zap, basePrice: 15000 },
  { id: "ceramic", label: "Кераміка 2 шари", icon: ShieldCheck, basePrice: 25000 },
  { id: "interior", label: "Хімчистка салону", icon: Waves, basePrice: 10000 },
];