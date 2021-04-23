import { useState } from "react"
// 引入api
import { registerUser } from '@/api/login'
import { Button, Input } from 'antd'


function Register() {

  // state
  const registerInfo =  {
    'username': '',
    'password': '',
    'netName': '',
    'email': '',
    'phone': ''
  }
  const [formData, setFormData] = useState(registerInfo)

  const changeInput = function (e: any) {
    // debugger
    // debugger
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // 渲染表单列表
  const FormList = [['username', '用户名'], ['password', '密码'], ['netName', '昵称'], ['email', '邮箱'], ['phone', '电话']].map((value, index) => {
    let usetype = 'text'
    if (value[0] === 'password') {
      usetype = 'password'
    } else if (value[0] === 'phone') {
      usetype = 'number'
    }
    return (
      <div key={index.toString()}>
        <Input value={formData[value[0]]} name={ value[0] } onChange={changeInput} />
      </div>
    )
  }
  )

  // 提交内容
  const addUser = function () {
    registerUser(formData).then(resp => {
      const userId: number = resp.data
      console.log('userid: ', userId)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h3>欢迎sdafasdfsdafas加入</h3>
      {FormList}
      <Button type="primary" onClick={ addUser } size="small">提交</Button>
    </div>
  )
}

export default Register