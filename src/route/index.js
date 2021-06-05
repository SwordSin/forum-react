import { Route, Redirect, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

// 引入组件
import Register from '@/view/login/register'
import Login from '@/view/login/login'
import Header from '@/layout/header'
import Report from '@/view/report/report-one'
import Com404 from '@/component/404/404'
import HomePage from '@/view/homepage/index'

// import App from '@/App'


const MyRouter = function () {
  console.log('是否已经登录')
  console.log(document.cookie.indexOf('admin-login=true'))
  // 判断时跳转到404 还是登录页面
  let UsePath = <Route path="*" component={ Com404 }></Route>
  if (location.pathname === '/') {
    UsePath = <Redirect path="/" to="/login" />
  }
  // 判断是否已经登录
  let redirectLogin = null
  // debugger
  if (document.cookie.indexOf('admin-login=true') < 0) {
    // 未登录
    redirectLogin = <Redirect to="/login" />
  }
  return (
    <BrowserRouter>
      <Route path="/" component={Header}></Route>
      <Switch>
        <Route path="/login" component={ Login }></Route>
        { redirectLogin }
        <Route path="/register" component={ Register }></Route>
        <Route path="/report" component={ Report }></Route>
        <Route path="/homepage" component={ HomePage }></Route>
        { UsePath }
      </Switch>
    </BrowserRouter>
  )
}

export default MyRouter
