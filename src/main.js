import '../src/assets/css/style.css';
// client
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails.js';
import Collection from './pages/Collection.js';
import ShowFashion from './pages/ShowFashion.js';
import PayPage from './pages/PayPage.js';
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
import Categories from './pages/admin/Categories.js';
import UpdateCategories from './pages/admin/UpdateCategories.js';
// import { getIdCategory } from './utilities/getCategoryName.js';

const app = document.querySelector('#app');

// client
router
    .on('/', () => render(HomePage, app))
    .on('/register', () => render(Register, app))
    .on('/login', () => render(LoginPage, app))
    .on('/category/:id', ({ data }) => render(() => ProductPage(+data.id), app))
    .on('/collection', () => render(Collection, app))
    .on('/showFashion', () => render(ShowFashion, app))
    .on('/pay', () => render(PayPage, app))
    .on('/product/:id', ({ data }) => render(() => ProductDetails(data), app));

// admin
router
    .on('/admin', () => render(index, app))
    .on('/admin/products', () => render(Products, app))
    .on('/admin/products/:id', ({ data }) => render(() => ProductDetail(data), app))
    .on('/admin/updateproduct/:id', ({ data }) => render(() => UpdateProduct(data), app))
    .on('/admin/categories', () => render(Categories, app))
    .on('/admin/categories/:id', ({ data }) => render(() => UpdateCategories(data), app));

router.notFound(render(NotFound, app));
router.resolve();
