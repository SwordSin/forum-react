import { Router, Route } from 'react-router'
import { /* createHashHistory,*/ createBrowserHistory } from 'history'

// 引入组件
import Register from '@/view/login/register'
import Header from '@/layout/header'
// import App from '@/App'

// const hashHistory = createHashHistory()
const html5History = createBrowserHistory()
const MyRouter = function () {
  return (
    <Router history={ html5History }>
      <Route path="/" component={ Header }></Route>
      <Route path="/register" component={ Register }></Route>
    </Router>
  )
}

export default MyRouter
