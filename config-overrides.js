// 重写webpack配置

const { override, addWebpackAlias,
  // , overrideDevServer,
  fixBabelImports,
  addLessLoader
} = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

// const devServerConfig = () => config => {
//   return {
//     ...config,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8889',
//         changeOrigin: true,
//         secure: false
//       }
//     }
//   }
// }

module.exports = {
  webpack: override(
    // 配置别名
    addWebpackAlias({
      '@': resolve('src')
    }),
    // 配置antd
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true // 自动打包相关的样式 默认为 style:'css'
    }),
    // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        ModifyVars: {  '@primary-color': '#eee'  } 
      }
    })
  )
}