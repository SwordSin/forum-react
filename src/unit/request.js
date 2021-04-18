import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 50000
})

// 设置拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    console.log('发生错误')
    alert("aa")
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
})


export default service