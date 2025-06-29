import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();
const port = 5000;
app.use(express.json());
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
