function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
  // 将共有的属性放在原型对象(隐式原型  构造函数里的)上
}
var p1 = new Person("zs", 19, "广西市")
var p2 = new Person("ls", 20, "广东市")
// 下面这个操作不好 因为会失去constructor
// Person.prototype = {
//     eating: function() {
//         console.log(this.name + "在吃饭");
//     },
//     running: function() {
//         console.log(this.name + "在跑步");
//     }
// }
Person.prototype.eating = function () {
  console.log(this.name + "在吃饭");
}
p1.eating();
p2.eating();