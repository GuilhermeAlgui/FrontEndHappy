import axios from 'axios';


const api = axios.create({
    baseURL: 'https://backendhappy2-0.herokuapp.com'
})

export default api;