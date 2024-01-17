const ProductPage = async () => {
    const endpoint = 'http://localhost:3000/product';
    const response = await fetch(endpoint, {
        method: 'GET',
    });

    const product = await response.json();
    return `
        <div>Product page</div>
    `;
};

export default ProductPage;
