import mongoose from "mongoose";
import User from "./user";
import Admin from "./admin";
import Hotel from "./hotel";
import Booking from "./booking";
require("dotenv").config();

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URL_DEV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      numberOfRetries: 0,
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log("No connection to Database! ", err);
    });
};

export { connectDb, User, Admin, Hotel, Booking, mongoose };
