function Person() {}

function Student() {}
var p1 = new Person()
var s = new Student()
console.log(p1.__proto____proto__ === Object.__proto__); //
console.log(p1.__proto____proto__ === Person.__proto__); //
console.log(p1.__proto____ === Person.__proto__); //
console.log(p1.__proto____ === Person.prototype); //
console.log(Function.prototype === Object.__proto__); //
let user = {
	name: "John",
	age: 30,
	isAdmin: true
};

for (let key in user) {
	// keys
	console.log(key);
	// name, age, isAdmin
	// 属性键的值
	console.log((user[key]));
	// John, 30, true
}