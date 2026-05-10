//syncronous way
//1. file read/i/o interview thaskssubgke theread,

// const fs = require("fs");
// console.log("Task-1");
// console.log(data);
// const text = "Learning file system method";
// console.log("Task-3");
// fs.writeFileSync("./hello.txt", text);
// const data = fs.readFileSync("./hello.txt", { encoding: "utf8" });
// console.log("Task-4");
// console.log(data);        //output: Task-1 Task-3 Task-4 Learning file system method
// console.log(data);     // Output: Learning file system method

//Asyncronous way
const readStream = fs.createReadStream("./hello-world.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./hello.txt", { encoding: "utf-8" });

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Error", err);
    }
  });
});

readStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
});

writeStream.on("error", (err) => {
  if (err) {
    throw Error("Error", err);
  }
});

readStream.on("end", () => {
  console.log("reading ended");
  writeStream.end();
});

writeStream.on("finish", () => {
  console.log("Written successfuly");
});
