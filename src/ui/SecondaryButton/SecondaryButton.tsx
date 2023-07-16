import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './SecondaryButton.module.scss';

interface SecondaryButtonProps {
  onClickHandle: () => void;
  children: ReactNode;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({onClickHandle, children, attributes = {}}: SecondaryButtonProps) => (
  <button 
    className={`${styles.SecondaryButton}`}  
    onClick={onClickHandle}
    {...attributes}>
      {setContent(children)}
  </button>
);

const setContent = (content: ReactNode): ReactNode => {
  if (typeof(content) === 'string') {
    return <h1><strong>{content}</strong></h1>
  }

  return <>{content}</>
}

export default SecondaryButton;
