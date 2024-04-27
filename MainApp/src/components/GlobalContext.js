import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

  const updateFormData = (newData) => {
    setFormData(newData);
  };

  return (
    <GlobalContext.Provider value={{ formData, updateFormData }}>
      {children}
    </GlobalContext.Provider>
  );
};
