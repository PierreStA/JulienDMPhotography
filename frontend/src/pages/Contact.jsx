import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ScrollToTop from "../components/ScrollToTop";

import Navbar from "../components/Navbar";

function Contact() {
  const [state, handleSubmit] = useForm("xknaelrp");

  return (
    <div>
      <Navbar />
      <div className="bg-gray-800 h-full">
        <div className="mx-[10%] pt-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-400">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
            Feel free to get in touch with me by filling out the form below.
            I'll be happy to answer any questions you have or discuss
            collaboration opportunities. Looking forward to hearing from you !
          </p>
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm  rounded-lg border shadow-sm   border-gray-600 placeholder-gray-400 bg-gray-700 text-white"
                placeholder="name@bigfish.com"
                required
              />{" "}
              <ValidationError //this will show an error message if the field is invalid.
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm  rounded-lg border shadow-sm   border-gray-600 placeholder-gray-400 bg-gray-700 text-white"
                  placeholder=" Dont forget to add a subject"
                  required
                />{" "}
                <ValidationError
                  prefix="Subject"
                  field="text"
                  errors={state.errors}
                />
              </label>
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your message
                <textarea
                  id="message"
                  rows="6"
                  className="block p-3 w-full text-sm  rounded-lg border shadow-sm   border-gray-600 placeholder-gray-400 bg-gray-700 text-white"
                  placeholder="Leave a comment..."
                />{" "}
                <ValidationError
                  prefix="Message"
                  field="text"
                  errors={state.errors}
                />
              </label>
            </div>
            <label
              htmlFor="scales"
              className=" text-gray-600 text-sm col-span-2 "
            >
              <input
                type="checkbox"
                id="scales"
                className=" mr-2 mt-1"
                required
              />
              <span className="max-w-[80%]">
                In accordance with the PDPA (Personal Data Protection Act ), I
                accept that my contact details are used for commercial purposes.
              </span>
            </label>
            <button
              type="submit"
              disabled={state.submitting}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg hover:text-dark sm:w-fit b-2 bg-cyan-500 mx-auto"
            >
              Send message
            </button>
          </form>
          <div className="mt-16 rounded-lg shadow-lg bg-gray-700 p-4">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-400">
              Find Me
            </h2>
            <iframe
              title="DPM Diving Koh Tao"
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.5454548593026!2d99.82630822604449!3d10.0869638240995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0123456789abcdef!2sDPM%20Diving!5e0!3m2!1sen!2sus!4v1626330989465!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
            <p className="text-center text-gray-300 text-lg font-medium">
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Contact;
