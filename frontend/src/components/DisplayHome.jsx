import React, { useContext } from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
// import { albumsData, songsData } from "../assets/assets";

import SongItem from "./SongItem";
import { PlayerContext } from "../Context/PlayerContex";
const DisplayHome = () => {
  const { albumsData, songsData } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => {
            return (
              <AlbumItem
                key={index}
                image={album.image}
                name={album.name}
                desc={album.desc}
                id={album._id}
              />
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((data, index) => (
            <SongItem
              key={index}
              name={data.name}
              image={data.image}
              id={data._id}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
