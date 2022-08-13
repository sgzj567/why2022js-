//  如果只是引用 这里可以不加from
import "../css/div.css"
import "../css/title.style.less"
// 引入图片模块
import mn from "../img/OIP-C.jpg"
import "../css/bg-style.css"

// webpack 会自动配置js文件的loader 但是对于vue 与css 的需要自己添加  在webpack.config.js中添加 module
// 创建div元素
const divEl = document.createElement("div")

divEl.textContent = "Hello world"
divEl.classList.add("content")

document.body.append(divEl)

// 2.创建title元素

const titleEl = document.createElement("h2")
titleEl.textContent = "我是标题"
document.body.prepend(titleEl)
// 3.创建img元素  webpack虽然有内置模块处理图片功能 但是它一般都会将其当做js处理
const imgEl = document.createElement("img")
imgEl.src = mn
document.body.append(imgEl)

// 4.创建div元素  设置背景
const divEl1 = document.createElement("div")
divEl1.classList.add("img-bg")
document.body.append(divEl1)

