exports.done = false
let a = require('./circular_dependency_a')
console.log(`在b`);
exports.done = true
console.log();