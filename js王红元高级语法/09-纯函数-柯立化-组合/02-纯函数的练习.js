function foo(num1, num2) {
  //纯函数
  // 1.相同的输入一定产生相同的输出
  // 2.在执行过程中不会产生任何副作用
  return num1 + num2
}

// 非纯函数
var name = 'abc';

function bar() {
  console.log('bar其他的代码执行');
  name = 'nba' //修改了外部的变量(修改了全局变量)
}
bar();
console.log(name);
//非纯函数  修改age
function baz(info) {
  info.age = 18;
}
var obj = {
  name: 'why',
  age: 33
}
baz(obj);
console.log(obj);

// 纯函数
function test(info) {
  return {
    ...info,
    age: 19,
  }
}
var result = test(obj)
console.log(result);
console.log(obj); //这里的值没有改变所以test是纯函数