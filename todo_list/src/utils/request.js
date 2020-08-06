import axios from 'axios'

const baseUrl = 'http://localhost:7710';

const service = axios.create({
    baseURL: baseUrl,
    timeout: 50000
});

export default service