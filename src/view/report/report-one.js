import { Table/* , Tag, Space*/,  Spin  } from 'antd'
import { getBigDataAll } from '@/api/bigdata'

import { useEffect, useState } from 'react'

/*
  "orderNumber": 211234,
  "costomerId": 123123,
  "commodity": "zasdf",
  "commodityId": 0,
  "price": 12.123,
  "discount": 0.2,
  "orderTime": "2021-06-17 02:46:21",
  "payTime": "2021-06-23 02:46:25"
*/
const columns = [
  {
    title: '订单编号',
    dataIndex: 'orderNumber',
    key: 'orderNumber'
  },
  {
    title: '消费者Id',
    dataIndex: 'costomerId',
    key: 'costomerId'
  },
  {
    title: '商品名称',
    dataIndex: 'commodity',
    key: 'commodity'
  },
  {
    title: '商品Id',
    dataIndex: 'commodityId',
    key: 'commodityId'
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '折扣',
    dataIndex: 'discount',
    key: 'discount'
  },
  {
    title: '下单时间',
    dataIndex: 'orderTime',
    key: 'orderTime'
  },
  {
    title: '支付时间',
    dataIndex: 'payTime',
    key: 'payTime'
  }
]

// const data = []

const ReportOne = function () {
  const [data, setData] = useState([])
  const [loadingTable, setLoadingTable] = useState(true)
  // debugger
  // console.log(getBigDataAll())
  console.log('----jiazai repsort')
  useEffect(() => {
    getBigDataAll().then(resp => {
      setData(resp)
      setLoadingTable(false)
      console.log(resp)
    }).catch(error => {
      console.log(error)
    })
  }, []) // 仅在dom加载的时候执行一次
  return (
    <div>
      <Table columns={columns} dataSource={data} loading={ loadingTable } />
    </div>
  )
}

export default ReportOne