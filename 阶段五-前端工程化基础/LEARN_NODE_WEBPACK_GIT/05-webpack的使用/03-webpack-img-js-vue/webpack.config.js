// 这个是跑在node环境下的用commonjs
const { postcss } = require("autoprefixer")
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 这里的路径必须是绝对路径
    path: path.resolve(__dirname, "./build")
  },
  // 扩展名
  resolve: {
    extensions: [".js", "json", ".vue", ".jsx", "ts", ".tsx"],
    alias: {
      utils: path.resolve(__dirname, "./src/utils")
    }
  },
  module: {
    rules: [
      {
        // 告诉webpack匹配什么文件
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]

      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,

        //2. 打包两张图片  并且两张图片有自己的地址  将地址设置到img bg中  缺点 多了几次网络请求
        // type: "asset/resource",
        //3. 将图片进行base64编码,并且将编码后的代码放到打包后的js代码中  好处少了网络请求 但是下的js文件比较大 解析时间长 会造成后面的文件阻塞
        // type: "asset/inline",
        //1. 当做资源类型文件处理  设置需要处理图片大小的范围  多大采用2号模式  多大采用3好模式
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        },
        // 指出build下生成文件或者图片的名字
        generator: {
          // 占位符[]
          // 指向原来图片名字 name
          // ext:扩展名
          // hash:webpack生成的hash
          filename: "img/[name]_[hash:8][ext]"
        }
      },
      // 通过babel 将es6以上的代码转为ES5代码
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            // 转换箭头函数
            // plugins: [
            //   "@babel/plugin-transform-arrow-functions"
            // ]
          }
          // }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      }
    ]
  },
  // 做css的操作
  plugins: [
    new VueLoaderPlugin()
  ]
}