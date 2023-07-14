import { ReactNode, createContext, useState } from "react";

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext<IModalContextType | null>(null);

export interface IModalConfig {
    title: JSX.Element;
    description: JSX.Element;
    applyButtonText: string;
    cancelButtonText: string;
    onApply: () => void;
    onCancel: () => void;
}

export interface IModalContextType {
    modalIsOpen: boolean;
    setModalIsOpen: (isOpen: boolean) => void;
    modalConfig: IModalConfig;
    setModalConfig: (config: IModalConfig) => void;
}

const defaultModalConfig: IModalConfig = {
    title: <></>,
    description: <></>,
    applyButtonText: 'Да',
    cancelButtonText: 'Нет',
    onApply: () => {},
    onCancel: () => {},
};

export const ModalProvider = ({children}: ModalProviderProps): JSX.Element => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalConfig, setModalConfig] = useState<IModalConfig>(defaultModalConfig);
    
    const value: IModalContextType = {
        modalIsOpen,
        setModalIsOpen,
        modalConfig,
        setModalConfig,
    };

    return <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
}