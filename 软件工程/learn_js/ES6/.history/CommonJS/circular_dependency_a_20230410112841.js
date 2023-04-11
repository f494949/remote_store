exports.done = false
let b = require('./circular_dependency_b')
console.log(`在a.js中, b.done = ${b.done}`)
exports.done = true
console.log();