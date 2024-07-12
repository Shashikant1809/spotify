import React, { useEffect, useState } from "react";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.Albums);
        await fetchAlbum();
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success("Album Removed ");
      }
    } catch (error) {
      toast.error("Some error occured");
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div className="">
        <div className="text-center sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center grp-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Colour</b>
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
              <p>{item.desc}</p>
              <input className="m-auto" type="color" value={item.bgColor} />
              <p
                className="cursor-pointer font-bold text-lg"
                onClick={() => removeAlbum(item._id)}
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

export default ListAlbum;
