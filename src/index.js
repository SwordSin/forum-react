import React from 'react'
import ReactDOM from 'react-dom'
// 引入全局样式
import '@/style/index.scss'
// import App from './App'
// 引入路由
import Router from '@/route'

ReactDOM.render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
  document.getElementById('root')
)
