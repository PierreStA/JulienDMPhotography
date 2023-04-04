import NavBar from "../components/Navbar";

function Faq() {
  const faqsList = [
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Shoulder pork loin rump prosciutto pancetta doner. Ham hock doner chislic fatback capicola burgdoggen pork loin pastrami frankfurter filet mignon. ",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Chuck pastrami chicken brisket, drumstick ham hock boudin. Tail t-bone drumstick pork loin. Picanha tenderloin corned beef shoulder pastrami meatball leberkas jowl pig rump.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Pork loin chuck bacon cupim rump drumstick salami. Cow doner chislic chuck fatback ham hock alcatra pork meatloaf shankle strip steak cupim biltong tri-tip hamburger.",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Brisket ribeye minim aliqua id, aliquip officia cow ut frankfurter laboris dolor. Ullamco excepteur tenderloin turducken do. Velit chicken quis, salami sed esse turducken",
    },
    {
      q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      a: "Pork culpa buffalo drumstick, sint beef pork loin cow flank meatball qui ribeye swine. Kevin filet mignon aute, fatback ham hock ham cupidatat ribeye porchetta strip steak picanha excepteur occaecat dolor fugiat. .",
    },
  ];

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
              <div className=" sm:block sm:w-1/3 lg:w-3/5 mt-10 "></div>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <ul className="space-y-4 divide-y divide-gray-700">
              {faqsList.map((item, idx) => (
                <li className="py-5" key={idx}>
                  <summary className="flex items-center justify-between font-semibold text-gray-200">
                    {item.q}
                  </summary>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.a }}
                    className="mt-3 text-gray-300 leading-relaxed"
                  ></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Faq;
