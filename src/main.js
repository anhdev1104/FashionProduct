import '../src/assets/css/style.css';
// client
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails.js';
import Collection from './pages/Collection.js';
import ShowFashion from './pages/ShowFashion.js';
import PayPage from './pages/payPage.js';
import LoginPage from './pages/LoginPage.js';
import Register from './pages/Register.js';
import NotFound from './pages/NotFound.js';

// util
import { render, router } from '../src/utilities/index.js';

// admin
import index from './pages/admin/index.js';
import Products from './pages/admin/Products.js';
import ProductDetail from './pages/admin/ProductDetail.js';
import UpdateProduct from './pages/admin/UpdateProduct.js';

const app = document.querySelector('#app');

// client
router
    .on('/', () => render(HomePage, app))
    .on('/register', () => render(Register, app))
    .on('/login', () => render(LoginPage, app))
    .on('/product', () => render(() => ProductPage(1), app))
    .on('/productsale', () => render(() => ProductPage(2), app))
    .on('/accessory', () => render(() => ProductPage(3), app))
    .on('/collection', () => render(Collection, app))
    .on('/showFashion', () => render(ShowFashion, app))
    .on('/pay', () => render(PayPage, app))
    .on('/product/:id', ({ data }) => render(() => ProductDetails(data), app));

// admin
router
    .on('/admin', () => render(index, app))
    .on('/admin/products', () => render(Products, app))
    .on('/admin/products/:id', ({ data }) => render(() => ProductDetail(data), app))
    .on('/admin/updateproduct/:id', ({ data }) => render(() => UpdateProduct(data), app));

router.notFound(render(NotFound, app));
router.resolve();
