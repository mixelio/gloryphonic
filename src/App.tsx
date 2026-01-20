import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import './App.css';
import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AppLayout } from './AppLayout';
import { Artists } from './pages/Artists/Artists';
import { Sponsorship } from './pages/Sponsorship/Sponsorship';
import { ContactsPage } from './pages/ContactsPage/ContactsPage.tsx';
import { Profile } from './pages/ProfilePage/Profile';
import { Me } from './pages/Me/Me';
import { Registration } from './pages/Registration/Registration.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/about', element: <AboutPage /> },
      {
        path: '/artists',
        element: <Artists />,
        children: [{ path: ':id?', element: <Profile /> }],
      },
      { path: '/sponsorship', element: <Sponsorship /> },
      { path: '/contacts', element: <ContactsPage /> },
      { path: '/me', element: <Me /> },
      { path: '/registration', element: <Registration /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
