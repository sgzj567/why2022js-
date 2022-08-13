function Student(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

function Teacher(name, age, title) {
  this.name = name
  this.age = age
  this.title = title
}
Student.prototype.running = function () {
  console.log(this.name + "在跑步");
}

Student.prototype.eating = function () {
  console.log(this.name + "在吃饭");
}
Teacher.prototype.running = function () {
  console.log(this.name + "在跑步");
}

Teacher.prototype.eating = function () {
  console.log(this.name + "在吃饭");
}