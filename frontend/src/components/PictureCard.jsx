import React from "react";

function PictureCard({ photo, description, price }) {
  return (
    <div>
      <div className=" mx-3 mt-10 max-w-xl rounded-xl overflow-hidden shadow-lg bg-dark-blue transform:scale-150 ">
        <div>
          <img src={`/photos/${photo}`} />
        </div>
        <div className="text-white text-base  m-5">{description}</div>
        <div className="font-bold text-l mb-2 mt-5">Numéro : {price}</div>
      </div>
    </div>
  );
}

export default PictureCard;
