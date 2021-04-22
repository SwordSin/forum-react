import request from '@/unit/request'

export function registerUser(data:any) {
  return request({
    url: '/userInfo/registerInfo',
    method: 'post',
    data: data
  })
}