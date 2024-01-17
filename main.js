import Navigo from 'navigo';
import './styles.css';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';

const app = document.querySelector('#app');
const render = async (target, content) => {
    target.innerHTML = await content();
};
const router = new Navigo('/', { linksSelector: 'a' });

router.on('/home', () => render(app, HomePage())).on('/product', () => render(app, ProductPage));

router.resolve();
