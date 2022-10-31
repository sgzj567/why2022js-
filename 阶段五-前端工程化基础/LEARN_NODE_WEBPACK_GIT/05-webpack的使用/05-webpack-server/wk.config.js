// 这个是跑在node环境下的用commonjs
const { postcss } = require("autoprefixer")
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
// 在每次重新打包前  删除dist文件夹里面的文件 这里的是build  但是现在有个简洁办法 在output里设置clean:true
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
//  在dist文件夹下生成html文件 
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 使用DefinePlugins注入全局变量
const { DefinePlugin } = require("webpack")
module.exports = {
  // 开发模式设置 上线阶段设置为production  开发阶段设置为development
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    // 这里的路径必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    clean: true,
  },
  // 扩展名
  resolve: {
    extensions: [".js", "json", ".vue", ".jsx", "ts", ".tsx"],
    // 如果多层嵌套
    alias: {
      utils: path.resolve(__dirname, "./src/utils")
    }
  },
  // serve 需要下载webpack-dev-serve -D(修改了代码就可以直接切换到浏览器查看 不用打开live sever) 
  //  开启hmr 开启本地服务 但是webpack是自动开启的 
  // 不会生产dist文件夹 会放在内存里
  devServer: {
    hot: true,//默认就是true  热更新
    // 自己配置端口名字
    port: 8888,
    // 自动打开浏览器 在执行完serve
    // 是否压缩
    // compress: true,
    open: true,
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

        //2. 打包两张图片  并且两张图片有自己的地址  将地址设置到img bg中  缺点多了几次网络请求
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
          // 占位符
          // 指向原来图片名字 name
          // ext:扩展名
          // hash:webpack生成的hash
          // 前面加img是把所有处理后的图片放到img目录下
          filename: "img/[name]_[hash:8][ext]"
        }
      },
      // 通过babel 将es6以上的代码转为ES5代码
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // 转换箭头函数
              // plugins: [
              //   "@babel/plugin-transform-arrow-functions"
              // ]
            }
          }
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
  plugins: [
    // 做css的操作
    new VueLoaderPlugin(),
    // 删除dist文件夹里的文件
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        title: "电商项目",
        // 自定义模板
        template: "./index.html"
      }
    ),
    new DefinePlugin({
      coderwhy: "'why'",
      counter: "'123'",
    })
  ]
}