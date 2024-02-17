import instance from './config';

export const getProducts = () => instance.get('/product.json');
export const getProductCollection = () => instance.get('/collection.json');
export const getProductShowFashion = () => instance.get('/showFashion.json');

// admin
export const getProductDetail = id => instance.get(`/product/${id}.json`);
export const addProduct = newProduct => instance.post('/product.json', newProduct);
export const updateProduct = (id, newProduct) => instance.patch(`/product/${id}.json`, newProduct);
export const deleteProduct = id => instance.delete(`/product/${id}.json`);
