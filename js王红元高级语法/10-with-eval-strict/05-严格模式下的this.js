"use strict"

// 在严格模式下 自执行函数(默认绑定)会指向undefined
function foo() {
  console.log(this);
}

var obj = {
  name: "why",
  foo: foo,
}
foo()

obj.foo();

// setTimeout中的this  内部是一个黑盒子   箭头函数中没有this 默认this是指向父级作用域的
// setTimeout(() => {
//     console.log(this);
// }, 1000)
setTimeout(function () {
  console.log(this);
}, 1000)

// setTimeout函数可以理解为
function setTimeout(fn, delay) {
  // 等待delay 毫秒
  fn(); // <-- 调用位置！
}
// 可以看到，他是直接调用fn(),前面没有给任何对象绑定在一起，所以根据JavaScript的规则，它属于默认绑定，自然就是window了，不知道你能否理解？如果你想改变他得绑定对象，可以使用bind去绑定。
// 再说说箭头函数，在ES6中箭头函数的this是指向父级作用域的(不是很准确)，你的foo2中使用的箭头函数，因此默认会指向obj，如果你将