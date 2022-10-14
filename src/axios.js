import axios from 'axios';

const axiosBaseUrl = axios.create({ baseURL: 'http://quentinroggy-server.eddi.cloud' });

export default axiosBaseUrl;
