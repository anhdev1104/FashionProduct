import '../src/assets/css/style.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductSale from './pages/ProductSale.js';
import { render, router } from '../src/utilities/index.js';
import slideFn from './scripts/slideFn.js';
import ProductDetails from './pages/ProductDetails.js';
import toggleFavourite from './scripts/addFavourite.js';
import AccessoryPage from './pages/AccessoryPage.js';
import NotFound from './pages/NotFound.js';
import Collection from './pages/Collection.js';
import ShowFashion from './pages/ShowFashion.js';
import { handleAddImage, modalShow, toggleActiveSize } from './scripts/detailEvent.js';
import scrollProducts from './scripts/scrollProducts.js';
import addModalCart from './scripts/addModalCart.js';
import PayPage from './pages/payPage.js';
import LoginPage from './pages/LoginPage.js';
import Register from './pages/Register.js';
import validate from './utilities/validate.js';

const app = document.querySelector('#app');

router
    .on('/', () => render(HomePage, app, slideFn, addModalCart))
    .on('/register', () => render(Register, app, validate))
    .on('/login', () => render(LoginPage, app))
    .on('/product', () => render(ProductPage, app, toggleFavourite, addModalCart))
    .on('/productsale', () => render(ProductSale, app, toggleFavourite, addModalCart))
    .on('/accessory', () => render(AccessoryPage, app, toggleFavourite, addModalCart))
    .on('/collection', () => render(Collection, app, addModalCart))
    .on('/showFashion', () => render(ShowFashion, app, addModalCart))
    .on('/pay', () => render(PayPage, app, addModalCart))
    .on('/product/:id', ({ data }) =>
        render(
            () => ProductDetails(data),
            app,
            handleAddImage,
            modalShow,
            toggleActiveSize,
            scrollProducts,
            addModalCart
        )
    )
    .notFound(() => render(NotFound, app))
    .resolve();
