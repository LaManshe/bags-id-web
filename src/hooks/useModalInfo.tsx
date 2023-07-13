import { useNavigate } from "react-router-dom";
import { ROUTES } from "../types/routes";
import { useContent } from "./useContent";
import { IModalConfig } from "../hoc/ContentProvider";

interface IModalInfo {
    showModalInfo: () => void;
    forceCloseModalInfo: () => void;
}

export default function useModalInfo(): IModalInfo {
    const {setModalBackIsOpen, setModalConfig} = useContent();
    const navigate = useNavigate();

    const modalBackConfig: IModalConfig = {
        title: <>Распечатайте <br /> посадочный талон</>, 
        description: <>Перейдите на главный экран <br /> и выберите пункт <br /> «Распечатать посадочный».</>,
        applyButtonText: 'Перейти',
        cancelButtonText: 'Отменить',
        onApply: () => { 
          navigate(ROUTES.HOME_PAGE);
        },
        onCancel: () => { }
      }

    const showModalInfo = () => {
        setModalConfig(modalBackConfig);
        setModalBackIsOpen(true);
    }

    const forceCloseModalInfo = () => {
      setModalBackIsOpen(false);
    }

    return {showModalInfo, forceCloseModalInfo};
}