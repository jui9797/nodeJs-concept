"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todos_routes_1 = require("./app/todos/todos.routes");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.todosRouter);
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get("/", (req, res) => {
    res.send("module 3 server is on");
});
exports.default = app;
//app.ts ar kaj: express app create kora , route handle kora
/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
