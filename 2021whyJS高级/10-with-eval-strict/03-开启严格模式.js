// 严格模式 可以在js中开启 也可以在函数中开启
// 开启严格模式
"use strict" //下面代码会报错
// 在代码打包工具里会自动开启严格模式
message = "Hello World" //此时没有var 所以只是赋值没有定义
console.log(message);
// 静莫错误:
true.foo = "abc"