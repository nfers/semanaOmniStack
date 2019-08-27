import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers:{
        user: sessionStorage.getItem('user'),
    }
})

export default api;