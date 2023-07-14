import { useNavigate } from "react-router-dom";
import { ROUTES } from "../types/routes";
import { useCallback, useMemo } from "react";
import { useModal } from "./useModal";
import { IModalConfig } from "../hoc/ModalProvider";

interface IModalInfo {
    showModalInfo: () => void;
    forceCloseModalInfo: () => void;
}

export default function useModalInfo(): IModalInfo {
    const {setModalIsOpen, setModalConfig} = useModal();
    const navigate = useNavigate();

    const modalBackConfig: IModalConfig = useMemo(() => {
      return {
        title: <>Распечатайте <br /> посадочный талон</>, 
        description: <>Перейдите на главный экран <br /> и выберите пункт <br /> «Распечатать посадочный».</>,
        applyButtonText: 'Перейти',
        cancelButtonText: 'Отменить',
        onApply: () => { 
          navigate(ROUTES.HOME_PAGE);
        },
        onCancel: () => { }
      };
    }, []);
      

    const showModalInfo = useCallback(() => {
      setModalConfig(modalBackConfig);
      setModalIsOpen(true);
    }, [modalBackConfig]);

    const forceCloseModalInfo = useCallback(() => {
      setModalIsOpen(false);
    }, [modalBackConfig]);

    return {showModalInfo, forceCloseModalInfo};
}