import React from "react";
import HeaderImageWrapper from "../components/HeaderImage";
import Button from "../components/Button";

import { SectionHeading } from "../utils/wrappers";
import { scholars } from "../utils/scholars";

const Gallery = () => {
  return (
    <div className="gallery">
      {scholars.map(({ name, img, quote }, index) => (
        <div className="card" key={index}>
          <h3 className="text-customGold font-bold">{name}</h3>
          <div className="image-container">
            <img src={img} alt={name} />
          </div>
          <div className="text-container">
            <p>{quote}</p>
          </div>
          <Button text={`More about ${name}`} />
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
        <section className="max-w-5xl w-full mx-auto my-50 mt-14">
          <SectionHeading text="OUR SCHOLARS" textColor="text-customGreen" />
          <p>
            We are currently funding <b>fourteen</b> Myanmar students, thirteen
            of whom study in the universities in Thailand and one goes to a
            university in Taiwan. Read their stories below.
          </p>
        </section>
        <section className="max-w-5xl w-full mx-auto my-50 ">
          <Gallery />
          {/* <div className="gallery">
            {scholars.map((scholar, index) => (
              <GalleryCard key={index} {...scholar} />
            ))}
          </div> */}
        </section>
      </main>
    </div>
  );
};

export default OurScholars;
