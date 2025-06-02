// import var1 from "./file2.mjs";

import { a as A3, add as Add3, b as B3 } from "./file3.mjs"; //aliasing
import { a, add, b } from "./file2.mjs"; // destructuring
// console.log(var1);

console.log(A3);
console.log(Add3(1, 2, 3)); // 6
console.log(B3); // 15
// console.log(var1.a);    // 5
console.log(a);
console.log(add(2, 3));
console.log(b);
// console.log(var1.add(1, 2));     // 3
// console.log(var1.b);     // 10
// console.log(var1.add(1, 2, 3));      // TypeError: var1.add is not a function
