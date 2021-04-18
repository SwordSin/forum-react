import request from '@/unit/request'

export function registerUser(data) {
  return request({
    url: '/registerInfo',
    method: 'post',
    data: data
  })
}