import { Outlet } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { JoinForm } from './components/JoinForm/JoinForm.tsx';

export const AppLayout = () => {
  return (
    <div className="appLayout">
      <div className="mainContent">
        <Header />
        <main className="main">
          <Outlet />
          <JoinForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};
