// 出自你不知道JavaScript
// function foo(el) {
//     console.log(el, this.id);
// }
// var obj = {
//     id: "awesome",
// }; //必须加;要不然无法执行
// [2, 3, 45].forEach(
//     foo, obj
// ); // 对每个obj 执行foo函数
function Person() {}

function Student() {}
var p1 = new Person()
var s = new Student()
console.log(p1.__proto____proto__ === Object.__proto__); //
console.log(Function.prototype === Object.__proto__); //
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert(key); // name, age, isAdmin
  // 属性键的值
  alert(user[key]); // John, 30, true
}