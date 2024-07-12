import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumController.js";
import express from "express";

import upload from "../middlewire/multer.js";

const AlbumRouter = express.Router();

AlbumRouter.post("/add", upload.single("image"), addAlbum);
AlbumRouter.get("/list", listAlbum);
AlbumRouter.post("/remove", removeAlbum);

export default AlbumRouter;
