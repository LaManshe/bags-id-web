import React, { FC, ReactNode } from 'react';
import styles from './ContentArea.module.scss';
import { useContent } from '../../hooks/useContent';

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea: FC<ContentAreaProps> = ({children}: ContentAreaProps) => {
  const {contentAreaIsOpen} = useContent();

  return (
    <div className={`${styles.ContentArea} ${contentAreaIsOpen && styles.open}`}>
      {children}
    </div>
  );
}

export default ContentArea;
