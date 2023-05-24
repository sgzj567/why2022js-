var obj = {
  name: "why",
  age: 18,
}

// 获取属性'
console.log(obj.name);

// 给属性赋值
obj.name = "kobe"
console.log(obj.name);
console.log(obj);

// 删除对象的属性
// delete obj.name
// console.log(obj);

// 需求:对属性操作时 进行一些限制
// 限制:不允许属性赋值  不允许某个属性被删除  不允许某些属性在遍历时被遍历出来

// 遍历属性
for (var key in obj) {
  console.log(key);
}