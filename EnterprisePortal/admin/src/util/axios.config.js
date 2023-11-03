//axios拦截器
import axios from "axios";

// Add a request interceptor
//请求之前拦截
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //每次发请求之前
    //拦截住请求，在请求头上加上token
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
//请求响应拦截
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //console.log(response.headers)
    //得到请求回应后
    //拦截住请求，获取后端传来的token
    const {authorization} = response.headers
    authorization && localStorage.setItem('token',authorization)

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    
    //如果登录视效过期，重定向到登录界面
    const {status} = error.response
    if(status===401){
        localStorage.removeItem('token')
        window.location.href='#/login'
    }

    return Promise.reject(error);
  });