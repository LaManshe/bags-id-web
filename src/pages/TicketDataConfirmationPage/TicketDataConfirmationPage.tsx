import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import { Ticket } from '../../resources/ResourcesService';
import { ITicketData } from '../../services/http/interfaces/ITicketData';
import { addWordAfterNumber } from '../../helpers/words';
import AirCompanyLogoHelper from '../../resources/AirCompanyLogoHelper';

const TicketDataConfirmationPage: FC = () => {
  const location = useLocation();
  const data: ITicketData = location.state ?? (() => {throw new Error("Не удалось получить данные о билете")})();
  
  return (
    <div className="container-fluid d-flex flex-column h-100 text-center p-2">
      <div className="row m-2" style={{height: "40%"}}>
        <div className="col h-100 position-relative">
          <img src={AirCompanyLogoHelper.getLogo(data.airCompany)} className={`img-contain`}/>
        </div>
      </div>
      <div className="row m-2" style={{height: "40%"}}>
        <div className="row mb-2">
          <h1 className='display-3'>Данные вашего билета</h1>
        </div>
        <div className="row text-start">
          <div className="col-4">
            <h5 className='display-6'><small className='text-muted'>Имя, Фамилия</small></h5>
          </div>
          <div className="col">
            <h5 className='display-5 text-truncate'><strong>{data.name || 'Неизвестно'}</strong></h5>
          </div>
        </div>
        <div className="row text-start">
          <div className="col-4">
            <h5 className='display-6'><small className='text-muted'>Рейс</small></h5>
          </div>
          <div className="col">
            <h5 className='display-5'>{data.flight || 'Неизвестно'}</h5>
          </div>
        </div>
        <div className="row text-start">
          <div className="col-4">
            <h5 className='display-5'><small className='text-muted'>Дата вылета</small></h5>
          </div>
          <div className="col">
            <h5 className='display-4'>{data.departureTime || 'Неизвестно'}</h5>
          </div>
        </div>
        <div className="row text-start">
          <div className="col-4">
            <h5 className='display-6'><small className='text-muted'>Багаж</small></h5>
          </div>
          <div className="col">
            <h5 className='display-5'>{addWordAfterNumber(data.bag, 'мест')}</h5>
          </div>
        </div>
      </div>
      <div className="row m-2" style={{height: "20%"}}>
        <div className="row align-items-center justify-content-center mb-2">
          <PrimaryButton onClickHandle={() => { }}>Все верно, продолжить</PrimaryButton>
        </div>
        <div className="row align-items-center justify-content-center">
          <SecondaryButton onClickHandle={() => { }}>Данные не верны</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default TicketDataConfirmationPage;
