//syncronous way
//1. file read/i/o interview thaskssubgke theread,

const fs = require("fs");
console.log("Task-1");
// console.log(data);
const text = "Learning file system method";
console.log("Task-3");
fs.writeFileSync("./hello.txt", text);
const data = fs.readFileSync("./hello.txt", { encoding: "utf8" });
console.log("Task-4");
console.log(data); //output: Task-1 Task-3 Task-4 Learning file system method
// console.log(data);     // Output: Learning file system method

//Asyncronous way
