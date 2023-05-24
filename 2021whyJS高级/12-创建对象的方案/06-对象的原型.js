// 我们每个对象都有一个[[prototype]],叫做对象的原型(隐式原型) 1.不会看到 2.不会直接用他的
// 有浏览器兼容性问题

var obj = {
  name: "why"
} //隐藏了[[prototype]]
var info = {} //隐藏了[[prototype]]

// 早期的ECMA是没有如何规范去查看[[prototype]]

// 给对象提供了一个属性  可以让我们查看一下原型对象(浏览器提供的)
// __prototype__
console.log(obj.__proto__); //{}暂时指向空的对象
console.log(info.__proto__); //{}

// ECMA5之后提供的Object.getPrototypeOf
var obj = {
  name: "why",
  __proto__: {}
}
console.log(Object.getPrototypeOf(obj));


// 2.原型有什么用?
// 当我们从对象中获取某个属性时  它会触发[[get]]操作
// 1.在当前的属性中查找对应的属性  如果找到就直接用
// 2.如果在自己里面没有找到就沿着原型去查找 (方便继承  不占用空间)  
console.log(obj.age);
obj.__proto__.age = 19
console.log(obj.age);