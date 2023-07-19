import axios from 'axios';

const instance = axios.create({baseURL: "http://192.168.0.124:3025/"});
instance.defaults.withCredentials = true;

export default instance;