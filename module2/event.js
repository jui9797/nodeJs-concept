const EventEmitter = require("events");
class SchoolBell extends EventEmitter {}
const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Yahoo! class ache");
});
schoolBell.on("ring", () => {
  console.log("Ohhoo! class ache abar");
});
schoolBell.on("broken", () => {
  console.log("Oh No..! class ki r hobena ?");
});
schoolBell.emit("ring");
schoolBell.emit("broken");
