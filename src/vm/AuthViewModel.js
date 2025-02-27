import { userAuthStore } from "../store/userAuthStore";

export const AuthViewModel = () => {
  const { initialData, setInitialData, selectedMethod, setSelectedMethod, setBusinessData } = userAuthStore();

  const selectAuthMethod = (method) => {
    setSelectedMethod(method)
  };

  return { 
    selectedMethod, 
    setInitialData, 
    setBusinessData, 
    initialData,
    selectAuthMethod
  };
};