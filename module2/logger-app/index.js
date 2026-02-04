// console.log(process.argv);
/**
 * [
  'C:\\Users\\Lenovo\\AppData\\Local\\fnm_multishells\\30304_1750012160945\\node.exe',
  'D:\\node.js-concept\\module2\\logger-app\\index.js'
]
 */
const path = require("path");
const fs = require("fs");
const inputArguements = process.argv.slice(2);
const text = inputArguements.join(" ").concat("\n");
const timeStamp = new Date().toISOString();
const message = `Text: ${text} Date: ${timeStamp} \n`;
if (!message) {
  console.log(" Please provide a text");
  console.log("Example: node index.js hello world");
  process.exit(1);
}
const filePath = path.join(__dirname, "log.txt");
fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
  console.log("Your LOgged added successfully");
});
// console.log(text);
console.log(filePath);
/**
 * PS D:\node.js-concept\module2\logger-app> node index.js jui jannat
[
  'C:\\Users\\Lenovo\\AppData\\Local\\fnm_multishells\\19500_1750052745896\\node.exe',
  'D:\\node.js-concept\\module2\\logger-app\\index.js',
  'jui',
  'jannat'
]
jui jannat
 * 
 */
