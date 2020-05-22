import express from "express";
import { connectDb } from "./models";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;
app.use(
  cors({
    origin: ["https://hotel.netlify.app", "http://localhost:3000"],
    credentials: true,
  })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// config app routes
routes(app);
// connect database
connectDb();
// start server
app.listen(port || 8000, () => console.log(`Listening on port ${port}`));
