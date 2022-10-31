// 这个是跑在node环境下的用commonjs
const path = require("path")
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 这里的路径必须是绝对路径___dirname是当前的绝对路径
    path: path.resolve(__dirname, "./build")
  }
}