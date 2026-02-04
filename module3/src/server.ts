import app from "./app";
let server;
const port = 5000;
const bootstrap = async () => {
  server = app.listen(port, () => {
    console.log(`Module 3 is running on the http://localhost:${port}`);
  });
};
bootstrap();

// server.ts ar kaj : server on / off kora , server error handle kora
