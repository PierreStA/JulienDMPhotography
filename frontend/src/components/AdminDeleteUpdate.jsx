import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";

function AdminDeleteUpdate() {
  const [photo, setPhoto] = useState("");
  const [productData, setProductData] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState([]);
  const [idProduct, setIdProduct] = useState("");

  useEffect(() => {
    pictureApi
      .get("api/product")
      .then((res) => setProductData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (description && price && photo) {
      pictureApi
        .put(`api/product/${idProduct}`, {
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

  const HandleDeleteProduct = (e) => {
    e.preventDefault();
    pictureApi
      .delete(`api/product/${idProduct}`)
      .then(() => {})
      .catch((err) => console.log(err.response.data));
  };

  function handleSetProduct(e) {
    setIdProduct(e.target.value);
  }

  return (
    <div>
      <div className=" px-6 py-4 mt-6 overflow-hidden bg-gray-800 shadow-xl border-solid sm:max-w-md sm:rounded-lg mb-10">
        <div className="flex flex-col items-center ">
          <form className="bg-gray-800 " onSubmit={handleUpdate}>
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
                Numéro
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  name="Numéro"
                  className=" block w-2/3 rounded-md"
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
            <div className="mt-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-400 "
              >
                Photo
              </label>
              <select
                value={idProduct}
                onChange={handleSetProduct}
                className="pl-2 text-black h-10 rounded-lg bg-gray-200 shadow-lg shadow-blue-500/50 "
              >
                {productData.map((product) => (
                  <option
                    className="text-black"
                    value={product.id}
                    key={product.photo}
                  >
                    {product.photo}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={handleUpdate}
              className="inline-flex items-center px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Update
            </button>
            <button
              type="submit"
              onClick={HandleDeleteProduct}
              className=" ml-20 inline-flex items-center px-4 py-2 mt-4  text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminDeleteUpdate;
