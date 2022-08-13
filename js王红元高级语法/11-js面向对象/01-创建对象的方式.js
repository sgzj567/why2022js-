// 创建一个对象  对其一个人进行抽象
//1. 早期new 对象的方法
var obj = new Object();
obj.name = "why"
obj.age = 18
obj.height = "1.88";
obj.running = function () {
  console.log(this.name + "在跑步");
}

// 2.创建方式字面量形式(比较流行的)
var info = {
  name: "kobe",
  age: 38,
  height: 1.98,
  eating: function () {
    console.log(this.name + "在吃东西");
  }
}