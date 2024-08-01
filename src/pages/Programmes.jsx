import React from "react";
import { SectionHeading } from "../utils/wrappers";

import streetLawOne from "../assets/street-law-1.jpg";
import streetLawTwo from "../assets/street-law-2.jpg";
import streetLawThree from "../assets/street-law-3.jpg";
import HeaderImageWrapper from "../components/HeaderImage";

const ImageContainer = ({ children }) => {
  return <div className="w-full max-w-80">{children}</div>;
};

const Programmes = () => {
  return (
    <div>
      <HeaderImageWrapper
        isShading
        imgUrl="bg-[url('/src/assets/programmes.jpg')]"
      >
        WE PROVIDE A PLATFORM FOR{" "}
        <span className="text-customGreen">KNOWLEDGE EXCHANGE</span>, SUPPORT
        STUDENTS TO PURSUE THEIR SOCIAL CALLING AND ​HELP CREATE AN EMPATHETIC
        WORLD.
      </HeaderImageWrapper>
      <main className="w-full text-justify">
        <section className="max-w-5xl w-full mx-auto my-50 mt-14">
          <p className="text-lg mb-10">
            SINCE 2012, WE NOW HAVE OVER{" "}
            <span className="text-customBrown">250 VOLUNTEERS</span> FROM
            UNIVERSITIES IN HONG KONG AND HAVE REACHED OUT TO OVER{" "}
            <span className="text-customBrown">
              30 SCHOOLS IN MYANMAR AND AT THE THAI-BURMA BORDER
            </span>
            , BENEFITING OVER{" "}
            <span className="text-customBrown">7000 MYANMAR STUDENTS</span>.
          </p>
          <SectionHeading
            text="STREET LAW PROGRAMME"
            textColor="text-customGreen"
          />
          <p>
            Street Law is an approach to bring the law to grassroots populations
            using interactive teaching methodologies. Through our Street Law
            Program, law students from Hong Kong conduct interactive classroom
            activities such as discussions, debates, role-plays, and mock trials
            etc. with students in Myanmar with the aim to translate the law to a
            language digestible by layman and the public at large.
          </p>
          <div className="flex justify-around flex-wrap mt-5">
            <ImageContainer>
              <img
                src={streetLawOne}
                alt="Street Law Group 1"
                className="w-full h-full"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={streetLawTwo}
                alt="Street Law Group 2"
                className="w-full h-full"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={streetLawThree}
                alt="Street Law Group 3"
                className="w-full h-full"
              />
            </ImageContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Programmes;
