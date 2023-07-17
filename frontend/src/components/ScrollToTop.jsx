import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      //* the scrollToTop buton apear when you scroll down for more than 150px from the top of the page
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4  p-1  text-white shadow-md bg-sky-400 hover:text-white hover:bg-blue focus:outline-none z-[900] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.503"
            height="30.503"
            viewBox="0 0 30.503 30.503"
          >
            <path
              id="fleche"
              d="M14.379,0,12.7,1.678l6.71,6.71H0v2.4H19.412l-6.71,6.71,1.677,1.678,9.586-9.587Z"
              transform="translate(0 16.946) rotate(-45)"
              fill="#ffffff"
              className=""
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
