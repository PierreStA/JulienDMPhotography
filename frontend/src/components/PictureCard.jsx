function PictureCard({ photo, description, number, onClick }) {
  return (
    <div>
      <div className="flex flex-col mx-3 mt-10 max-w-xl rounded-xl shadow-lg bg-dark-blue ">
        <img
          src={`/photos/${photo}`}
          alt={photo}
          className="cursor-pointer"
          onClick={onClick}
        />
        <div className="text-white text-base m-5">
          <br />
          {""} {description}
        </div>
        <div className="self-end text-white">#{number}</div>
      </div>
    </div>
  );
}
export default PictureCard;
