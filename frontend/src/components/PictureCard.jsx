import React from "react";

function PictureCard({ photo, description, price }) {
  return (
    <div>
      <div className="picture-photo mt-5">
        <img src={`/photos/${photo}`} />
      </div>
      <div className="picture-price bg-orange-800 mt-5">{price}</div>
      <div className="picture-description bg-green-800 mt-5">{description}</div>
    </div>
  );
}

export default PictureCard;
