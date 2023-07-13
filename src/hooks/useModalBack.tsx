import { useNavigate } from "react-router-dom";
import { ROUTES } from "../types/routes";
import { useContent } from "./useContent";
import { IModalConfig } from "../hoc/ContentProvider";

interface IModalBackFunc {
    showModalBack: () => void;
    forceCloseModalBack: () => void;
}

export default function useModalBack(): IModalBackFunc {
    const {setModalBackIsOpen, setModalConfig} = useContent();
    const navigate = useNavigate();

    const modalBackConfig: IModalConfig = {
        title: <>Выйти на главный <br /> экран?</>, 
        description: <>Процесс сдачи багажа будет <br /> прерван. Вы перейдете на главный <br /> экран системы.</>,
        applyButtonText: 'Выйти',
        cancelButtonText: 'Отменить',
        onApply: () => { 
            navigate(ROUTES.HOME_PAGE);
        },
        onCancel: () => { }
    }

    const showModalBack = () => {
        setModalConfig(modalBackConfig);
        setModalBackIsOpen(true);
    }

    const forceCloseModalBack = () => {
        setModalBackIsOpen(false);
    }

    return {showModalBack, forceCloseModalBack};
}