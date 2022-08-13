// 1.禁止意外创建全局变量
"use strict"
// message = "Hello World"
// console.log(message);

// function foo() {
//     age = 20; //此时没有定义 只有赋值 就会意外创建全局变量  在严格模式下会报错
// }

// 2.不允许函数有相同的参数名称
// function foo(x, y, x) {
//     console.log(x, y, x);
// }

// foo(10, 20, 30)

// 3.静默错误  
// 不能给关键字赋属性
// true.foo = "abc"


// 4.不允许使用八进制
// var num = 0123;
// console.log(num);
// 在es6之后 可以用下面的表示八进制
var num1 = 0o123; //八进制
var num2 = 0X123; //十六进制
var num3 = 0b100;

console.log(num1, num2, num3);

// 5.with语句不允许使用

// 6.eval 函数不会向上引用变量  即 不会把message添加到全局变量里  也可以单独给eval开启严格模式

var jsString = 'var message="Hello World";console.log(message)'
eval(jsString);
console.log(message);