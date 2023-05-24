var obj = {
  name: "why",
  age: 19,
}
Object.defineProperty(obj, "address", {
  value: "北京市",
  configurable: false, //默认是FALSE 不可修改(删除 遍历等)
  enumerable: false, //该属性是否可以通过枚举 默认是false 进行配置
  writable: false, //该属性是否可以进行设置  默认是false
})

// value:
console.log(obj.address);
console.log(obj);

// configurable: false
delete obj.address //删除不了
console.log(obj);
console.log(obj.address);

console.log("----------");

// enumerable: false
for (var key in obj) {
  console.log(key);
}
console.log(Object.keys(obj)); //获取对象的key  Object.keys()  在node中是没有address的  但是在浏览器中是可以打印出来的   是为了方便调试

// writable:
obj.address = "深圳市" //修改不了
console.log(obj.address);