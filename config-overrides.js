// 重写webpack配置

const { override, addWebpackAlias
  , overrideDevServer
} = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api': {
        target: 'http://192.168.0.100:5000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': resolve('src')
    })
  ),
  devServer: overrideDevServer(devServerConfig())
}