export interface ICalculatorData {
  carType: string;
  services: string[];
  name: string;
  phone: string;
}

export interface IService {
  id: string;
  label: string;
  icon: any;
  basePrice: number;
}

export interface IVehicleType {
  id: string;
  label: string;
  icon: any;
  price: number;
}