const bar = require("./bar.js")
const main = require("./main.js")
console.log(bar.name);//zxk
console.log(main.name);//why


const num1 = main.foo()
console.log(num1);
// CommonJs 导入 导出就是地址赋值