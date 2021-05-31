import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 50000
})

// 设置拦截器
service.interceptors.response.use(response => {
  // const res = response
  if (response.status !== 200) {
    console.log('发生错误')
    return Promise.reject(new Error(response.message || 'Error'))
  } else {
    return response.data
  }
})


export default service