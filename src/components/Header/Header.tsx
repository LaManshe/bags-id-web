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
    <>
    <div className={`${styles.bg} z-0 ${contentAreaIsOpen ? '' : 'd-none'}`}/>
    <div className='col-6 h-100 z-1'>
      <img src={BagsIdLogo} className={`${contentAreaIsOpen ? 'h-90' : 'h-100'} ${styles.Logo}`}/>
    </div>
    <div className='col-6 h-100 z-1 d-flex justify-content-end align-items-center'>
      {
        contentAreaIsOpen && 
          <button className={`text-white ${styles.CancelLink}`} onClick={clickHandle}>
            <div className='row h-100'>
              <h3 className='display-2 h-100'>Выйти <img src={Cancel} className='img-contain'/></h3>
            </div>
          </button>
      }
    </div>
    </>
  );
}

export default Header;
