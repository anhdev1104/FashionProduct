import '../src/assets/css/style.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductSale from './pages/ProductSale.js';
import { render, router } from '../src/utilities/index.js';
import slideFn from './scripts/slideFn.js';
import ProductDetails from './pages/ProductDetails.js';

const app = document.querySelector('#app');

router
    .on('/', () => render(HomePage, app, slideFn))
    .on('/product', () => render(ProductPage, app))
    .on('/productsale', () => render(ProductSale, app))
    .on('/product/:id', ({ data }) => render(() => ProductDetails(data), app))
    .resolve();
