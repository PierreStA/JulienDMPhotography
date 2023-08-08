import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";
import { toast } from "react-toastify";

function AdminDeleteUpdate() {
  const [photo, setPhoto] = useState("");
  const [productData, setProductData] = useState([]);
  const [description, setDescription] = useState("");
  const [idProduct, setIdProduct] = useState("");

  useEffect(() => {
    //* get all pictures from database / use fordropdown menu
    pictureApi
      .get("api/product")
      .then((res) => setProductData(res.data))
      .catch((err) => console.error(err));
  }, []); //*empty array to avoid infinite loop

  const handleUpdate = (e) => {
    //* update picture
    e.preventDefault();
    if (description && photo) {
      pictureApi
        .put(`api/product/${idProduct}`, {
          description, //* update description and photo of picture with idProduct
          photo,
        })
        .then(() => {
          toast.success("Picture updated");
        })
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify a description and a photo");
    }
  };

  const HandleDeleteProduct = (e) => {
    e.preventDefault();
    pictureApi
      .delete(`api/product/${idProduct}`) //* delete picture with idProduct
      .then(() => {
        toast.success("Picture deleted");
      })
      .catch(
        (err) => console.log(err.response.data),
        toast.error("An error occured, please try again")
      );
  };

  function handleSetProduct(e) {
    setIdProduct(e.target.value); //* set idProduct to the value of the selected picture
  }

  return (
    <form
      className="bg-gray-800 px-6 py-4 mt-6 shadow-xl border-solid sm:max-w-md sm:rounded-lg mb-10 flex flex-col items-center md:block"
      onSubmit={handleUpdate} //*when submitting the form, call the handleSubmit function
    >
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
        minLength="4" //* set min and max length of description
        maxLength="100"
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
        // value={idProduct}
        onChange={handleSetProduct}
        className="pl-2 text-black h-10 rounded-lg bg-gray-200 shadow-lg shadow-blue-500/50 "
      >
        {productData.map((product) => (
          <option className="text-black" value={product.id} key={product.photo}>
            {product.photo}
          </option>
        ))}
      </select>
      <div className="md:block flex flex-row items-center justify-center mt-4">
        <button
          type="submit"
          onClick={handleUpdate}
          className="px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase bg-gray-900 border border-transparent rounded-md hover:text-cyan-400"
        >
          Update
        </button>
        <button
          type="submit"
          onClick={HandleDeleteProduct}
          className="px-4 py-2 mt-4 ml-12 text-xs font-semibold tracking-widest text-white uppercase bg-gray-900 border border-transparent rounded-md hover:text-cyan-400"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default AdminDeleteUpdate;
