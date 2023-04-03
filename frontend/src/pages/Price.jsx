import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Price() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen  bg-gray-800 flex flex-wrap items-center  justify-center  ">
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
          <img
            src="/photos/logohypo.png"
            className="max-w-xl scale-150  mr-[20%] lg:block hidden"
          />
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
            <h1 className="text-gray-500 font-semibold text-xl ">
              One Picture
            </h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$19.00</h1>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <p className="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button
              onClick={handleClick}
              className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-dark hover:shadow-xl duration-200 hover:bg-blue-500"
            >
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-blue-900 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
            <h1 className="text-purple-200 font-semibold text-xl ">
              From 3 to 10
            </h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-white text-4xl font-black">$12.00</h1>
            </div>
            <div className="h-px bg-purple-400"></div>
            <div className="text-center mt-3">
              <p className="text-sm text-white text-opacity-80">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button
              onClick={handleClick}
              className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-blue-500 hover:shadow-xl duration-200 hover:bg-dark"
            >
              Buy Now
            </button>
          </div>
          <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
            <h1 className="text-gray-500 font-semibold text-xl ">
              More than 10
            </h1>
            <div className="text-center py-4 px-7">
              <h1 className="text-gray-700 text-4xl font-black">$10.00</h1>
            </div>
            <div className="h-px bg-gray-200"></div>
            <div className="text-center mt-3">
              <p className="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <button
              onClick={handleClick}
              className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-dark hover:shadow-xl duration-200 hover:bg-blue-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
