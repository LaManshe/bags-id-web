import React, { FC } from 'react';
import styles from './TicketDataConfirmationPage.module.scss';
import { useLocation } from 'react-router-dom';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import Spacer from '../../ui/Spacer/Spacer';
import { Ticket } from '../../resources/ResourcesService';
import AirCompanyLogoHelper from '../../resources/AirCompanyLogoHelper';
import { ITicketData } from '../../services/http/interfaces/ITicketData';

const TicketDataConfirmationPage: FC = () => {
  const location = useLocation();
  const data: ITicketData = location.state ?? (() => {throw new Error("Не удалось получить данные о билете")})();
  
  return (
    <div className={styles.TicketDataConfirmationPage}>
      <div className={styles.TicketView}>
        <img src={Ticket} className={styles.TicketShape}/>
        {AirCompanyLogoHelper.getLogo(data.airCompany) && <img src={AirCompanyLogoHelper.getLogo(data.airCompany)} className={styles.AirCompanyLogo} />}
      </div>
      <Spacer size={27} />
      <h3>Данные вашего билета</h3>
      <div className={styles.TicketData}>
        <div className={styles.Row}>
          <div className={styles.Key}>Имя, Фамилия</div>
          <div className={`${styles.Value} ${styles.Bold}`}>{data.name || 'Неизвестно'}</div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Key}>Рейс</div>
          <div className={styles.Value}>{data.flight || 'Неизвестно'}</div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Key}>Дата вылета</div>
          <div className={styles.Value}>{data.departureTime || 'Неизвестно'}</div>
        </div>
        <div className={styles.Row}>
          <div className={styles.Key}>Багаж</div>
          <div className={styles.Value}>{addWordAfterNumber(data.bag, 'мест')}</div>
        </div>
      </div>
      <div className={styles.Controls}>
        <PrimaryButton onClickHandle={() => { }}>Все верно, продолжить</PrimaryButton>
        <Spacer size={40} />
        <SecondaryButton onClickHandle={() => { }}>Данные не верны</SecondaryButton>
      </div>
    </div>
  );
}

const addWordAfterNumber = (number: number | null, word: string) => {
  if (!number) {
    return 'Неизвестно';
  }
  if (number < 0) {
    return 'Неизвестно';
  }

  let result = number + ' ' + word;

  if (number % 10 === 1 && number % 100 !== 11) {
    result += 'о';
  } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
    result += 'а';
  }

  return result;
}

export default TicketDataConfirmationPage;
