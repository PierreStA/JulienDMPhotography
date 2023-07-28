import React, { useState, useEffect } from "react";
import pictureApi from "../services/pictureApi";
import PictureCard from "../components/PictureCard";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

function PicturesList() {
  const [photos, setPhotos] = useState([]); //* gére la liste des photos*//
  const [selectedPhoto, setSelectedPhoto] = useState(null); //* gére la photo sélectionnée*//
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(true); //* gére la visibilité du bouton scrollToTop*//

  useEffect(() => {
    //* récupère la liste des photos et les stocks dans le state photos*//
    pictureApi
      .get("/api/product")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-dark h-grow h-full">
      <Navbar />
      {selectedPhoto && ( //* si une photo est sélectionnée, affiche la photo en plein écran*//
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center z-50">
          <div className="max-w-6xl max-h-screen p-6 overflow-y-auto bg-dark-blue border-2 border-black rounded-xl">
            <img
              src={`/photos/${selectedPhoto}`}
              alt="Selected photo"
              className="w-full h-auto"
            />
            <button //* lorsque l'on clique sur le bouton retour, on remet la variable selectedPhoto à null et on affiche le scrollToTop*//
              onClick={() => {
                setSelectedPhoto(null);
                setIsScrollToTopVisible(true);
              }}
              className="absolute top-4 right-4 text-white"
            >
              Retour
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-wrap bg-dark ">
        <div className="flex flex-wrap justify justify-around  border-zinc-950">
          {photos.map(
            (
              product //* pour chaque photo, on affiche un composant PictureCard*//
            ) => (
              <PictureCard
                key={product.id}
                photo={product.photo}
                number={product.id}
                description={product.description}
                onClick={() => {
                  setSelectedPhoto(product.photo);
                  setIsScrollToTopVisible(false);
                }}
              />
            )
          )}
        </div>
      </div>
      {isScrollToTopVisible && <ScrollToTop />}
    </div>
  );
}

export default PicturesList;
