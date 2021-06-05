import { Button } from 'antd'
// 主页

const goPath = function (props, path) {
  // 跳转页面
  props.history.push(path)
}

const HomePage = function (props) {

  const ButtonList = [
    { path: '/report', value: '操作大量数据'},
    { path: '/concurrent', value: '并发测试'},
    { path: '/forum', value: '简单论坛'}].map((value, index) => {
    return (
      <Button key={ index.toString() } size="large" type="dashed" danger block style={{marginTop: '20px'}} onClick={goPath.bind(null, props, value.path)}>
        { value.value }
      </Button>
    )
  })

  return (
    <div style={{width: '30%', margin: 'auto', marginTop: '5%'}}>
      { ButtonList }
    </div>
  )
}

export default HomePage