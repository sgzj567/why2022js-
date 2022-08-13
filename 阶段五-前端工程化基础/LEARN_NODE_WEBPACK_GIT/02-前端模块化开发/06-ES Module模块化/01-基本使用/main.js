// 1.导入的方式一
// import { name, age, foo } from "./foo.js"
// import { fName, fAge, fFoo } from "./foo.js"


// 2.导入的时候起别名
// import { name as fName, age as fAge, foo as fFoo } from "./foo.js"
// console.log(fName, fAge, fFoo());

// 3.导入方式三:将导入的所有的内容放入一个标识符中
import * as foo from "./foo.js"
console.log(foo.name, foo.age);