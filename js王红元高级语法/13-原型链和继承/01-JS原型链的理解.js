var obj = {
  name: "why",
  age: 18
}
// console.log()会[[get]]操作  
// 1.会在当前对象中查找属性
// 2.如果没有找到会在原型(__proto__)对象上去查找

obj.__proto__ = {}
console.log(obj.address);//如果查找没有的属性就是undefined

//原型链   就是__proto__的__proto__  一直有  直到找到顶层的__proto__
obj.__proto__.__proto__ = {
  address: "广东市"
}
console.log(obj.address);