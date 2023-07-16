import React, { FC } from 'react';
import styles from './ApplyModal.module.scss';
import DangerButton from '../../ui/DangerButton/DangerButton';
import SecondaryButton from '../../ui/SecondaryButton/SecondaryButton';
import { useModal } from '../../hooks/useModal';

const ApplyModal: FC = () => {
  const {modalIsOpen, setModalIsOpen, modalConfig} = useModal();

  const applyHandle = (): void => {
    setModalIsOpen(false);
    modalConfig.onApply();
  }

  const cancelHandle = (): void => {
    setModalIsOpen(false);
    modalConfig.onCancel();
  }

  return (
  <>
    {
      modalIsOpen && 
        <div className={`container-fluid position-fixed start-0 top-0 w-100 h-100 ${styles.Mask}`}>
          <div className="row text-center position-absolute start-50 top-50 w-100 translate-middle" style={{maxWidth: '1200px', height: '40vh', maxHeight: '720px'}}>
            <div className="col d-flex flex-column rounded bg-white p-3">
              <div className="row m-2" style={{height: '40%'}}>
                <h1 className='display-3'>{modalConfig.title}</h1>
              </div>
              <div className="row m-2" style={{height: '40%'}}>
                <h3 className='display-5'>{modalConfig.description}</h3>
              </div>
              <div className="row m-2" style={{height: '20%'}}>
                <div className="col h-100 me-1">
                  <DangerButton onClickHandle={applyHandle}>{modalConfig.applyButtonText}</DangerButton>
                </div>
                <div className="col h-100 ms-1">
                  <SecondaryButton onClickHandle={cancelHandle}>{modalConfig.cancelButtonText}</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
    </>
  );
}

export default ApplyModal;
