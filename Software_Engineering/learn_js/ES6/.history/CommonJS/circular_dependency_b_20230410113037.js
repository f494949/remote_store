exports.done = false
let a = require(`在b.js中, a.done = ${a.done}`)
exports.done = true
console.log();