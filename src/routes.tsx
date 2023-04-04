import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Services from './pages/Services';
import Blog from './pages/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);
