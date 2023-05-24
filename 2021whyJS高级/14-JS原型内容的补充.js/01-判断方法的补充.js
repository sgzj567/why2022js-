var obj = {
  name: "why",
  age: 18,
}

// 后面的参数是直接给info 对象添加属性的
var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true,
  }
})
console.log(info);
console.log(info.__proto__);
console.log(info.name); //在原型上的
console.log(info.age); //在原型上的
console.log(info.address); //在自己上的
console.log("-----------");
// 判断是在自己身上还是在原型上的 hasOwnProperty  在自己身上的返回true (不是原型上的属性) 即使它的可枚举属性设置的是false 也会查到
console.log(info.hasOwnProperty("address"));
console.log(info.hasOwnProperty("age"));
console.log(info.hasOwnProperty("name"));

// in操作符  不管是在原型上还是在对象上只要在就返回true  即使它的可枚举属性设置的是false 也会查到
console.log("address" in info);
console.log("age" in info);
console.log("name" in info);

// 如果它的可枚举属性是false  就会查不到
for (var key in info) {
  console.log(key);
}