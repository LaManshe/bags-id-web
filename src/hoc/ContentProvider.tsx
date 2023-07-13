import { ReactNode, createContext, useState } from "react";
import { useMatch } from "react-router-dom";
import { ROUTES } from "../types/routes";

export interface IContentContextType {
    contentAreaIsOpen: boolean;
    setContentAreaIsOpen: (isOpen: boolean) => void;
    modalBackIsOpen: boolean;
    setModalBackIsOpen: (isOpen: boolean) => void;
    modalConfig: IModalConfig;
    setModalConfig: (config: IModalConfig) => void;
}

export const ContentContext = createContext<IContentContextType | null>(null);

interface ContentProviderProps {
    children: ReactNode;
}

export interface IModalConfig {
    title: JSX.Element;
    description: JSX.Element;
    applyButtonText: string;
    cancelButtonText: string;
    onApply: () => void;
    onCancel: () => void;
}

const defaultModalConfig: IModalConfig = {
    title: <></>,
    description: <></>,
    applyButtonText: 'Да',
    cancelButtonText: 'Нет',
    onApply: () => {},
    onCancel: () => {},
};

export const ContentProvider = ({children}: ContentProviderProps): JSX.Element => {
    const [contentAreaIsOpen, setContentAreaIsOpen] = useState<boolean>(useMatch(ROUTES.HOME_PAGE) ? false : true);
    const [modalBackIsOpen, setModalBackIsOpen] = useState<boolean>(false);
    const [modalConfig, setModalConfig] = useState<IModalConfig>(defaultModalConfig);

    const value: IContentContextType = {
        contentAreaIsOpen,
        setContentAreaIsOpen,
        modalBackIsOpen,
        setModalBackIsOpen,
        modalConfig,
        setModalConfig,
      };

    return <ContentContext.Provider value={value}>
        {children}
    </ContentContext.Provider>
}