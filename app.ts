require("dotenv").config();

import express, { Application } from "express";
const cors = require("cors");
const bodyParser = require("body-parser");
const app: Application = express();
const port = 5000;
const routes = require("./routes");

try {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/v1", routes);
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.log(error);
  console.error(`Error occured: ${error.message}`);
}
