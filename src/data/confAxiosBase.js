import axios from 'axios';

const { API_URL } = process.env;
const { API_KEY } = process.env;

const axiosBaseApi = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  params: {
    api_key: API_KEY,
    language: navigator.language || 'es-ES',
  },
});
export default axiosBaseApi;
