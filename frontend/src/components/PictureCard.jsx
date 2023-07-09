function PictureCard({ photo, description, number, onClick }) {
  return (
    <div>
      <div className="flex flex-col mx-3 mt-10 max-w-xl rounded-xl shadow-lg bg-dark-blue border-black border-2">
        <div className="font-bold text-l mb-2 mt-5 flex justify-center text-white">
          {number}
        </div>
        <img
          src={`/photos/${photo}`}
          alt={description}
          className="cursor-pointer"
          onClick={onClick}
        />

        <div className="text-white text-base m-5">{description}</div>
      </div>
    </div>
  );
}
export default PictureCard;
