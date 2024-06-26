import useSocketConnection from "@/hooks/NetworkSettings";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
} from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// Define the context type
interface ModalContextType {
  confirmAnicationModal: boolean;
  setConfirmAnicationModal: React.Dispatch<React.SetStateAction<boolean>>;
  listAnItemModal: boolean;
  setListAnItemModal: React.Dispatch<React.SetStateAction<boolean>>;
  productModalVisible: boolean;
  setProductModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  filterProduct: boolean;
  setFilterProduct: React.Dispatch<React.SetStateAction<boolean>>;
  filterSheetRef: any;
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
  const [listAnItemModal, setListAnItemModal] = useState(true);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [filterProduct, setFilterProduct] = useState(false);
  const filterSheetRef = useRef<BottomSheet>(null);


  useSocketConnection();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (confirmAnicationModal) {
      timeoutId = setTimeout(() => {
        setConfirmAnicationModal(false);
      }, 1900);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [confirmAnicationModal]);

  const value = {
    confirmAnicationModal,
    setConfirmAnicationModal,
    listAnItemModal,
    setListAnItemModal,
    productModalVisible,
    setProductModalVisible,
    filterProduct,
    setFilterProduct,
    filterSheetRef
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
