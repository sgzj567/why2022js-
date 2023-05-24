// 父类:公共属性和方法

// 子类特有属性和方法
function Person() {
  this.name = "why"
  this.friends = []
}

function Student() {
  this.sno = 111
}


// Student.prototype = new Person()
// Person.prototype = new Student()
Person.prototype.eating = function () {
  console.log("在吃饭");
}
// 一定要注意位置
Student.prototype = new Person()
Student.prototype.running = function () {
  console.log("在跑步");
}
// 继承
Person.prototype = new Student()
var stu = new Student()
var p1 = new Person()

// console.log(p1.sno);
// console.log(p1);
console.log(p1.name);
console.log(stu.name);
stu.running()
stu.eating()

// 原型链的弊端

// 1.打印stu对象  继承的属性是看不到的 因为可枚举属性为false
console.log(stu);

// 2.创建出来两个对象
var stu1 = new Student()
var stu2 = new Student()

//  直接修改对象上的属性  是给本对象添加一个新的属性
stu1.name = "kobe"
console.log(stu2.name);
console.log(stu1.name);//这个是在原型上找

// 获取引用  修改引用中的值会相互影响

stu1.friends.push("zs")
console.log(stu1.friends);
console.log(stu2.friends);

// 3.第三个弊端:在前面实现类的过程中都没有传递参数
var stu3 = new Student("zs", "ss")

// 解决办法  给子类调用父类
// Person.call(this, name, age, friends)