import React, { FC, ReactNode } from 'react';
import styles from './BackgroundArea.module.scss';
import Header from '../Header/Header';

interface BackgroundAreaProps {
  children: ReactNode;
}

const BackgroundArea: FC<BackgroundAreaProps> = ({children}: BackgroundAreaProps) => {
  return (
    <>
    <div className={`container-fluid position-absolute top-0 start-0 w-100 h-100 z-0 ${styles.BackgroundArea}`}/>
    
    <div className='container-fluid position-fixed vh-100 z-1'>
      <div className="row d-flex align-items-stretch p-3" style={{height: 10 + '%'}}>
        <Header />
      </div>
      <div className="row d-flex align-items-center text-center text-white" style={{height: 40 + '%'}}>
        <h1 className='display-1'>Система самообслуживания пассажиров</h1>
      </div>
    </div>
    {children}
    </>
  );
}

export default BackgroundArea;
