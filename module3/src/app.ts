import express, { Application, Request, Response } from "express";

import path from "path";
import { todosRouter } from "./app/todos/todos.routes";
const app: Application = express();

//middleware
app.use(express.json());
app.use("/todos", todosRouter);

const filePath = path.join(__dirname, "../db/todo.json");
app.get("/", (req: Request, res: Response) => {
  res.send("module 3 server is on");
});

export default app;

//app.ts ar kaj: express app create kora , route handle kora

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
