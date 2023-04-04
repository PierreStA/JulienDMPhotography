import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";
import PictureCard from "../components/PictureCard";
import Navbar from "../components/Navbar";

function PicturesList() {
  const [photos, setPhotos] = useState([]);

  console.log(photos);
  useEffect(() => {
    pictureApi
      .get("/api/product")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" bg-dark h-grow h-full">
      <Navbar />
      <div className="flex flex-wrap bg-dark  ">
        <div className="flex flex-wrap justify justify-evenly  border-zinc-950">
          {photos.map((product) => (
            <PictureCard
              key={product.id}
              photo={product.photo}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PicturesList;
