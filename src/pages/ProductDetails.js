const endpoint = 'http://localhost:3000/product';

const ProductDetails = async ({ id }) => {
    const res = await fetch(endpoint);
    const products = await res.json();
    const product = products.find(product => product.id === +id);
    return `<div>${product.name}</div>`;
};

export default ProductDetails;
