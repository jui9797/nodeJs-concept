import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();
const port = 5000;
const todosRouter = express.Router();
//middleware
app.use(express.json());
app.use("/todos", todosRouter);

const filePath = path.join(__dirname, "../db/todo.json");
app.get("/", (req: Request, res: Response) => {
  res.send("module 3 server is on");
});
app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log(data);
  res.json(data);
});
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  res.send({ title, body });
});

export default app;

//app.ts ar kaj: express app create kora , route handle kora

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
