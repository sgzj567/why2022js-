// 结论:new关键字不能和apply与call一起使用

// new的优先级高于bind(显示绑定)>隐式绑定
function foo() {
    console.log(this);
}
// foo()
var bar = foo.bind("aaa")
var p = new bar();