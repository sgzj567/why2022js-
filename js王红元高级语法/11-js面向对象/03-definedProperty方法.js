var obj = {
  name: "why",
  age: 18,
}

// 属性描述符是一个对象三个参数 对象 属性prop 描述符
Object.defineProperty(obj, "height", {
  value: 1.88,
})

console.log(obj); //此时对应对象 是没有height 的因为他不能被枚举或者遍历 但是浏览器中可以打印出来 因为浏览器里面自动给了相应的配置
// node中是打印不出来的
// console.log(obj.height);