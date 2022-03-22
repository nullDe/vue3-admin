import axios from 'axios';
import qs from 'qs';

const request = axios.create({
  baseURL: 'localhost:8000/api',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //设置token
  config.headers["Access-Token"] = sessionStorage.getItem("Access-Token") || "";
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default request



