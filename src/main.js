import '../src/assets/css/style.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductSale from './pages/ProductSale.js';
import { render, router } from '../src/utilities/index.js';

const app = document.querySelector('#app');

router
    .on('/', () => render(app, HomePage))
    .on('/home', () => render(app, HomePage))
    .on('/product', () => render(app, ProductPage))
    .on('/productsale', () => render(app, ProductSale))
    .resolve();
