import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pictureAPI from "../services/pictureApi";
import { userCurrentContext } from "../context/userContext";

export default function NavBar() {
  const { setUserRole } = userCurrentContext();
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const handleDisconnection = () => {
    pictureAPI
      .get("/api/logout")
      .then(
        () => localStorage.setItem("userRole", JSON.stringify("")),
        setUserRole(""),
        navigate("/")
      )
      .catch((err) => console.log(err));
  };
  console.log(localStorage.getItem("userRole"));
  return (
    <nav className="w-full bg-dark shadow">
      <div className="justify-between mr-10   md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl font-bold text-white ml-8 ">
              Julien
              <strong>
                Dm
                <span className="text-cyan-300">.</span>
              </strong>
              Photography
            </h2>
            <div className="md:hidden lg:hidden ">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <nav className=" justify-evenly space-y-8 md:flex md:space-x-6 md:space-y-0 text-lg">
              <div className="text-white hover:text-indigo-200 ">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="text-white hover:text-indigo-200">
                <NavLink to="/picturelist">Photos</NavLink>
              </div>
              <div className="text-white hover:text-indigo-200">
                <NavLink to="/price">Pricing</NavLink>
              </div>
              <div className="text-white hover:text-indigo-200">
                <NavLink to="/order">Order</NavLink>
              </div>
              <div className="text-white hover:text-indigo-200">
                <NavLink to="/faq">Faq</NavLink>
              </div>
              <div className="text-white hover:text-indigo-200">
                <NavLink to="/admin">Admin</NavLink>
              </div>
            </nav>
            <div className="mt-3 space-y-2 lg:hidden md:hidden ">
              <div className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                <NavLink to="/login">Sign in</NavLink>
              </div>
              <div className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-gray-400 rounded-md shadow hover:bg-gray-500">
                <NavLink to="/signup">Sign up</NavLink>
              </div>
              <div
                onClick={handleDisconnection}
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Logout
              </div>
            </div>
          </div>
        </div>
        <div className="hidden mt-3 space-x-2 md:flex lg:flex justify-evenly ">
          <div className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
            <NavLink to="/login">Sign in</NavLink>
          </div>
          <div className="px-4 py-2 text-gray-800 bg-gray-400 rounded-md shadow hover:bg-gray-500">
            <NavLink to="/signup">Sign up</NavLink>
          </div>
          <div
            onClick={handleDisconnection}
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-200"
          >
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
}
