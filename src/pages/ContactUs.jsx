import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import HeaderImageWrapper from "../components/HeaderImage";
import PageContentWrapper, {
  PageSectionWrapper,
} from "../components/PageContentWrapper";

import { SectionHeading } from "../utils/wrappers";

const ContactUs = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          // add alert in the UI here to notify user of successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <HeaderImageWrapper imgUrl="bg-[url('/src/assets/ourScholars.jpg')]" />

      <PageContentWrapper>
        <PageSectionWrapper isTopSection>
          <SectionHeading text="CONTACT US" textColor="text-customGold" />

          <form ref={form} onSubmit={handleSubmit}>
            <input
              required
              name="user_name"
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500 mb-5"
            />
            <input
              required
              name="user_email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500 mb-5"
            />
            <textarea
              required
              name="message"
              placeholder="Message"
              rows="6"
              className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500 mb-5"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </PageSectionWrapper>
      </PageContentWrapper>
    </div>
  );
};

export default ContactUs;
