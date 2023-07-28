import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  const navigate = useNavigate();

  const handleClickStarted = () => {
    navigate("/picturelist");
  };
  const handleClickAbout = () => {
    navigate("/faq");
  };

  return (
    <>
      <Navbar />
      {/* <main className="h-full overflow-hidden bg-white dark:bg-gray-800"> */}
      <div className="relative h-full flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6  mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-[13rem] h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 className="flex flex-col text-6xl font-black mb-4  uppercase  sm:text-8xl text-white">
              Explore the
              <span className="text-5xl sm:text-7xl">Wild</span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
              Dive into the mesmerizing world of underwater photography and
              explore the untamed beauty of the deep sea. From vibrant coral
              reefs to majestic marine creatures, let my lens capture the
              wonders hidden beneath the waves. Join me on this aquatic
              adventure <span className="text-cyan-300">...</span>
            </p>
            <div className="flex mt-8">
              <button
                onClick={handleClickStarted}
                className="px-4 py-2 mr-4 text-white uppercase bg-cyan-300 border-2 border-transparent rounded-lg text-md hover:bg-cyan-400"
              >
                Get started
              </button>
              <button
                onClick={handleClickAbout}
                className="px-4 py-2 text-cyan-300 uppercase bg-transparent border-2 border-cyan-400 rounded-lg dark:text-white hover:bg-cyan-400 hover:text-white text-md"
              >
                About Me
              </button>
            </div>
          </div>
          <div className=" flex flex-col  sm:block sm:w-1/3 lg:w-3/5 ">
            <img
              src="/photos/pieuvre.png"
              className="max-w-xl m-auto scale-150 flex"
              alt="pieuvre"
            />
          </div>
        </div>
      </div>
      {/* </main> */}
    </>
  );
}

export default Home;
