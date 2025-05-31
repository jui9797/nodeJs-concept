const var1 = require("./file2.js");
const { a: a3, add: add3, b: b3 } = require("./file3.js"); //aliasing
// const { a, add, b } = require("./file2.js"); // destructuring
console.log(var1);

console.log(a3);
console.log(add3(1, 2, 3)); // 6
console.log(b3); // 15
console.log(var1.a); // 5
console.log(var1.add(1, 2)); // 3
console.log(var1.b); // 10
console.log(var1.add(1, 2, 3)); // TypeError: var1.add is not a function
