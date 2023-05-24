function foo() {
  console.log("foo~");
}
// foo是一个普通函数
foo()

// 换一种方式来调换  用new关键字调用一个函数  那么这个函数就是一个构造函数
// 也可以不写后面的小括号  (不传参数的话)
var p1 = new foo
console.log(p1);

// 与普通函数的调用区别
// 构造函数的this赋值给新创建的对象中去
// 不用写返回值  会返回一个新的函数体