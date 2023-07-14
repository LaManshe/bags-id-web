import { FC, useEffect, useRef, useState } from 'react';
import styles from './TicketVerifyPage.module.scss';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import Spacer from '../../ui/Spacer/Spacer';
import { Spinner, Status, WaitForScan } from '../../resources/ResourcesService';
import { useNavigate } from 'react-router-dom';
import TicketService from '../../services/TicketService';
import { ITicketData } from '../../services/http/interfaces/ITicketData';
import { ROUTES } from '../../types/routes';
import useModalInfo from '../../hooks/useModalInfo';

const TicketVerifyPage: FC = () => {
  const [hasTicket, setHasTicket] = useState(false);
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const {showModalInfo, forceCloseModalInfo} = useModalInfo();

  useEffect(() => {
    getTicketCode();
    
    isMounted.current = true;

    return () => { 
      isMounted.current = false
    }
  }, []);

  const getTicketCode = async () => {
    const code: string | null = await TicketService.GetTicketCode(1);
    
    if (code) {
      setHasTicket(true);

      await getTicketData(code);
    }
  }

  async function getTicketData(code: string) {
    forceCloseModalInfo();

    const data: ITicketData | null = await TicketService.GetTicketData(code);

    if (data) {
      if (isMounted.current) {
        navigate(ROUTES.TICKET_CONFIRMATION_PAGE, { state: data });
      }
    }
  }

  const noPassHandle = () => {
    showModalInfo();
  }

  return (
    <div className={styles.TicketVerifyPage}>
      <div className={styles.StatusImage}>
        <img src={WaitForScan} className={styles.StatusBG}/>
        {hasTicket && <img src={Status} className={styles.StatusOkImage}/>}
      </div>
      <div className={styles.Title}>
        {hasTicket 
          ? <h3>Код принят, ищем данные <br /> вашего билета</h3>
          : <h3>Отсканируйте штрих-код <br /> или QR-код <br /> посадочного талона</h3>}
      </div>
      <Spacer size={16} />
      <div className={styles.Description}>
        {hasTicket || <h5>Сканер кодов находится <br /> слева от экрана терминала</h5>}
      </div>

      <Spacer size={190} />
      {hasTicket
        ? <p>Ждем от сервера данные билета...</p>
        : <p>Ждем сканирование кода...</p>}
      <Spacer size={40} />
      <PrimaryButton onClickHandle={() => { }} attributes={{disabled: true}}>
        <img src={Spinner} />
      </PrimaryButton>
      <Spacer size={40} />
      {hasTicket || <SecondaryButton onClickHandle={noPassHandle}>У меня нет посадочного</SecondaryButton>}
    </div>
  );
}

export default TicketVerifyPage;

