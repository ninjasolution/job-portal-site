import axios from 'axios';
import { store } from '../store/store';

const axiosInstance = axios.create({
    baseURL: `http://localhost:6430/`,
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.auth.idToken;
    config.params = config.params || {};
    config.params['auth'] = token;
	console.log(config);
    return config;
});

export default axiosInstance;
