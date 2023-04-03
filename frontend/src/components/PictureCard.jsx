import React from "react";

function PictureCard({ photo, description, price }) {
  return (
    <div>
      <div className=" ml-5 mt-10 max-w-2xl rounded overflow-hidden shadow-lg bg-dark-blue ">
        <div>
          <img src={`/photos/${photo}`} />
        </div>
        <div className="text-white text-base  m-5">{description}</div>
        <div className="font-bold text-xl mb-2 mt-5">Id : {price}</div>
      </div>
    </div>
  );
}

export default PictureCard;
