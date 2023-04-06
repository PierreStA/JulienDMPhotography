import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";

function AdminPost() {
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && price && photo) {
      pictureApi
        .post("api/product", {
          description,
          price: parseFloat(price[0]),
          photo,
        })
        .then(() => {})
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify a description, a price and a photo");
    }
  };

  return (
    <div className="flex flex-wrap mt-10 justify-evenly">
      <div className="flex flex-col items-center">
        <div className="w-full h-grow px-6 py-4 mt-6 overflow-hidden bg-dark shadow-xl border-solid sm:max-w-md sm:rounded-lg">
          <form className="bg-gray-800 " onSubmit={handleSubmit}>
            <div className="bg">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Description
              </label>
              <div className="flex flex-col ">
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
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-400 "
              >
                Id
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  name="Id"
                  className=" block w-2/3 rounded-md"
                  id="Id"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-400 "
              >
                Photo
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  type="text"
                  name="photo"
                  className=" block w-2/3 rounded-md"
                  id="photo"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="inline-flex items-center px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPost;