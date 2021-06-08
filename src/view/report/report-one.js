import { Table, Tag, Space } from 'antd'
import { getBigDataAll } from '@/api/bigdata'

import { useEffect, useState } from 'react'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <div>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </div>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

// const data = []

const ReportOne = function () {
  const [data, setData] = useState([])
  // debugger
  // console.log(getBigDataAll())
  console.log('----jiazai repsort')
  useEffect(() => {
    getBigDataAll().then(resp => {
      const tmpData = []
      for (let i = 0; i < resp.length; i++) {
        tmpData.push({
          key: resp[i].id,
          name: resp[i].test1,
          age: resp[i].test6,
          address: resp[i].test2,
          tags: [resp[i].test3]
        })
      }
      setData(tmpData)
      console.log(resp)
    }).catch(error => {
      console.log(error)
    })
  }, []) // 仅在dom加载的时候执行一次
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ReportOne