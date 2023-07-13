import React, { FC, useEffect } from 'react';
import styles from './WelcomePage.module.scss';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import Spacer from '../../ui/Spacer/Spacer';
import { animated, useSpring } from '@react-spring/web';
import { ROUTES } from '../../types/routes';
import { useContent } from '../../hooks/useContent';

const WelcomePage: FC = () => {
  const navigate = useNavigate();
  const {setContentAreaIsOpen} = useContent();
  const [springs, api] = useSpring(() => ({
    from: {opacity: 1},
    onRest: () => navigate(ROUTES.TICKET_PAGE),
    config: {duration: 200}
  }));

  const clickHandle = () => {
    setContentAreaIsOpen(true);

    api.start({
      from: {opacity: 1},
      to: {opacity: 0},
    });
  };

  useEffect(() => {
    setContentAreaIsOpen(false);
  }, []);

  return (
    <animated.div className={styles.WelcomePage} style={{...springs}}>
      <PrimaryButton onClickHandle={clickHandle}>Сдать багаж</PrimaryButton>
      <Spacer size={24} />
      <SecondaryButton onClickHandle={() => {  }}>Распечатать посадочный</SecondaryButton>
      <Spacer size={80} />
      <p>Если вы не зарегистрированы</p>
      <Spacer size={40} />
      <SecondaryButton onClickHandle={() => {  }}>Зарегистрироваться на рейс</SecondaryButton>
    </animated.div>
  );
};

export default WelcomePage;
