import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
export const todosRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/todo.json");

//get  todos
todosRouter.get("/", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  console.log("from todos router", data);
  res.json({ message: "from todos router", data });
});

//create todo
todosRouter.post("/create-todo", (req: Request, res: Response) => {
  const { title, body } = req.body;
  res.send({ title, body });
});

//search parameter
todosRouter.get("/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("todo search by title");
});

//update todo
todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("todo is updated");
});

//delete todo
todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {
  const { title, body } = req.body;
  console.log(title, body);
  res.send("todo is deleted");
});
