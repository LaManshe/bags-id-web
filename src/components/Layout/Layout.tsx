import React, { FC } from 'react';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import BackgroundArea from '../BackgroundArea/BackgroundArea';
import ContentArea from '../ContentArea/ContentArea';
import { ContentProvider } from '../../hoc/ContentProvider';
import ApplyModal from '../ApplyModal/ApplyModal';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { ModalProvider } from '../../hoc/ModalProvider';

const Layout: FC = () => (
  <div className={styles.Layout}>
    <ErrorBoundary>
      <ContentProvider>
        <ModalProvider>
          <BackgroundArea>
              <ContentArea>
                <Outlet />
              </ContentArea>
          </BackgroundArea>
          <ApplyModal />
        </ModalProvider>
      </ContentProvider>
    </ErrorBoundary>
  </div>
);

export default Layout;
