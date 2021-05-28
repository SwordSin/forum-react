// 引入api
import { registerUser } from '@/api/login'

import { Form, Input, Button } from 'antd'

import RegistryStyle from './style/RegistryStyle.module.scss'


// 表单的label 和 wrapper分布情况
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 }
}

// 提交按钮
const tailLayout = {
  wrapperCol: { offset: 5, span: 19 }
}
  

function Register() {


  // 点击提交
  const onFinish = (values) => {
    registerUser(values).then(resp => {
      const userId = resp.data
      console.log('userid: ', userId)
    }).catch(error => {
      console.log(error)
    })
  }

  // 渲染表单列表
  const FormList = [
    ['username', '用户名'],
    ['password', '密码'],
    ['netName', '昵称'],
    ['email', '邮箱'],
    ['phone', '电话']].map((value, index) => {
      let InputType = null
      if (value[0] === 'password') {
        InputType = <Input.Password />
      } else {
        InputType = <Input />
      }
      return (
        <Form.Item
            key={index.toString()}
            label= {value[1]}
            name={value[0]}
        >
          {InputType}
        </Form.Item>
      )
    }
  )

  return (
    <div className={RegistryStyle.registryBox}>
      <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
        {FormList}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register