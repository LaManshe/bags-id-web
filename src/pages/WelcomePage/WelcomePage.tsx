import React, { FC, useEffect } from 'react';
import PrimaryButton from '../../ui/PrimaryButton/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
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
    <animated.div className='container-fluid d-flex h-100 flex-column p-2 px-5' style={{...springs}}>
      <div className="row flex-fill justify-content-center align-items-center mb-2">
        <PrimaryButton onClickHandle={clickHandle}>Сдать багаж</PrimaryButton>
      </div>
      <div className="row flex-fill justify-content-center align-items-center mb-2">
        <SecondaryButton onClickHandle={() => {  }}>Распечатать посадочный</SecondaryButton>
      </div>
      <div className="row flex-fill justify-content-center text-center align-items-end">
        <h2><small className='text-muted'>Если вы не зарегистрированы</small></h2>
      </div>
      <div className="row flex-fill justify-content-center align-items-center">
        <SecondaryButton onClickHandle={() => {  }}>Зарегистрироваться на рейс</SecondaryButton>
      </div>
    </animated.div>
  );
};

export default WelcomePage;
