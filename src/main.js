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

const app = document.querySelector('#app');

router
    .on('/', () => render(HomePage, app, slideFn))
    .on('/product', () => render(ProductPage, app, toggleFavourite))
    .on('/productsale', () => render(ProductSale, app, toggleFavourite))
    .on('/accessory', () => render(AccessoryPage, app, toggleFavourite))
    .on('/collection', () => render(Collection, app))
    .on('/showFashion', () => render(ShowFashion, app))
    .on('/product/:id', ({ data }) =>
        render(() => ProductDetails(data), app, handleAddImage, modalShow, toggleActiveSize, scrollProducts)
    )
    .notFound(() => render(NotFound, app))
    .resolve();
