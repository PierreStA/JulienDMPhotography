import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import pictureAPI from "../services/pictureApi";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const schemaValidation = Yup.object().shape({
    //* utiliser yup pour valider le formulaire
    name: Yup.string().required("Nom est requis"),
    email: Yup.string().email("Email non valide").required("Email est requis"),
    password: Yup.string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Le mot de passe doit contenir au moins un caractère spécial"
      )
      .required("Mot de passe est requis"),
  });

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await schemaValidation.validate(
        //* verifie si le formulaire est valide
        { name, email, password },
        { abortEarly: false } //* permet d'afficher tous les messages d'erreurs
      );
      pictureAPI
        .post("/api/user", { email, password, name })
        .then(() => navigate("/login"))
        .catch((err) => console.error(err));
    } catch (validationError) {
      //* si le formulaire n'est pas valide, affiche une alerte
      alert("Veuillez remplir tous les champs correctement.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-800 ">
        <img
          src="/photos/scaphandre.png"
          className=" md:block max-w-xl md:mr-20 scale-100 "
        />
        <h1 className="text-lg text-cyan-400">
          {" "}
          “We love what amazed us, and we protect what we love. »
        </h1>
        <p className="text-cyan-800">JY Cousteau</p>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden  shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleForm}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Nom
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-black"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Mot de passe
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <Link
                to="/login"
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="#"
              >
                Déjà inscrit ?
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-gray-400 uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                S'inscrire
              </button>
            </div>
            <label
              htmlFor="scales"
              className=" text-gray-600 text-sm col-span-2 "
            >
              <input
                type="checkbox"
                id="scales"
                className=" mr-2 mt-1"
                required
              />
              <span className="max-w-[80%]">
                By registering on our site, you agree to the collection and
                processing of your personal data. To find out more, please read
                our{" "}
                <a
                  href="/privacy-policy"
                  className="text-cyan-400 hover:text-cyan-600 underline"
                  _target="blank" //* permet d'ouvrir le lien dans un nouvel onglet
                >
                  privacy policy
                </a>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
