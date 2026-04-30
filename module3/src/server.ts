import app from "./app";
import { client } from "./config/mongodb";
let server;
const port = 5000;

const bootstrap = async () => {
  await client.connect();
  console.log("Connected to MongoDB");

  server = app.listen(port, () => {
    console.log(`Module 3 is running on the http://localhost:${port}`);
  });
};
bootstrap();

// server.ts ar kaj : server on / off kora , server error handle kora

//todos-user
//yyqpAwLTSbPhZRoy
