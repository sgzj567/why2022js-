function Person() {

}

// console.log(Person.prototype.constructor);
// console.log(Object.getOwnPropertyDescriptors(person.prototype));


console.log(Person.prototype.__proto__);
console.log(Person.prototype.__proto__.__proto__); //null  顶层对象