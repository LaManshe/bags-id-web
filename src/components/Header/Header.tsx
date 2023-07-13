import { FC } from 'react';
import styles from './Header.module.scss';
import { BagsIdLogo, Cancel } from '../../resources/ResourcesService';
import useModalBack from '../../hooks/useModalBack';
import { useContent } from '../../hooks/useContent';

const Header: FC = () => {
  const {contentAreaIsOpen} = useContent();
  const {showModalBack} = useModalBack();

  const clickHandle = () => {
    showModalBack();
  }

  return (
    <div className={`${styles.Header} ${contentAreaIsOpen && styles.open}`}>
      <div className={styles.Background} />
      <div className={styles.Content}>
        <div className={styles.LogoArea}>
          <img src={BagsIdLogo} />
        </div>
        <div className={styles.ControlsArea}>
          {
            contentAreaIsOpen && 
              <button className={styles.CancelLink} onClick={clickHandle}>
                <span>Выйти</span>
                <img src={Cancel} />
              </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
