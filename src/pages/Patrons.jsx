import React from "react";
import HeaderImageWrapper from "../components/HeaderImage";
import { SectionHeading } from "../utils/wrappers";
import patronSteps from "../assets/patronSteps.png";
import patronCycle from "../assets/patronCycle.png";
import Button from "../components/Button";

const TextContainer = ({ children, title }) => {
  return (
    <div className="flex-1 basis-full md:basis-1/2">
      <h3 className="text-customGold">{title}</h3>
      {children}
    </div>
  );
};

const ImageContainer = ({ children }) => {
  return (
    <div
      className="flex-1 basis-full md:basis-1/2 "
      // style={{ border: "1px solid blue" }}
    >
      {children}
    </div>
  );
};

const Patrons = () => {
  return (
    <div>
      <HeaderImageWrapper
        imgUrl="bg-[url('/src/assets/becomePatron.jpg')]"
        isShading
      >
        BECOMING A <span className="text-customGreen">PATRON</span>
      </HeaderImageWrapper>

      <main className="w-full text-justify">
        <section className="max-w-5xl w-full mx-auto my-50 mt-14">
          <SectionHeading
            text="ABOUT OUR PATRON PROGRAMME"
            textColor="text-customGold"
          />

          <article className="flex flex-wrap">
            <TextContainer title="3-STEP IN BECOMING A PATRON">
              <ol className="list-decimal pt-3 p-8">
                <li>
                  Read the Scholars’ stories to identify who you would like to
                  sponsor. You can also invite your friends or family to sponsor
                  the Scholar together.
                </li>
                <li>
                  Sign up as a Patron (Select the Scholar's name) and monthly
                  donation will be deducted throughout the commitment period.
                </li>
                <li>
                  Give us (1) your photo and (2) a short bio telling us about
                  yourself and your reason for becoming a Patron. This is
                  optional as we understand that you may want to stay anonymous.
                  But we also welcome you to do so as your story could inspire
                  more to sign up as a Patron!
                </li>
              </ol>
            </TextContainer>
            <ImageContainer>
              <img src={patronSteps} alt="steps to become a patron" />
            </ImageContainer>
          </article>

          {/* <article className="flex flex-wrap"> */}
          <article className="flex flex-wrap mt-8">
            <TextContainer title="BEING A PATRON">
              <ol className="list-decimal pt-3 p-8">
                <li>
                  You will receive life updates from the Scholar on a
                  semi-annual basis.
                </li>
                <li>
                  You can also meet the Scholar (albeit virtually!) together
                  with your Co-Patrons and become his or her mentor.{" "}
                </li>
                <li>
                  You can also join our CM Network to attend our talks or
                  networking events organised for you and your Co-Patrons, or
                  other Patrons.{" "}
                </li>
              </ol>
            </TextContainer>
            <ImageContainer>
              <img src={patronCycle} alt="the life cycle of being a patron" />
            </ImageContainer>
          </article>
          <Button link="/our-scholars" text="MEET OUR STUDENTS" />
        </section>
      </main>
    </div>
  );
};

export default Patrons;
