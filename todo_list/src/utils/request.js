import axios from 'axios'

const baseUrl = 'https://5f2a3dde6ae5cc001642224e.mockapi.io';

const service = axios.create({
    baseURL: baseUrl,
    timeout: 50000
});

export default service