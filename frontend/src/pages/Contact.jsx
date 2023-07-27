import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Navbar from "../components/Navbar";

function Contact() {
  const [state, handleSubmit] = useForm("xknaelrp");
  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-gray-800 h-full">
        <div className="mx-[10%] pt-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-400">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@bigfish.com"
                required
              />{" "}
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=" Dont forget to add a subject"
                required
              />{" "}
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              />{" "}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg hover:text-dark sm:w-fit b-2 bg-cyan-500 mx-auto"
            >
              Send message
            </button>
          </form>
          <div className="mt-16 rounded-lg shadow-lg bg-white dark:bg-gray-700 p-4">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-400">
              Find Me
            </h2>
            <iframe
              title="DPM Diving Koh Tao"
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.5454548593026!2d99.82630822604449!3d10.0869638240995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0123456789abcdef!2sDPM%20Diving!5e0!3m2!1sen!2sus!4v1626330989465!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg font-medium">
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
