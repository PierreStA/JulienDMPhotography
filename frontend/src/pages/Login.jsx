import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import pictureAPI from "../services/pictureApi";
import { userCurrentContext } from "../context/userContext";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserRole } = userCurrentContext(); //*take the setUserRole from the context

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger lors de la soumission du formulaire

    if (email && password) {
      pictureAPI
        .post("/api/login", { email, password })
        .then((res) => {
          const role = { roles: JSON.parse(res.data.roles) }; // Analyse des rôles depuis le backend
          setUserRole(role);
          localStorage.setItem("userRole", JSON.stringify(role)); // Stockage des rôles dans le stockage local
          toast.success("Welcome back !");
          navigate("/");
        })
        .catch((error) => {
          // toast.error("Invalid email or password");
          alert("Invalid email or password");
        });
    } else {
      toast.error("Please specify email and password");
      alert("Please specify email and password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col-reverse items-center h-screen  justify-center sm:pt-0 bg-gray-800">
        <img
          src="/photos/scaphandre.png"
          className=" md:block max-w-xl md:mr-20 scale-100 "
        />

        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-gray-800 flex flex-col ">
          <form
            className="bg-gray-800 shadow-xl border-solid max-w-md rounded-lg flex flex-col items-center justify-center"
            onSubmit={handleSubmit} //when submitting the form, call the handleSubmit function
          >
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setEmail(e.target.value)} //take the value of the input and set it to the state
                  type="email"
                  name="email"
                  className="block w-2/3 rounded-md"
                  id="email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400 "
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className=" block w-2/3 rounded-md"
                  id="password"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Connexion
              </button>
              <div className="flex items-center justify-end ">
                <Link
                  to="/signup"
                  className="text-sm text-gray-600 underline hover:text-gray-900 "
                >
                  Pas encore inscrit ?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
