import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";
import PictureCard from "../components/PictureCard";

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
      {photos.map((product) => (
        <PictureCard
          key={product.id}
          photo={product.photo}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}
export default PicturesList;
