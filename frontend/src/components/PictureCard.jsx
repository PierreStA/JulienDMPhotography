import React from "react";

function PictureCard({ photo, description, price }) {
  return (
    <div>
      <div className=" ml-5 mt-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img src={`/photos/${photo}`} />
        <div className="font-bold text-xl mb-2 mt-5">Prix: {price} $</div>
        <div className="text-gray-700 text-base  mt-5">{description}</div>
      </div>
    </div>
  );
}

export default PictureCard;
