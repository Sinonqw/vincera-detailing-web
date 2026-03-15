import { create } from 'zustand';

// Типізація нашого стану
interface CalculatorState {
  step: number;
  formData: {
    name: string;
    phone: string;
    tg: string;
    carType: string;
    services: string[];
    source: string;
  };
  // Дії 
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setCarType: (id: string) => void;
  toggleService: (id: string) => void;
  setContactInfo: (info: Partial<CalculatorState['formData']>) => void;
  reset: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  step: 1,
  formData: {
    name: '',
    phone: '',
    tg: '',
    carType: '',
    services: [],
    source: 'Calculator',
  },

  setStep: (step) => set({ step }),
  
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  setCarType: (id) => set((state) => ({
    formData: { ...state.formData, carType: id },
    step: 2 
  })),

  toggleService: (id) => set((state) => {
    const isSelected = state.formData.services.includes(id);
    const newServices = isSelected
      ? state.formData.services.filter((s) => s !== id)
      : [...state.formData.services, id];
    return { formData: { ...state.formData, services: newServices } };
  }),

  setContactInfo: (info) => set((state) => ({
    formData: { ...state.formData, ...info }
  })),

  reset: () => set({ step: 1, formData: { name: '', phone: '', tg: '', carType: '', services: [], source: 'Calculator' } }),
}));