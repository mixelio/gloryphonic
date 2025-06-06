import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import {MainPage} from './pages/MainPage/MainPage';
import {AboutPage} from './pages/AboutPage/AboutPage';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage';
import {AppLayout} from './AppLayout';
import {Artists} from './pages/Artists/Artists';
import {Sponsorship} from './pages/Sponsorship/Sponsorship';
import {Contacts} from './pages/Contacts/Contacts';
import {Profile} from './pages/Profile/Profile';
import {Me} from './pages/Me/Me';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/artists', 
        element: <Artists />, 
        children: [
          {path: ':id?', element: <Profile />}
        ]
      },
      { path: '/sponsorship', element: <Sponsorship /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/me', element: <Me /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
