import React from "react";
import Navbar from "../components/Navbar";
import AdminPost from "../components/AdminPost";
import AdminDeleteUpdate from "../components/AdminDeleteUpdate";

function Admin() {
  return (
    <div className="bg-dark h-grow w-full h-full ">
      <Navbar />
      <div className="flex flex-wrap mt-10 justify-evenly">
        <AdminPost />
        <AdminDeleteUpdate />
      </div>
      <img
        src="/photos/whalelogo.png"
        className="max-w-xl m-auto scale-150 hidden md:block "
      />
    </div>
  );
}

export default Admin;
