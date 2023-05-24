var obj = {
  name: "why",
  age: 18,
}


// 原型式继承
// 法一
function createObject(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o) //把o传进来的函数 或者对象赋值给newObj的原型对象
  return newObj
}

// 法二:最开始道格拉斯做法
// function createObject1(o) {
//     function F() {}
// 将父类对象的给过渡对象的原型对象上
// F.prototype = o;
// var newObj = new F()
// 返回新的实例化对象
// return newObj();
// }

// var info = createObject(obj)

// 现在做法  和上面一样
// 法三
var info = Object.create(obj)
console.log(info);
console.log(info.__proto__);