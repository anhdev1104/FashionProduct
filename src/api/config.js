import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-45d37-default-rtdb.firebaseio.com',
});

export default instance;
