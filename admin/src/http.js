import axios from 'axios';
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api',
  // baseURL: 'http://127.0.0.1:3000/admin/api'
})
// 拦截请求
http.interceptors.request.use(function (config) {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
})

// 拦截响应
http.interceptors.response.use(res => {
  return res;
}, err => {
  if (err.response.data) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.replace('/login')
    }
  }
})
export default http