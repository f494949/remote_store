let a = require('./circular_dependency_a')
let b = require('./circular_dependency_b')
console.log(`在main.js中, a.done = ${a.done}, b.done = ${}`)