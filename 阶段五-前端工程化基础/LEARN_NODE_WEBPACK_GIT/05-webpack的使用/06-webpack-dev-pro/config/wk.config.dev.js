const { merge } = require("webpack-merge")
const commonConfig = require("./wk.config.common.js")
module.exports = merge(commonConfig, {
  mode: "development",

  devServer: {
    hot: true,
    port: 8888,
    // 是否压缩
    // compress: true,
    // 自动打开浏览器 在执行完serve
    open: true,
  }

})