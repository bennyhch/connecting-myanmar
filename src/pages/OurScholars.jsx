import React from "react";
import HeaderImageWrapper from "../components/HeaderImage";
import NavButton from "../components/NavButton";

import { SectionHeading } from "../utils/wrappers";
import { scholars } from "../utils/scholars";

const Gallery = () => {
  return (
    <div className="gallery">
      {scholars.map(({ name, img, quote, link }, index) => (
        <div className="card" key={index}>
          <h3 className="text-customGold font-bold mb-3 text-xl">{name}</h3>
          <div className="image-container">
            <img src={img} alt={name} />
          </div>
          <div className="text-container">
            <p className="py-5">{quote}</p>
          </div>
          <NavButton text={`More about ${name}`} link={link} />
        </div>
      ))}
    </div>
  );
};

const OurScholars = () => {
  return (
    <div>
      <HeaderImageWrapper
        isShading
        imgUrl="bg-[url('/src/assets/ourScholars.jpg')]"
      >
        MEET OUR <span className="text-customGreen">STUDENTS</span>
      </HeaderImageWrapper>

      <main className="w-full text-justify">
        <section className="max-w-4xl w-full mx-auto my-50 mt-14">
          <SectionHeading text="OUR SCHOLARS" textColor="text-customGreen" />
          <p>
            We are currently funding <b>fourteen</b> Myanmar students, thirteen
            of whom study in the universities in Thailand and one goes to a
            university in Taiwan. Read their stories below.
          </p>
        </section>
        <section className="max-w-4xl w-full mx-auto my-50 ">
          <Gallery />
        </section>
      </main>
    </div>
  );
};

export default OurScholars;
