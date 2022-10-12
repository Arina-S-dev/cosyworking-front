import axios from 'axios';

const axiosBaseUrl = axios.create({ baseURL: 'https://cosyworking-api.onrender.com/' });

export default axiosBaseUrl;
