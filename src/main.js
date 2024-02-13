import '../src/assets/css/style.css';
// client
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductSale from './pages/ProductSale.js';
import ProductDetails from './pages/ProductDetails.js';
import AccessoryPage from './pages/AccessoryPage.js';
import NotFound from './pages/NotFound.js';
import Collection from './pages/Collection.js';
import ShowFashion from './pages/ShowFashion.js';
import PayPage from './pages/payPage.js';
import LoginPage from './pages/LoginPage.js';
import Register from './pages/Register.js';

// util
import { render, router } from '../src/utilities/index.js';

// admin
import index from './pages/admin/index.js';
import Products from './pages/admin/Products.js';
import ProductDetail from './pages/admin/ProductDetail.js';

const app = document.querySelector('#app');

// client
router
    .on('/', () => render(HomePage, app))
    .on('/register', () => render(Register, app))
    .on('/login', () => render(LoginPage, app))
    .on('/product', () => render(ProductPage, app))
    .on('/productsale', () => render(ProductSale, app))
    .on('/accessory', () => render(AccessoryPage, app))
    .on('/collection', () => render(Collection, app))
    .on('/showFashion', () => render(ShowFashion, app))
    .on('/pay', () => render(PayPage, app))
    .on('/product/:id', ({ data }) => render(() => ProductDetails(data), app));

// admin
router
    .on('/admin', () => render(index, app))
    .on('/admin/products', () => render(Products, app))
    .on('/admin/products/:id', ({ data }) => render(() => ProductDetail(data), app));

router.notFound(() => render(NotFound, app));
router.resolve();
