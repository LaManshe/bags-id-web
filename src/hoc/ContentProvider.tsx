import { ReactNode, createContext, useState } from "react";
import { useMatch } from "react-router-dom";
import { ROUTES } from "../types/routes";

export interface IContentContextType {
    contentAreaIsOpen: boolean;
    setContentAreaIsOpen: (isOpen: boolean) => void;
}

export const ContentContext = createContext<IContentContextType | null>(null);

interface ContentProviderProps {
    children: ReactNode;
}

export const ContentProvider = ({children}: ContentProviderProps): JSX.Element => {
    const [contentAreaIsOpen, setContentAreaIsOpen] = useState<boolean>(useMatch(ROUTES.HOME_PAGE) ? false : true);

    const value: IContentContextType = {
        contentAreaIsOpen,
        setContentAreaIsOpen
      };

    return <ContentContext.Provider value={value}>
        {children}
    </ContentContext.Provider>
}