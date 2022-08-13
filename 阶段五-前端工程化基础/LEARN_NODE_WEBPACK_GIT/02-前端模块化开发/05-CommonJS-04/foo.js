const main = require("./main")
console.log("foo-----");
// 结论三:当模块第一次被引入的时候  就会执行被导入模块的代码
// 结论二:如果多次引入  也只执行第一次引入的代码
// 这是因为  每个模块module 都有一个属性 loaded  为false  表示还没有加载  为true表示已经加载
// commonJS是同步执行的 所以不能在浏览器中执行   所以用webpack打包处理  可以将commonjs 或者Esmodule转换