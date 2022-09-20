// 有两次操作 一个是声明 一个是赋值
// 声明在ast树之前 也就是parse的时候(这里创建全局执行上下文 go) 赋值在最后执行过程
// 函数也在栈里面执行(ECStack,函数调用栈)
// 因为执行的是全局代码 为了全局代码能执行 需要创建全局执行上下文(global execution),全局执行代码执行的时候才会创建gec
// 全局执行上下文是放到函数函数调用栈里执行的
// 全局执行上下文里面也有vo(variable object,不同代码不一样 函数时ao)但是实际指向go
var name = "why"

var num1 = 20
var num2 = 40
var result = num1 + num2
console.log(result);