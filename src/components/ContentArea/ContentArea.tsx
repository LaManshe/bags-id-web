import React, { FC, ReactNode } from 'react';
import { useContent } from '../../hooks/useContent';

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea: FC<ContentAreaProps> = ({children}: ContentAreaProps) => {
  const {contentAreaIsOpen} = useContent();

  const getTopOffset = () => {
    return contentAreaIsOpen ? '10%' : '60%';
  }

  const getHeight = () => {
    return contentAreaIsOpen ? '100%' : '44.43%';
  }

  return (
    <div className="container-fluid position-absolute fixed-bottom bg-white rounded-top" style={{height: 90 + '%', top: getTopOffset(), transition: '.2s ease-out'}}>
      <div className="row" style={{height: getHeight()}}>
        <div className="col h-100">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
