//1. 根据路径导入自己编写的模块
// const foo = require("./foo.js")
const utils = require("./utils")// 可以省略js  以及index文件名
console.log(utils.formDate())
// require本质是导出  module.exports模块

// 2.导入node提供的内置模块
const path = require("path")
const http = require("http")
console.log(path);
// 情况二:
// X是以./ ../ 或者(根目录) 开头的
// 如果有后缀名  就按后缀名格式查找
// 2.没有就按以下格式查找
// 1>.查找文件X
// 2>查找X.js文件
// 3>.查找x.json文件
// 4>.查找x.node文件
// 3.情况三  名称不是路径  也不是内置模块 就去上层去找node_module如果还没有就一直去找  没有就报错 not found
// 那就去找核心模块  核心模块 是node_modules  这个是固定写法