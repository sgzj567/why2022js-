var obj = {
  name: "why",
  age: 18,
}

// 属性描述符是一个对象
Object.defineProperty(obj, height, {
  value: 1.88
})

console.log(obj); //此时对应对象 是没有height 的因为他不能被枚举或者遍历
console.log(obj.height);