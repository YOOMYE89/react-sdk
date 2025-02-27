import { create } from "zustand";

export const userAuthStore = create((set) => ({
  initialData: null,
  selectedMethod: '',
  businessData: {
    name: '',
    encUniqueNubmer: '',
    phoneNumber: ''
  },
  setInitialData: (data) => set({ initialData: data }),
  setSelectedMethod: (method) => set({ selectedMethod: method }),
  setBusinessData: (data) =>
    set((state) => ({
      businessData: { ...state.businessData, ...data }, // CAS 연산
    })),
}));