import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import ReportGet from '@/view/report/report-get'
import ReportInsert from '@/view/report/report-insert'
// import ReportGet from '@/view/report/report-test'

const { SubMenu } = Menu


const handleClick = e => {
  console.log('click ', e)
}

const Sidebar = function ({ match/* , history*/ }) {
  // history.push(match.url + '/getReport')
  return (
    <div>
      <Menu
          onClick={handleClick}
          style={{ width: 200, height: 'calc(100vh - 56px)', float: 'left' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="大数据操作">
          <Menu.Item key="1">
            <Link to={match.url + '/getReport'}>获取</Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to={match.url + '/insertReport'}>插入/删除</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <div style={{ width: 'calc(100% - 200px)', float: 'left' }}>
        <Switch>
          <Route path={match.url + '/getReport'} component={ReportGet} />
          <Route path={match.url + '/insertReport'} component={ReportInsert} />
        </Switch>
      </div>
    </div>
  )
}

export default  Sidebar