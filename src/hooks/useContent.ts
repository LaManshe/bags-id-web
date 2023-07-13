import { useContext } from "react";
import { ContentContext, IContentContextType } from "../hoc/ContentProvider";

export const useContent = (): IContentContextType => {
    const contentContext = useContext(ContentContext);

    if (!contentContext) {
      throw new Error('useContent must be used within a ContentProvider');
    }
    
    return contentContext;
};