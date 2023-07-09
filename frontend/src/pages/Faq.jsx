import NavBar from "../components/Navbar";
import Faqlist from "../components/Faqlist.jsx";
function Faq() {
  return (
    <>
      <NavBar />
      <section className=" bg-gray-800 md:h-full">
        <div className=" pt-20 mx-auto px-4 gap-12 md:flex md:flex-row md:px-8">
          <div className="flex ">
            <div className="">
              <p className=" text-cyan-400 md:text-3xl font-extrabold text-xl">
                All information you need to know
              </p>
              <img
                src="/photos/pieuvre.png"
                className=" mt-4  scale-150 flex"
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
