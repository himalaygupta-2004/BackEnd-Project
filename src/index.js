// database connection will be from moongose
// app folder will be started with express
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "../src/db/index.js";
import { app } from "./app.js";

// connectDB();
dotenv.config({
  path: "./env",
});
async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server running at port :"${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log(" Execution Successful");
  }
};

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
