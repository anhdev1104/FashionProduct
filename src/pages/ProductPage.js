import Header from '../components/Header';

const endpoint = 'http://localhost:3000/product';
const ProductPage = async () => {
    const response = await fetch(endpoint);
    const product = await response.json();
    return `
        ${Header()}
    `;
};

export default ProductPage;
