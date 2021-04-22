// import styled from 'styled-components'
const HeaderStyle= require('./style/HeaderStyle.module.scss') 


const Header = function () {
  return (
    <header className={HeaderStyle.header}>
      叔本华
      <div>
        登录
      </div>
      <div>
        <label>搜索:</label>
        <input></input>
      </div>
    </header>
  )
}

export default Header