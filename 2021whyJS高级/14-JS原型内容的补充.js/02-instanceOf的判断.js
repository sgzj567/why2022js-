function inheritPrototype(SubType, SupperTYpe) {
  SubType.prototype = Object.create(SupperTYpe.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: SubType
  })
}

function Person() {

}

function Student() {

}
inheritPrototype(Student, Person)
var stu = new Student()
var p1 = new Person()
// instanceof 是判断后面的构造函数的(prototype)是否出现在前面的某个实例对象的原型链上
console.log(stu instanceof Student); //true
console.log(stu instanceof Person); //true
console.log(stu instanceof Object); //true  Object的原型是顶层原型
console.log(p1 instanceof Object);
console.log(Student.prototype.__proto__);
console.log(Person.prototype.__proto__);