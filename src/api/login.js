import request from '@/unit/request'

export function registerUser(data) {
  return request({
    url: '/userInfo/registerInfo',
    method: 'post',
    data: data
  })
}