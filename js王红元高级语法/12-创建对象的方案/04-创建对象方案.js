// 构造函数一般首字母大写
function Person(name, age, address, height) {
  this.name = name
  this.age = age
  this.address = address
  this.height = height
  this.eating = function () {
    console.log(this.name + "在吃饭");
  }
  this.running = function () {
    console.log(this.name + "在跑步");
  }
}

var p1 = new Person("张三", 19, "广东市", 1.99)
var p2 = new Person("王五", 20, "广西市", 1.79)
console.log(p1);
// 拿到具体类型的函数
console.log(p1.__proto__.constructor);
// 每次创建对象就会 重新开辟一个空间  即使他是相同的属性 所以浪费空间
console.log(p1.eating === p2.eating); //false