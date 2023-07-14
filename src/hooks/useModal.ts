import { useContext } from "react";
import { IModalContextType, ModalContext } from "../hoc/ModalProvider";

export const useModal = (): IModalContextType => {
    const modalContext = useContext(ModalContext);

    if (!modalContext) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    
    return modalContext;
};