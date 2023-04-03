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
    <div>
      <Navbar />
      <div>
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
  );
}
export default PicturesList;
