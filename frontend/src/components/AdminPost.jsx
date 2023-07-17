import React from "react";
import { useState } from "react";
import pictureApi from "../services/pictureApi";
import { toast } from "react-toastify";

function AdminPost() {
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  // const [price, setPrice] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && photo) {
      pictureApi
        .post("api/product", {
          description,
          photo,
        })
        .then(() => {
          toast.success("Picture posted");
        })
        .catch((err) => console.log(err.response.data));
    } else {
      toast.error("An error occured, please try again");
    }
  };

  return (
    <form
      className="bg-gray-800 px-6 py-4 mt-6 shadow-xl border-solid sm:max-w-md sm:rounded-lg mb-10 flex flex-col items-center md:block"
      onSubmit={handleSubmit}
    >
      <label htmlFor="text" className="block text-sm font-medium text-gray-400">
        Description
      </label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="description"
        className="block w-2/3 rounded-md"
        id="description"
        minLength="4"
        maxLength="100"
        size="80"
      />
      {/* 
      <label htmlFor="text" className="text-sm font-medium text-gray-400 mt-4">
        Number
      </label>
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        name="Number"
        className="block w-2/3 rounded-md"
        id="Number"
      /> */}

      <label htmlFor="text" className="text-sm font-medium text-gray-400 mt-4">
        Photo
      </label>
      <input
        onChange={(e) => setPhoto(e.target.value)}
        type="text"
        name="photo"
        className="block w-2/3 rounded-md"
        id="photo"
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 mt-4 text-xs font-semibold tracking-widest text-white uppercase bg-gray-900 border border-transparent rounded-md hover:text-cyan-400"
      >
        Create
      </button>
    </form>
  );
}

export default AdminPost;
