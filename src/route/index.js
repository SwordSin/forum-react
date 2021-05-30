import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

// 引入组件
import Register from '@/view/login/register'
import Login from '@/view/login/login'
import Header from '@/layout/header'
import Report from '@/view/report/report-one'
import Com404 from '@/component/404/404'
// import App from '@/App'


const MyRouter = function () {
  // 判断时跳转到404 还是登录页面
  let UsePath = <Route path="*" component={ Com404 }></Route>
  if (location.pathname === '/') {
    UsePath = <Redirect path="/" to="/login" />
  }
  return (
    <BrowserRouter>
      <Route path="/" component={Header}></Route>
      <Switch>
        <Route path="/register" component={ Register }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/report" component={Report}></Route>
        { UsePath }
      </Switch>
    </BrowserRouter>
  )
}

export default MyRouter
