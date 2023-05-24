function Person() {

}
var p = new Person()
// isPrototypeOf是判断这个对象(Person.prototype)是否出现在某个(p)原型链上
console.log(Person.prototype.isPrototypeOf(p));
console.log(p instanceof Person);

var obj = {
  name: "why",
  age: 18,
}
var info = Object.create(obj)
console.log(obj.isPrototypeOf(info));
console.log(info instanceof obj); //错误  因为右边的不是构造函数