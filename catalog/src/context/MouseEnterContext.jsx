"use client";
import { createContext, useContext, useState, useMemo } from "react";

// Crear el contexto
const MouseEnterContext = createContext({
  isMouseEntered: false,
  setIsMouseEntered: () => {},
});

// Proveedor del contexto
export const MouseEnterProvider = ({ children }) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const contextValue = useMemo(
    () => ({ isMouseEntered, setIsMouseEntered }),
    [isMouseEntered]
  );

  return (
    <MouseEnterContext.Provider value={contextValue}>
      {children}
    </MouseEnterContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error(
      "useMouseEnter debe ser usado dentro de un proveedor de MouseEnterContext"
    );
  }
  return context;
};
