import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import Button from "../components/Button";
import Divider from "../components/Divider";
import RoundButton from "../components/RoundButton";

import { SectionHeading } from "../utils/wrappers";

import { sectionWrapperStyles, shading50Styles } from "../utils/classStyles";
import HeaderImageWrapper from "../components/HeaderImage";

const buttonsContainerStyles = "mt-8 w-1/2 flex justify-around";

// let iconStyles = { color: "green", fontSize: "1.5em" };

const IconLink = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

const Home = () => {
  return (
    <div>
      <HeaderImageWrapper imgUrl="bg-[url('/src/assets/home-intro.jpg')]">
        WE ENVISION AN{" "}
        <span className="text-customGreen">EMPATHETIC WORLD</span> WHERE
        EVERYONE HAS THE ​EQUAL OPPORTUNITY TO ​REALIZE THEIR POTENTIAL AND
        ASPIRATIONS
      </HeaderImageWrapper>

      <main className="flex justify-center items-center flex-col w-full text-justify">
        <section className={`${sectionWrapperStyles} mt-14`}>
          <SectionHeading text="OUR MISSION" textColor="text-customGold" />
          <p className="mb-3">
            To inspire youth to think critically with an empathetic lens through
            connecting Myanmar and HK youth. To empower youth through the
            exchange of skills and knowledge and to support them to take action
            towards positive change.
          </p>
          <Button link="/about" text="LEARN MORE" />
          <Divider />
        </section>

        <section className={sectionWrapperStyles}>
          <SectionHeading
            text="PATRON PROGRAMME"
            textColor="text-customGreen"
          />
          <p className="mb-3">
            We provide scholarships to future community leaders in Myanmar. ​We
            incubate their projects upon their graduation to benefit the broader
            community.
          </p>
          <Button link="/patrons" text="LEARN MORE" />
          <Divider />
        </section>

        <section className={sectionWrapperStyles}>
          <SectionHeading
            text="VOLUNTEER PROGRAMMES"
            textColor="text-customGold"
          />
          <p className="mb-3">
            We provide a platform for knowledge exchange - through supporting
            students to pursue their social calling, we hope to create an
            empathetic world. Our present programmes aim to pass on both legal
            ​and medical knowledge in Myanmar and on the Thai/ Myanmar border.
          </p>
          <Button link="/programmes" text="LEARN MORE" />
        </section>
      </main>

      <footer className="h-70lvh mt-8">
        <div className="bg-[url('/src/assets/footer.jpg')] h-full bg-cover bg-center relative">
          <div className={shading50Styles}></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-10">
            <p className="w-1/2">
              All profit from the artwork sale goes to support our scholarship
              program, sending ​Myanmar students to Universities. Visit us on
              Artsy:
            </p>

            <div className={buttonsContainerStyles}>
              <RoundButton
                link="https://www.artsy.net/partner/connecting-myanmar"
                text="ARTSY"
                color="bg-customGold"
                newTab
              />
              <RoundButton
                link="/donate"
                text="DONATE NOW"
                color="bg-customGreen"
              />
            </div>

            <div className={buttonsContainerStyles}>
              <IconLink
                link="https://www.facebook.com/ConnectingMyanmar/"
                icon={<FaFacebook size={20} />}
              />
              <IconLink
                link="https://www.instagram.com/connectingmyanmar"
                icon={<FaInstagram size={20} color="#777C92" />}
              />
              <IconLink
                link="https://www.linkedin.com/in/connectingmyanmar/"
                icon={<FaLinkedin size={20} />}
              />
              <IconLink
                link="mailto: info@connectingmyanmar.org"
                icon={<AiOutlineMail size={20} />}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
