import express from "express";
import path from "path";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import cors from "cors";

export const app = express();
app.use(cors());
config({
  path: "./data/config.env",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nice qoeking with you");
});

app.use("/api/v1/todo", userRouter);

// app.use(express.static(path.join(path.resolve(), "public")));

// app.set("view engine", "ejs");
