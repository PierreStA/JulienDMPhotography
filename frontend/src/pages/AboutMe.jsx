import NavBar from "../components/Navbar";
import Aboutlist from "../components/About.jsx";
function AboutMe() {
  return (
    <>
      {/* <NavBar /> */}
      <section className=" bg-gray-800 md:h-screen">
        <div className=" pt-20 mx-auto px-4 gap-12 md:flex md:flex-row md:px-8">
          <div className="flex ">
            <div className="">
              <p className=" text-cyan-400 md:text-3xl font-extrabold text-xl">
                All information you need to know
              </p>
              <img
                src="/photos/julienselfie.png"
                className=" max-w-[80%] mt-4  mx-auto"
              />
            </div>
          </div>
          <Aboutlist />
        </div>
      </section>
    </>
  );
}
export default AboutMe;
