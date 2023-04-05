import React from "react";
import Navbar from "../components/Navbar";
import AdminPost from "../components/AdminPost";
import AdminPutUpdate from "../components/AdminPutUpdate";

function Admin() {
  return (
    <div className="bg-dark h-grow w-full h-full ">
      <Navbar />
      <div className="flex flex-wrap mt-10 justify-evenly">
        <AdminPost />
        <AdminPutUpdate />
      </div>
      <img
        src="/photos/whalelogo.png"
        className="max-w-xl m-auto scale-150 hidden md:block "
      />
    </div>
  );
}

export default Admin;
