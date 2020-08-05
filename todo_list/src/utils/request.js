import axios from 'axios'

const baseUrl = 'https://5e9ec500fb467500166c4658.mockapi.io';

const service = axios.create({
    baseURL: baseUrl,
    timeout: 50000
});

export default service