import request from '@/unit/request'

import {
  RegisterInfo // 注册接口
} from '@/interface/login'

export function registerUser(data:RegisterInfo) {
  return request({
    url: '/userInfo/registerInfo',
    method: 'post',
    data: data
  })
}