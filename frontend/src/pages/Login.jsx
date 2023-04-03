import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import pictureAPI from "../services/pictureApi";
import { userCurrentContext } from "../context/userContext";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setName, setUserEmail, setUserId } = userCurrentContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      pictureAPI
        .post("/api/login", { email, password })
        .then((res) => {
          // setUser(res.data);
          setUserName(res.data.name);
          setUserEmail(res.data.email);
          setUserId(res.data.userId);

          localStorage.setItem("userName", JSON.stringify(res.data.name)); // set dans le local storage
          localStorage.setItem("userEmail", JSON.stringify(res.data.name));
          localStorage.setItem("userId", JSON.stringify(res.data.name));
          navigate("/");
        })
        .catch((err) => console.log(err.response.data));
    } else {
      alert("Please specify email and password");
    }
  };
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gradient-to-b">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-dark">
              Take a deap breathe
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className=""
                  id="email"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  id="password"
                />
              </div>
              <button
                type="submit"
                onClick={handleClick}
                className="inline-flex items-center px-4 py-2 mt-4 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Connexion
              </button>
              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="#"
                >
                  Pas encore inscrit ?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
