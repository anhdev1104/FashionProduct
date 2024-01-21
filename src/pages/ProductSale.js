import Header from '../components/Header';

const endpoint = 'http://localhost:3000/product';

const ProductSale = async () => {
    const response = await fetch(endpoint);
    const product = await response.json();
    console.log(product);
    return `
        ${product.map(item => `<h1>${item.name}</h1>`).join('')}
    `;
};

export default ProductSale;
