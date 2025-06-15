const fs = require("fs");

const readStream = fs.createReadStream("./hello-world.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./hello.txt", {
  encoding: "utf-8",
});

readStream.on("data", (data) => {
  console.log(data);
  writeStream.write(data, (err) => {
    if (err) {
      throw new Error("Write Error: " + err.message);
    }
  });
});

readStream.on("error", (err) => {
  console.error("Read Error:", err.message);
});

writeStream.on("error", (err) => {
  console.error("Write Error:", err.message);
});

readStream.on("end", () => {
  console.log("Reading ended.");
  writeStream.end();
});

writeStream.on("finish", () => {
  console.log("Written successfully.");
});
