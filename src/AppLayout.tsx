import {Outlet} from 'react-router-dom'

import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';

export const AppLayout = () => {
  return (
    <div className="appLayout">
      <div className="container">
        <div className='mainContent'>
          <Header />
          <main className='main'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}