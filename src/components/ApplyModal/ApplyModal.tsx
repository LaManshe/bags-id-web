import React, { FC } from 'react';
import styles from './ApplyModal.module.scss';
import Spacer from '../../ui/Spacer/Spacer';
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
        <div className={styles.Mask}>
          <div className={styles.ApplyModal}>
            <div className={styles.ModalContent}>
              <h3>{modalConfig.title}</h3>
              <Spacer size={24} />
              <h5>{modalConfig.description}</h5>
              <Spacer size={128} />
              <div className={styles.Controls}>
                <DangerButton onClickHandle={applyHandle}>{modalConfig.applyButtonText}</DangerButton>
                <Spacer axis='horizontal' size={24} />
                <SecondaryButton onClickHandle={cancelHandle}>{modalConfig.cancelButtonText}</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
    }
    </>
  );
}

export default ApplyModal;
