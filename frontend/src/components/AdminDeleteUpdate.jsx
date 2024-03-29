import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";
import { toast } from "react-toastify";
import schema from "../Validator/picture.validator";

function AdminDeleteUpdate() {
  const [photo, setPhoto] = useState("");
  const [productData, setProductData] = useState([]);
  const [description, setDescription] = useState("");
  const [idProduct, setIdProduct] = useState("");

  useEffect(() => {
    //* recupere les pictures et set productData
    pictureApi
      .get("api/product")
      .then((res) => setProductData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = (e) => {
    //* update la description  de la picture via son id
    e.preventDefault();
    schema.validate({ description, photo }).then(() => {
      pictureApi
        .put(`api/product/${idProduct}`, {
          description,
          photo,
        })
        .then(() => {
          toast.success("Picture updated");
        })
        .catch((err) => console.log(err.response.data));
    });
  };

  const HandleDeleteProduct = (e) => {
    //* supprime la picture avec l'id idProduct
    e.preventDefault();
    pictureApi
      .delete(`api/product/${idProduct}`)
      .then(() => {
        toast.success("Picture deleted");
      })
      .catch((err) => console.log(err.response.data));
  };

  function handleSetProduct(e) {
    setIdProduct(e.target.value); //* set l'id de la picture selectionnée dans le select
  }

  return (
    <form className="bg-gray-800 px-6 py-4 mt-6 shadow-xl border-solid sm:max-w-md sm:rounded-lg mb-10 flex flex-col items-center ">
      <label
        htmlFor="text"
        className="block text-sm font-medium text-gray-400 "
      >
        Description
      </label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="description"
        className="block w-2/3 rounded-md"
        id="description"
        size="80"
      />
      <label htmlFor="text" className="text-sm font-medium text-gray-400 mt-4">
        Name
      </label>
      <input
        onChange={(e) => setPhoto(e.target.value)}
        type="text"
        name="photo"
        className=" block w-2/3 rounded-md  "
        id="photo"
      />
      <label
        htmlFor="photo"
        className="block text-sm font-medium text-gray-400 mt-4"
      >
        Photo
      </label>
      <select
        onChange={handleSetProduct}
        className="pl-2 text-black h-10 rounded-lg bg-gray-200 shadow-lg shadow-blue-500/50 "
      >
        {productData.map((product, index) => (
          <option className="text-black" value={product.id} key={index}>
            {product.photo}
          </option>
        ))}
      </select>
      <div className="md:block flex flex-row items-center justify-center mt-4">
        <button
          type="submit"
          onClick={handleUpdate}
          className="px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase bg-gray-900  rounded-md hover:text-cyan-400"
        >
          Update
        </button>
        <button
          type="submit"
          onClick={HandleDeleteProduct}
          className="px-4 py-2 mt-4 ml-12 text-xs font-semibold tracking-widest text-white uppercase bg-gray-900 rounded-md hover:text-cyan-400"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default AdminDeleteUpdate;
