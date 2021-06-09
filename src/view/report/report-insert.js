import { Form, Input, Button, Row, Col, message, Spin } from 'antd'
import { useState } from 'react'
import { insertBigData, deleteBigDataAll } from '@/api/bigdata'

const fields = [
  { name: 'costomerId', value: '123432', lable: '消费者Id' },
  { name: 'commodity', value: 'phone', lable: '商品名' },
  { name: 'commodittId', value: '100', lable: '商品id' },
  { name: 'price', value: '128', lable: '价格' },
  { name: 'discount', value: '0.9', lable: '折扣' },
  { name: 'ordeTime', value: '2021-06-09 00:14:23', lable: '订单时间' },
  { name: 'payTime', value: '2021-06-09 00:14:23', lable: '支付时间' }
]
// 表单布局数据
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const HorizontalLoginForm = () => {
  const [isLoad, isLoadSet] = useState(false)

  const IitemList = fields.map((value, index) => {
    return (
      <Col span={6} key={ index.toString() }>
        <Form.Item
            label={value.lable}
            name={value.name}
          >
          <Input />
        </Form.Item>
      </Col>
    )
  })

  // debugger
  const onFinish = (values) => {
    isLoadSet(true)
    const startTime = new Date().getTime()
    insertBigData(values.insertNum).then(resp => {
      console.log(resp)
      const endTime = new Date().getTime()
      message.success('插入成功, 最后一条数据为:' + resp)
      message.success('插入的时间为:' + parseInt((endTime - startTime)/1000))
      isLoadSet(false)
    }).catch(error => {
      message.error('插入失败,超时或未知错误')
      isLoadSet(false)
      console.log(error)
    })
  }

  const deleteData = () => {
    isLoadSet(true)
    deleteBigDataAll().then(resp => {
      message.success('删除成功')
      isLoadSet(false)
      console.log(resp)
    }).catch(error => {
      message.error('删除失败')
      isLoadSet(false)
      console.log(error)
      console.log(error)
    })
  }

  return (
    <div>
      <Spin spinning={isLoad} style={{position: 'absolute', top: '50%', left: '50%', zIndex: 1000 }} />
      <Form
          name="horizontal_login"
          style={{marginTop: '20px', paddingRight: '10px'}}
          {...formItemLayout}
          fields={fields}
          layout="horizontal"
          onFinish={onFinish}>
        <Row>
          {IitemList}
          <Col span={6}>
            <Form.Item
                label="插入数据量"
                name="insertNum"
                rules={
                  [{
                    required: true,
                    pattern: new RegExp(/^[1-9]\d*$/, "g"),
                    message: '请输入数字'
                  }]
                  }
                >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={18}>
            <Form.Item>
              <Button
                  type="primary"
                  htmlType="submit"
              >
                插入数据
              </Button>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button onClick={deleteData}>删除数据</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
export default  HorizontalLoginForm