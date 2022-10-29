import axios from 'axios';

const axiosBaseUrl = axios.create({ baseURL: 'http://www.api.cosyworking.fr/' });

export default axiosBaseUrl;
