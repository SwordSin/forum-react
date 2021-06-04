import request from '@/unit/request'

// 注册
export function registerUser(data) {
  return request({
    url: '/userInfo/registerInfo',
    method: 'post',
    data: data
  })
}

// 登录
export function loginUser(data) {
  return request({
    url: '/userInfo/login',
    method: 'post',
    data: data
  })
}

