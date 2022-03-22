import axios from 'axios';
import qs from 'qs';

const request = axios.create();
// 添加请求拦截器
request.interceptors.request.use(function () {/*...*/});

