import React, { useState } from "react";
// import * as yup from "yup";
import pictureApi from "../services/pictureApi";
import { toast } from "react-toastify";
import schema from "../Validator/picture.validator";

function AdminPost() {
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

  // const schema = yup.object({
  //   //* utiliser yup pour valider le formulaire
  //   description: yup
  //     .string()
  //     .min(4, "Description must be at least 4 characters")
  //     .max(255, "Description can't exceed 255 characters")
  //     .required("Description is required"),
  //   photo: yup.string().required("Photo is required"),
  // });

  const handleSubmit = (e) => {
    //* verifie si le formulaire est valide et post la picture
    e.preventDefault();
    schema
      .validate({ description, photo })
      .then(() => {
        pictureApi
          .post("api/product", {
            description,
            photo,
          })
          .then(() => {
            toast.success("Picture posted");
          })
          .catch((err) => console.log(err.response.data));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <form className="bg-gray-800 px-6 py-4 mt-6 shadow-xl border-solid w-full md:w-1/4 rounded-lg mb-10 flex flex-col items-center ">
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-400"
      >
        Description
      </label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="description"
        className=" w-2/3 rounded-md"
        id="description"
      />
      <label htmlFor="photo" className="text-sm font-medium text-gray-400 mt-4">
        Photo
      </label>
      <input
        onChange={(e) => setPhoto(e.target.value)}
        type="text"
        name="photo"
        className=" w-2/3 rounded-md"
        id="photo"
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="px-4 py-2 mt-4 text-xs font-semibold tracking-widest text-white uppercase bg-gray-900  rounded-md hover:text-cyan-400"
      >
        Create
      </button>
    </form>
  );
}

export default AdminPost;
