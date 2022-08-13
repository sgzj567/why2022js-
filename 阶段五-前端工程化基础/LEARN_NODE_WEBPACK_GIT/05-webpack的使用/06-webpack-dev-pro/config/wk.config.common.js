const { postcss } = require("autoprefixer")
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
    clean: true,
  },
  resolve: {
    extensions: [".js", "json", ".vue", ".jsx", "ts", ".tsx"],
    alias: {
      utils: path.resolve(__dirname, "./src/utils")
    }
  },

  devServer: {
    hot: true,
    port: 8888,

    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]

      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,


        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        },
        generator: {

          filename: "img/[name]_[hash:8][ext]"
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {

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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      {
        title: "电商项目",
        template: "./index.html"
      }
    ),
    new DefinePlugin({
      coderwhy: "'why'",
      counter: "'123'",
    })
  ]
}