import axios from 'axios'

const http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/web/api',
  baseURL: process.env.NODE_ENV === 'production' ? 'http://106.54.2.108:3000/web/api' :'http://127.0.0.1:3000/web/api'
})

export default http