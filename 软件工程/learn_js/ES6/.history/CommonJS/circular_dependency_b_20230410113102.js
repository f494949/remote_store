exports.done = false
let a = require('./circular_dependency_a')
console.log();
exports.done = true
console.log();