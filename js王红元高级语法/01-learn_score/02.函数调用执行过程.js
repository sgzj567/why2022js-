var message = "hello global"

function foo() {
    console.log(message); //此时找他的父级作用域 他的父级作用域是 go(globalObject) 此时message对应的是hello global
}

function bar() {
    var message = "hello bar"
    foo() //函数的父级作用域与它的定义位置有关与他的调用位置无关
}

bar();