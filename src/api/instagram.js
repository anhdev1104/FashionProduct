import instance from './config';

export const getInstagram = () => instance.get('/instagram.json');
