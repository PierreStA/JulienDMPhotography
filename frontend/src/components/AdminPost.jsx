import React, { useState } from "react";
import * as yup from "yup";
import pictureApi from "../services/pictureApi";
import { toast } from "react-toastify";

function AdminPost() {
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");

  const schema = yup.object({
    //* utiliser yup pour valider le formulaire
    description: yup
      .string()
      .min(4, "Description must be at least 4 characters")
      .max(500, "Description can't exceed 500 characters")
      .required("Description is required"),
    photo: yup.string().required("Photo is required"),
  });

  const handleSubmit = (e) => {
    e.preventDefault(); //* previent le rechargement de la page lors de la soumission du formulaire
    schema //* check si le formulaire est valide
      .validate({ description, photo })
      .then(() => {
        pictureApi
          .post("api/product", {
            //*utilise la methode post pour envoyer les données du formulaire dans la bdd
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
        size="80"
      />
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
