// 这个是跑在node环境下的用commonjs
const { postcss } = require("autoprefixer")
const path = require("path")
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 这里的路径必须是绝对路径
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件
        test: /\.css$/,
        // use: [
        //   // css-loader只负责解析 不负责插入 所以得需要插入loader 即style-loader
        //   // 但是需要下载 即npm i css-loader -D  style-loader -D
        //   // use 中的loader 是从下往上的 从右向左的
        //   // { loader: "style-loader" },
        //   // { loader: "css-loader" },
        //   // { loader: "postcss-loader" },
        //   // 以上三行简写
        // ]
        // use: ["style-loader", "css-loader", {
        //   // 这个是适配use-select这个属性
        //   loader: "postcss-loader",
        //   // 给postcss-loader 配插件  这个插件也需下载 即autoprefixer 添加浏览器前缀
        // 但是这个也有一个预设插件: 提前把这个插件 以及一些css功能的插件特性  postcss-preset-env -D
        //   options: {
        //     postcssOptions: {
        //       plugins: ["autoprefixer"]
        //     }

        //   }
        // }]
        // 将postcss-loader配置文件抽取出来
        use: ["style-loader", "css-loader", "postcss-loader"]

      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
      }
    ]
  }
}