exports.done = false
let a = require('./circular_dependency_a')
console.log(`在b.js中, a.done = $`);
exports.done = true
console.log();