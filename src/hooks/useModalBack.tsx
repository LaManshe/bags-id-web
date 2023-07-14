import { useNavigate } from "react-router-dom";
import { ROUTES } from "../types/routes";
import { useCallback, useMemo } from "react";
import { useModal } from "./useModal";
import { IModalConfig } from "../hoc/ModalProvider";

interface IModalBackFunc {
    showModalBack: () => void;
    forceCloseModalBack: () => void;
}

export default function useModalBack(): IModalBackFunc {
    const {setModalIsOpen, setModalConfig} = useModal();
    const navigate = useNavigate();

    const modalBackConfig: IModalConfig = useMemo(() => {
        return {
            title: <>Выйти на главный <br /> экран?</>, 
            description: <>Процесс сдачи багажа будет <br /> прерван. Вы перейдете на главный <br /> экран системы.</>,
            applyButtonText: 'Выйти',
            cancelButtonText: 'Отменить',
            onApply: () => { 
                navigate(ROUTES.HOME_PAGE);
            },
            onCancel: () => { }
        }
    }, []);

    const showModalBack = useCallback(() => {
        setModalConfig(modalBackConfig);
        setModalIsOpen(true);
    }, [modalBackConfig]);

    const forceCloseModalBack = useCallback(() => {
        setModalIsOpen(false);
    }, [modalBackConfig]);

    return {showModalBack, forceCloseModalBack};
}