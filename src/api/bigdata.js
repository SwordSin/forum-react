import request from '@/unit/request'

// 注册
export function getBigDataAll() {
  return request({
    url: '/dealBigData/getBigData',
    method: 'get'
  })
}
