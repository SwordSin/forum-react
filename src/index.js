import React from 'react'
import ReactDOM from 'react-dom'
// 引入全局样式
import '@/style/index.scss'
// 引入antd的样式
import 'antd/dist/antd.css'
// import App from './App'
// 引入路由
import Router from '@/route'
// import Header from '@/layout/header'

ReactDOM.render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <Router></Router>
  </React.StrictMode>,
  document.getElementById('root')
)
