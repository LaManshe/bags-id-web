import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  onClickHandle: () => void;
  children: ReactNode;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({onClickHandle, children, attributes = {}}: PrimaryButtonProps) => (
  <button 
    className={`${styles.PrimaryButton}`} 
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

export default PrimaryButton;
