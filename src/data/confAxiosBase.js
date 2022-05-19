import axios from 'axios';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const axiosBaseApi = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    params: {
        'api_key': API_KEY,
        'language': 'ES',
    },
});
export default axiosBaseApi;