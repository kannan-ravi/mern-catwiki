import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import root from "./router/root.js";
import catBreed from "./router/catName.js";
import catImage from "./router/catImage.js";
import connectDB from "./config/dbConnection.js";
dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/api", root);
app.use("/api/breeds", catBreed);
app.use("/api/image", catImage);

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo DataBase");
  app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`);
  });
});
