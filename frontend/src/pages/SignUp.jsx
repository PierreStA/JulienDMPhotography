import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { userCurrentContext } from "../context/userContext";

import pictureAPI from "../services/pictureApi";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { userRole } = userCurrentContext();

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if ((email, password, name)) {
      pictureAPI
        .post("/api/user", { email, password, name })
        .then(() => navigate("/login"))
        .catch((err) => console.error(err));
    } else {
      alert("You must provide a name, an email and a password");
    }
  };
  console.log(userRole);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-800 ">
        <h1 className="text-lg text-cyan-400">
          {" "}
          « On aime ce qui nous a émerveillés, et on protège ce que l’on aime. »
        </h1>
        <p className="text-cyan-800">JY Cousteau</p>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden  shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleForm}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Name
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
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm "
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400 undefined"
              >
                Password
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
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="#"
              >
                Already registered?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-gray-400 uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
