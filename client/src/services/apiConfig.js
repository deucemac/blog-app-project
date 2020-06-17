import axios from 'axios';

let apiUrl;

const apiUrls = {
    production: 'https://blog-full-stack-gmcdow.herokuapp.com',
    development: 'https://localhost:3000'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
    baseURL: apiUrl
})

export default api