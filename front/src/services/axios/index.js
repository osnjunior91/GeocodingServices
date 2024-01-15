import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:17340/',
    headers: {
        'Content-type': 'application/json'
    }
});