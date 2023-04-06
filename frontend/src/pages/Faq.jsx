import NavBar from "../components/Navbar";
import Faqlist from "../components/Faqlist.jsx";
function Faq() {
  return (
    <>
      <NavBar />
      <section className="py-14 bg-gray-800">
        <div className="max-w-screen-xl mt-20 mx-auto px-4 gap-12 md:flex md:px-8">
          <div className="flex-1">
            <div className="max-w-lg">
              <p className=" text-cyan-400 text-3xl font-extrabold sm:text-4xl">
                All information you need to know
              </p>
              <img
                src="/photos/pieuvre.png"
                className="max-w-xl m-auto scale-150 flex"
              />
            </div>
          </div>
          <Faqlist />
        </div>
      </section>
    </>
  );
}
export default Faq;
