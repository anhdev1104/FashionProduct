import instance from './config';

export const getUsers = () => instance.get('/customer.json');
export const addUser = newUser => instance.post('/customer.json', newUser);
export const removeUser = id => instance.delete(`/customer/${id}.json`);
