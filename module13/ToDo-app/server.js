const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (pathname === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the ToDo App!");
  }
  // get all todos
  else if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }
  // create a todo
  else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      const createdAt = new Date().toLocaleString();

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parsedAllTodos = JSON.parse(allTodos);
      console.log(allTodos);

      parsedAllTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body, createdAt }, null, 2));
    });
  }

  // get single todo
  else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    console.log(title);
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parsedData = JSON.parse(data);

    const todo = parsedData.find((todo) => todo.title === title);

    const stringifiedTodo = JSON.stringify(todo);
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(stringifiedTodo); //http://localhost:5000/todo?title=todo1
  }

  // update a todo
  else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");
    let data = "";

    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      const { body } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parsedAllTodos = JSON.parse(allTodos);

      const todoIndex = parsedAllTodos.findIndex(
        (todo) => todo.title === title
      );

      parsedAllTodos[todoIndex].body = body;

      fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(
        JSON.stringify(
          { title, body, createdAt: parsedAllTodos[todoIndex].createdAt },
          null,
          2
        )
      );
    });
  } //url: http://localhost:5000/todos/update-todo?title=todo1

  // delete a todo
  else if (pathname === "/todos/delete-todo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");
    const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parsedTodos = JSON.parse(allTodos);

    const filteredTodos = parsedTodos.filter((todo) => todo.title !== title);

    if (filteredTodos.length === parsedTodos.length) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Todo not found" }));
    } else {
      fs.writeFileSync(filePath, JSON.stringify(filteredTodos, null, 2), {
        encoding: "utf-8",
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Todo titled '${title}' deleted` }));
    }
  }

  // route not found
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route Not Found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("ToDo app server is running on port 5000");
});
