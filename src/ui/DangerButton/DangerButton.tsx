import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './DangerButton.module.scss';

interface DangerButtonProps {
  onClickHandle: () => void;
  children: ReactNode;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const DangerButton: FC<DangerButtonProps> = ({onClickHandle, children, attributes = {}}: DangerButtonProps) => (
  <button 
    className={styles.DangerButton} 
    onClick={onClickHandle}
    {...attributes}>
      {setContent(children)}
  </button>
);

const setContent = (content: ReactNode): ReactNode => {
  if (typeof(content) === 'string') {
    return <h1><strong>{content}</strong></h1>
  }

  return content;
}

export default DangerButton;
