exports.done = false
let a = require('./circular_dependency_a')
exports.done = true
console.log();