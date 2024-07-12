import React, { useState, useEffect } from "react";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
const ListSong = () => {
  const [data, setData] = useState([]);

  const fetechSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error("Some error occured");
    }
  };

  const removeSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id });
      if (response.data.success) {
        toast.success("Song removed successfully");
        fetechSongs();
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  useEffect(() => {
    fetechSongs();
  }, []);

  return (
    <div>
      <p className="font-bold">All Songs List</p>
      <br />
      <div className="">
        <div className="text-center sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center grp-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
        </div>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center grp-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100"
            >
              <img className="w-12 m-auto" src={item.image} />

              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p
                className="cursor-pointer font-bold text-lg"
                onClick={() => removeSong(item._id)}
              >
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSong;
