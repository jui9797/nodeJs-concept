import "dotenv/config";
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jwr0f.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`,
    );
    console.log("Connected to MongoDB Using Mongoose!!");
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
