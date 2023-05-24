function inheritPrototype(SubType, SupperTYpe) {
  SubType.prototype = Object.create(SupperTYpe.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.running = function () {
  console.log(this.name + 'running')
}

Person.prototype.eating = function () {
  console.log(this.name + 'eating')
}
// 只是继承了对象
function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.score = score
  this.sno = sno
}


// 继承方法  封装以下两个方法
// Student.prototype = Object.create(Person.prototype)
// Object.defineProperty(Student.prototype, "constructor", {
//     enumerable: false,
//     writable: true,
//     configurable: true,
//     value: Student
// })

inheritPrototype(Student, Person)
Student.prototype.studying = function () {
  console.log(this.name + 'studying');
}

var stu = new Student("why", 19, ["kobe", "zxk"], 111, 456)
console.log(stu);
stu.studying()
stu.eating() //此时只继承了对象还没有继承方法
console.log(stu.constructor.name);