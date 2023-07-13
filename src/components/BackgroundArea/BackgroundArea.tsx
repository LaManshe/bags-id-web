import React, { FC, ReactNode } from 'react';
import styles from './BackgroundArea.module.scss';
import Header from '../Header/Header';

interface BackgroundAreaProps {
  children: ReactNode;
}

const BackgroundArea: FC<BackgroundAreaProps> = ({children}: BackgroundAreaProps) => {
  return (
    <div className={styles.BackgroundArea}>
      <Header />
      <div className={styles.title}>
        <h1>Система самообслуживания пассажиров</h1>
      </div>
      {children}
    </div>
  );
}

export default BackgroundArea;
