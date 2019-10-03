import axios from 'axios'

const API_URL = 'http://localhost:3031/'

const api = axios.create({
    baseUrl: API_URL,
    data: JSON.stringify()
  
});


export default api;

