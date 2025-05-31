let a = 5; //global scope
((name) => {
  let a = 10; //block scope
  console.log(`Learning ${name}`);
})("node");
// IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined.
// It is a design pattern that helps to avoid polluting the global scope and can be used to create private variables and functions.
console.log(a); //5
