import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import {MainPage} from './pages/MainPage/MainPage';
import {AboutPage} from './pages/AboutPage/AboutPage';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage';
import {AppLayout} from './AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/about', element: <AboutPage /> },
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
