import { Router, Route } from 'react-router'
import { /*createHashHistory,*/ createBrowserHistory } from 'history'

// 引入组件
import Register from '@/view/register/index'
import App from '@/App'

// const hashHistory = createHashHistory()
const html5History = createBrowserHistory()
const MyRouter = function () {
  return (
    <Router history={ html5History }>
      <Route path="/" component={App}></Route>
      <Route path="/register" component={ Register }></Route>
    </Router>
  )
}

export default MyRouter