import { v2 as cloudinary } from "cloudinary";
import AlbumModel from "../models/albumModel.js";
import { response } from "express";

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColor = req.body.bgColor;
    const imageFile = req.file;
    // uploading these file on cloudinary storage
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };

    const Album = AlbumModel(albumData);
    await Album.save();
    res.json({ success: true, message: "Album Added" });
  } catch (error) {
    res.json({ success: false, message: "some error occured" });
    console.log(error);
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await AlbumModel.find({});
    res.json({ success: true, Albums: allAlbums });
  } catch (error) {
    res.json({ success: false });
  }
};

const removeAlbum = async (req, res) => {
  try {
    await AlbumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Album removed succesfully" });
  } catch (error) {
    res.json({ success: false, message: "some error occured" });
  }
};

export { listAlbum, addAlbum, removeAlbum };
