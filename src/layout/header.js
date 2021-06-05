// import { Route, Redirect, Switch } from 'react-router'
// import { BrowserRouter } from 'react-router-dom'
// import styled from 'styled-components'
import HeaderStyle from './style/HeaderStyle.module.scss'

// import Register from '@/view/login/register'
// import Login from '@/view/login/login'
// import Report from '@/view/report/report-one'


const Header = function (props) {
  return (
    <div>
      <header className={HeaderStyle.header}>
        <span style={{cursor: 'pointer'}} onClick={() => {props.history.push('/homepage')}}>
        {/* <span style={{cursor: 'pointer'}} onClick={() => {console.log('aa')}}> */}
          叔本华
        </span>
      </header>
      {/* <main>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <Redirect from="/" to="/login" />
            <Route path="/register" component={ Register }></Route>
          </Switch>
        </BrowserRouter>
      </main> */}
    </div>
  )
}

export default Header