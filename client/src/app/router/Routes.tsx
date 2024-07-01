import App from '../layout/App';
import HomePage from '../../fearures/home/HomePage';
import Catalog from '../../fearures/catalog/Catalog';
import ProductDetails from '../../fearures/catalog/ProductDetails';
import AboutPage from '../../fearures/about/AboutPage';
import ContactPage from '../../fearures/contact/ContactPage';
import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage></HomePage> },
      { path: 'catalog', element: <Catalog></Catalog> },
      { path: 'catalog/:id', element: <ProductDetails></ProductDetails> },
      { path: 'about', element: <AboutPage></AboutPage> },
      { path: 'contact', element: <ContactPage></ContactPage> },
    ],
  },
]);
