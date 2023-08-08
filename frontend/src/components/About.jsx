import React from "react";

function parseHTMLToJSX(htmlString) {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return Array.from(doc.body.childNodes);
}

function About() {
  const [activeQuestion, setActiveQuestion] = React.useState(null);
  const aboutList = [
    {
      q: "What's your name and background as a photographer ?",
      a: "Hello, I'm Julien Da Motta, and I have dedicated the last 10 years of my life to the art of underwater photography and sharing the wonders of the ocean with the world. My passion for the marine environment started at a young age and led me to become a certified diving instructor. Combining my love for photography and diving, I found my true calling as an underwater photographer, capturing the beauty and uniqueness of marine life beneath the surface.",
    },
    {
      q: "What kind of services do you offer ?",
      a: "As an experienced underwater photographer and diving instructor, I offer a range of services that cater to both individual clients and larger projects. I specialize in guiding clients on immersive dives, helping them immortalize their underwater adventures with breathtaking photographs. Additionally, I actively contribute to the creation of captivating underwater documentaries, collaborating with various teams to showcase the enchanting marine world and its diverse inhabitants. My dedication to conservation and storytelling through photography has allowed me to create awe-inspiring visual narratives that convey the importance of protecting our oceans.",
    },
    {
      q: "How can interested individuals purchase your photos ?",
      a: "Thank you for showing interest in my underwater photography. If any of my photos have caught your eye, I would be thrilled to connect with you. To make a purchase, please sign up for an account. Once registered, you can easily access the contact form, where you can leave me a message expressing your interest. Alternatively, you can reach out to me directly by phone. I believe in personalized interactions with my clients, and I'm more than happy to discuss your preferences and any customization options for the photographs you wish to acquire.",
    },
    {
      q: "Where are you located, and are you willing to travel for projects ?",
      a: "Currently, my photography studio is based on the captivating island of Koh Tao, nestled in the pristine waters of Thailand. Koh Tao's abundant marine life and diverse underwater landscapes have provided me with endless opportunities for capturing breathtaking images. However, being an avid traveler and passionate about exploring new marine environments, I am more than willing to embark on exciting photography projects around the globe. Whether it's documenting marine conservation efforts, capturing unique underwater species, or covering underwater events, I am mobile and ready to collaborate on any project that aligns with my artistic vision and values.",
    },
    {
      q: "How are your rates determined ?",
      a: "Each photography project is unique and requires individualized attention. As a result, I provide personalized quotes based on the specific requirements and scope of the project. If you have a project in mind, I encourage you to get in touch with me directly so we can discuss the details, including the location, duration, and purpose of the shoot. I take great pride in offering fair and transparent pricing, considering the effort, time, and resources involved in delivering exceptional underwater photography. Rest assured, my rates are competitive and reflective of the high-quality work and dedication that goes into every project I undertake.",
    },
    {
      q: "What is your availability ?",
      a: "I am available for photography projects throughout the year. However, I encourage you to get in touch with me as soon as possible to discuss your project's details and secure my services. I am often booked months in advance, and I want to ensure that I can accommodate your needs and deliver the best possible results.",
    },
  ];

  return (
    <div className="flex-1 mt-12 md:mt-0">
      <ul className="">
        {aboutList.map((item, id) => (
          <li key={id} className="border-none">
            <button
              onClick={
                () => setActiveQuestion(id === activeQuestion ? null : id) //Si les deux ID sont égaux, cela signifie que la question est déjà active, et donc, setActiveQuestion(null) est appelé pour désactiver la question. Sinon, si les ID sont différents, cela signifie que la question n'est pas active, et donc, setActiveQuestion(id) est appelé pour activer la question
              }
              className="flex items-start justify-between w-full px-4 py-2 font-bold text-gray-400 rounded-lg focus:outline-none bg-gray-800 mt-12"
            >
              <span
                className={`text-left text-xl ${
                  activeQuestion === id ? "text-cyan-400" : ""
                }`}
              >
                {item.q}
              </span>
              <span className="text-cyan-400">
                {activeQuestion === id ? "-" : "+"}
              </span>
            </button>
            {activeQuestion === id && (
              <p className="text-white leading-relaxed p-4 bg-gray-800 rounded-lg">
                {item.a}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
