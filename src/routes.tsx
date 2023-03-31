import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Services from './pages/Services';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/services',
    element: <Services />,
  },
]);
