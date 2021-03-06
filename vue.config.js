// vue.config.js
const path = require('path');
const resolve = function (dir) {
  return path.join(__dirname, dir)
}
const isProduction = process.env.NODE_ENV === 'production'; //是否是生产环境
const isTest = process.env.VUE_APP_TITLE === 'test'; //是否是测试生产环境


module.exports = {
    runtimeCompiler: true,
    productionSourceMap: !isProduction, //非生产环境才生成map文件
    outputDir: process.env.outputDir,
    chainWebpack: config => {
      config.resolve.alias
            .set('@', resolve('src'))
            .set('views',resolve('src/views'))
      if (isProduction && isTest) {
        config.optimization.minimize(false); // 测试生产环境不压缩js代码
      }
    },
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    },
  // webpack-dev-server 相关配置
  devServer: {
    host: 'localhost',
    port: '8001',
    hot: true,
    open: true,
    overlay: {
      warning: false,
      error: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};