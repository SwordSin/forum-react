import request from '@/unit/request'

// 注册
export function getBigDataAll() {
  return request({
    url: '/dealBigData/getBigData',
    method: 'get'
  })
}

// 插入数据
export function insertBigData(num) {
  return request({
    url: '/dealBigData/insetBigData2?size=' + num,
    method: 'put'
  })
}

// 删除数据
export function deleteBigDataAll() {
  return request({
    url: '/dealBigData/deleteBigDataAll',
    method: 'delete'
  })
}