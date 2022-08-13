// 函数也是一个对象  也是有[[prototype]]
function foo() {

}

// 函数因为是一个函数 所以也有显示原型:prototype  这个没有浏览器兼容性问题
console.log(foo.prototype);

var f1 = new foo()
var f2 = new foo()
// new 会把new出来的对象内部的[[prototype]]地址指向构造函数的prototype属性
console.log(f1.__proto__ === foo.prototype); //true
console.log(f1.__proto__ === f2.__proto__); //true