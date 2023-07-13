import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import TicketVerifyPage from './pages/TicketVerifyPage/TicketVerifyPage';
import TicketDataConfirmationPage from './pages/TicketDataConfirmationPage/TicketDataConfirmationPage';
import { ROUTES } from './types/routes';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={ROUTES.HOME_PAGE} element={<Layout />}>
    <Route index element={<WelcomePage />} />
    <Route path={ROUTES.TICKET_PAGE} element={<TicketVerifyPage />} />
    <Route path={ROUTES.TICKET_CONFIRMATION_PAGE} element={<TicketDataConfirmationPage />} />
    <Route path='*' element={<WelcomePage />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
