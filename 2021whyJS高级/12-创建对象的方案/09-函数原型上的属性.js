function foo() {

}

console.log(foo.prototype); //打印出来是空的  是因为可枚举属性设置为了空( enumerable: false)
console.log(Object.getOwnPropertyDescriptors(foo.prototype));
// foo.prototype 这个对象里面有个属性 constructor  是ECMA标准添加的 
// prototype.constructor = 构造函数本身
console.log(foo.prototype.constructor);

// 直接修改整个prototype对象
foo.prototype = {
  // constructor:{},因为本身构造函数里就有constructor 属性 所以必须创建一个  但是 里面的writeable  configurable 属性默认是 false 而constructor里面的是true 所以在开发中要用definedProperty来创建
  name: "why",
  age: 19,
  height: 1.88,
}
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo,
})