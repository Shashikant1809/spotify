import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import AddAlbum from "./pages/AddAlbum";
import ListAlbum from "./pages/ListAlbum";
import AddSongs from "./pages/AddSongs";
import ListSong from "./pages/ListSong";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const url = "https://spotify-backend-d732.onrender.com";
const App = () => {
  return (
    <div>
      <div className="flex items-start min-h-screen">
        <ToastContainer />
        <Sidebar />
        <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
          <Navbar />
          <div className="pt-8 pl-5 sm:pl-12">
            <Routes>
              <Route path="add-song" element={<AddSongs />}></Route>
              <Route path="/" element={<AddSongs />}></Route>
              <Route path="add-album" element={<AddAlbum />}></Route>
              <Route path="list-song" element={<ListSong />}></Route>
              <Route path="list-album" element={<ListAlbum />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
