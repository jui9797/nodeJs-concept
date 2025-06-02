const a = 5;
const b = 10;
const add = (param1, param2) => {
  return param1 + param2;
};
// module.exports = add;
module.exports = { a, add, b };
console.log(module); //module  holo akta object, jekhane module er shob information thake
// console.log(module.exports); // module.exports holo akta object, jekhane amra jeta export kori
// console.log(module.exports === exports); // true, karon exports holo module.exports er ekta reference
//console.log(module) aikhne exporta akta func add hoice jeta add function
//console a a and add func module ar export aobject ar moddhe ache
