import { FC, useEffect, useRef, useState } from 'react';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import { Spinner, SuccessWaitForScan, WaitForScan } from '../../resources/ResourcesService';
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
    <div className="container-fluid d-flex flex-column h-100 text-center p-2">
      <div className="row align-items-center mb-2" style={{height: "40%"}}>
        <div className="col h-100">
          <div className="image-wrapper h-100 position-relative">
            <img src={hasTicket ? SuccessWaitForScan : WaitForScan} className={`img-contain`}/>
          </div>
        </div>
      </div>
      <div className="row mb-2" style={{height: "30%"}}>
        <div className="row">
          {hasTicket 
              ? <h3 className='display-4'>Код принят, ищем данные вашего билета</h3>
              : <h3 className='display-4'>Отсканируйте штрих-код или QR-код посадочного талона</h3>}
        </div>
        <div className={`row ${hasTicket && 'opacity-0'}`}>
          <h5 className='display-6'>Сканер кодов находится слева от экрана терминала</h5>
        </div>
      </div>
      <div className="row" style={{height: "30%"}}>
        <div className="col d-flex flex-column">
          <div className="row flex-fill align-items-end" style={{height: '5vh'}}>
            {hasTicket
              ? <h2><small className='text-muted'>Ждем от сервера данные билета...</small></h2>
              : <h2><small className='text-muted'>Ждем сканирование кода...</small></h2>}
          </div>
          <div className="row flex-fill justify-content-center mb-2" style={{height: '5vh'}}>
            <PrimaryButton onClickHandle={() => { }} attributes={{disabled: true}}>
              <img src={Spinner} className='img-fluid-70' style={{height: '5vh'}}/>
            </PrimaryButton>
          </div>
          <div className="row flex-fill justify-content-center" style={{height: '5vh'}}>
            {hasTicket || <SecondaryButton onClickHandle={noPassHandle}>У меня нет посадочного</SecondaryButton>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketVerifyPage;

