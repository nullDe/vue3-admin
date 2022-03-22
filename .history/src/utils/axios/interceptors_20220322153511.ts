import axios from 'axios';
import qs from 'qs';

const request = axios.create();
request.interceptors.request.use(function () {/*...*/});
