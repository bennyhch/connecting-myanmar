import React from "react";

import NavButton from "../components/NavButton";
import Divider from "../components/Divider";
import FooterButton from "../components/FooterButton";
import HeaderImageWrapper from "../components/HeaderImage";
import IconLink, { socialMediaIconsData } from "../components/IconLink";

import { SectionHeading } from "../utils/wrappers";
import { shading50Styles } from "../utils/classStyles";

const sectionWrapperStyles = "max-w-3xl w-full mx-auto";

const buttonsContainerStyles =
  "mt-8 w-full flex gap-3 justify-around flex-wrap sm:w-1/2 sm:flex-row";

const Home = () => {
  return (
    <div>
      <HeaderImageWrapper imgUrl="bg-[url('/src/assets/home-intro.jpg')]">
        WE ENVISION AN{" "}
        <span className="text-customGreen">EMPATHETIC WORLD</span> WHERE
        EVERYONE HAS THE ​EQUAL OPPORTUNITY TO ​REALIZE THEIR POTENTIAL AND
        ASPIRATIONS
      </HeaderImageWrapper>

      <main className="flex justify-center items-center flex-col w-full text-justify px-10">
        <br />
        <br />
        <section className={sectionWrapperStyles}>
          <br />
          <SectionHeading text="OUR MISSION" textColor="text-customGold" />
          <p className="mb-3">
            To inspire youth to think critically with an empathetic lens through
            connecting Myanmar and HK youth. To empower youth through the
            exchange of skills and knowledge and to support them to take action
            towards positive change.
          </p>
          <NavButton link="/about" text="LEARN MORE" />
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
          <NavButton link="/patrons" text="LEARN MORE" />
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
          <NavButton link="/programmes" text="LEARN MORE" />
        </section>
      </main>

      <footer className="h-70lvh mt-8">
        <div className="bg-[url('/src/assets/footer.jpg')] h-full bg-cover bg-center relative">
          <div className={shading50Styles}></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center space-y-10">
            <p className="w-1/2 text-white font-bold">
              All profit from the artwork sale goes to support our scholarship
              program, sending ​Myanmar students to Universities. Visit us on
              Artsy:
            </p>

            <div className={buttonsContainerStyles}>
              <FooterButton
                link="https://www.artsy.net/partner/connecting-myanmar"
                text="ARTSY"
                color="bg-customGold"
                newTab
              />
              <FooterButton
                link="/donate"
                text="DONATE NOW"
                color="bg-customGreen"
              />
            </div>

            <div className={buttonsContainerStyles}>
              {socialMediaIconsData.map((data, index) => (
                <IconLink key={index} link={data.link} icon={data.icon} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
