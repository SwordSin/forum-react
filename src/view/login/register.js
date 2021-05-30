import { Form, Input, Button } from 'antd'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'

// 引入api
import { registerUser } from '@/api/login'
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

// const LoginButton = styled.h1`
//   margin-right: 10px;
// `

// const getLogin = function () {
//   console.log('this is logisn')
// }

// 表单验证内容
const rulesMsg = {
  most: [{ required: true, message: '' }],
  number: [{ required: true, pattern: /^[1-9]\d*$/g, message: '请输入电话!' }],
  // /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  email: [{
    required: true,
    pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
    message: '请输入邮箱'
  }]
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
    ['username', '用户名', 'most'],
    ['password', '密码', 'most'],
    ['netName', '昵称', 'most'],
    ['email', '邮箱', 'email'],
    ['phone', '电话', 'number']].map((value, index) => {
      let InputType = null
      if (value[0] === 'password') {
        InputType = <Input.Password />
      } else {
        InputType = <Input />
      }
      return (
        <Form.Item
            key={index.toString()}
            label={value[1]}
            name={value[0]}
            rules={ rulesMsg[value[2]] }
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
          <Link to="/login">
            <Button type="primary" style={{ marginRight: '10px' }}>
              登录
            </Button>
          </Link>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register