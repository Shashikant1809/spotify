import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import AlbumRouter from "./src/routes/albumRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//middlewires
app.use(express.json());
app.use(cors());

//initializing routes

app.use("/api/song", songRouter);
app.use("/api/album", AlbumRouter);
app.get("/", (req, res) => {
  res.send("express is working");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running at http://localhost:${port}`);
});
