// var obj1={}
// var obj2=new Object()
// function Person(){

// }

// var p=new Person()


// console.log();

var obj = {
  name: "why",
  age: 18,
}

// Object.prototype 顶层原型链
// 每个函数也有一个Object对象  也就是顶层对象 它有一个prototype
console.log(obj.__proto__);
console.log(Object.prototype);
console.log(Object.prototype.__proto__); //null
console.log(obj.__proto__ === Object.prototype);

// 由于Object.prototype是不可枚举的  所以用以下方法获取他的属性
console.log(Object.getOwnPropertyDescriptors(Object.prototype));

// Object直接创建出来的对象的原型就都是[[Object:null prototype]]{}.

// [[Object:null prototype]]{}.有什么特殊的吗

// 特殊一:该对象有原型属性  但是他的原型属性已经是指向null  也就是顶层原型
// 特殊二:该对象上有很多的默认属性和方法