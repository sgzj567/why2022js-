var obj = {
  name: "why",
  age: 18,
}

// 1.禁止对象添加新的属性
// Object.preventExtensions(obj)

// obj.height = 1.88
// obj.address = "广州市"
// console.log(obj.height);

// 2.禁止对象配置/删除对象属性

// 法一
// for(var key in obj){
//   Object.defineProperty(obj,key,{
//     configurable:false,
//     enumerable:true,
//     writable:true,
// value:obj[key]
//   })
// }
// 法二
// Oject.seal(obj)
// delete obj.name
// console.log(obj.name);

// 3.让属性不可以修改(writeable:false)
Object.freeze(obj)
obj.name = "kobe" //在严格模式下会报错的
console.log(obj.name);