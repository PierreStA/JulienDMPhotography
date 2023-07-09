import React from "react";
import { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";
import PictureCard from "../components/PictureCard";
import Navbar from "../components/Navbar";

function PicturesList() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  console.log(photos);
  useEffect(() => {
    pictureApi
      .get("/api/product")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-dark h-grow h-full">
      <Navbar />
      {selectedPhoto && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center z-50">
          <div className="max-w-4xl max-h-screen p-6 overflow-y-auto bg-dark-blue border-2 border-black rounded-xl">
            <img
              src={`/photos/${selectedPhoto}`}
              alt="Selected photo"
              className="w-full h-auto"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white"
            >
              Retour
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-wrap bg-dark">
        <div className="flex flex-wrap justify justify-around border-zinc-950">
          {photos.map((product) => (
            <PictureCard
              key={product.id}
              photo={product.photo}
              number={product.id}
              description={product.description}
              onClick={() => setSelectedPhoto(product.photo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PicturesList;
