// var foo = () => {
//     console.log(arguments);
// }
// foo();

function foo() {
    var bar = () => {
        console.log(arguments);
        console.log(arguments.callee);
    }
    return bar // 不写就没有输出
}
var fn = foo(1, 23, 3)
fn();

var foo1 = (num1, num2, ...args) => {
    console.log(args);
}
foo1(10, 20, 30, 40)