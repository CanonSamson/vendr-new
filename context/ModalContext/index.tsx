import useSocketConnection from "@/hooks/NetworkSettings";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the context type
interface ModalContextType {
  confirmAnicationModal: boolean;
  setConfirmAnicationModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with an undefined initial value
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Custom hook to use the ModalContext
export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

// Define the provider's props type
interface ModalProviderProps {
  children: ReactNode;
}

// ModalProvider component
export function ModalProvider({ children }: ModalProviderProps) {
  const [confirmAnicationModal, setConfirmAnicationModal] = useState(true);

  useSocketConnection();

  useEffect(() => {
    if (confirmAnicationModal) {
      setTimeout(() => {
        setConfirmAnicationModal(false);
      }, 1900);
    }
  }, [confirmAnicationModal]);

  const value = {
    confirmAnicationModal,
    setConfirmAnicationModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
