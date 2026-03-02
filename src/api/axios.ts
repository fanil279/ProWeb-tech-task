import axios from 'axios';

const instanceAPI = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export default instanceAPI;
