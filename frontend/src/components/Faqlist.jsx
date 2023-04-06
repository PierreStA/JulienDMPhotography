import React from "react";

function Faqlist() {
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
    <div className="flex-1 mt-12 md:mt-0">
      <ul className="space-y-4 divide-y divide-gray-700">
        {faqsList.map((item, id) => (
          <li className="py-5" key={id}>
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
  );
}

export default Faqlist;
