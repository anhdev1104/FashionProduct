import instance from './config';

export const getCategories = () => instance.get('/categories.json');
export const getDetailCategories = id => instance.get(`/categories/${id}.json`);
export const addCategories = newCategory => instance.post('/categories.json', newCategory);
export const updateCategories = (id, newCategory) => instance.patch(`/categories/${id}.json`, newCategory);
export const deleteCategories = id => instance.delete(`/categories/${id}.json`);
