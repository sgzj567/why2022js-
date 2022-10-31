(function () {
  let name = "why"
  console.log(name);
})()
const moduleA = (function () {
  let name = "john"
  let age = 19
  let height = 1.88
  console.log(name);
  return {
    name, age, height
  }
})()