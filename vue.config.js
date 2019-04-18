const webpack = require('webpack')
// vue.config.js
module.exports = {

  configureWebpack: {

    plugins: [

      new webpack.ProvidePlugin({

        $: "jquery",

        jQuery: "jquery",

        "windows.jQuery": "jquery"

      })

    ]
  },

  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.104.251.1:8089/',
        changeOrigin: true, // 开启跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/rev': {
        target: 'http://localhost:8090/',
        changeOrigin: true, // 开启跨域
        ws: true,
        pathRewrite: {
          '^/rev': ''
        }
      }
    }
  }
}
