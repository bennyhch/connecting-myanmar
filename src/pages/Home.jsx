import React from "react";
import Button from "../components/Button";
import Divider from "../components/Divider";

const sectionWrapper = "max-w-xl w-full mx-auto my-50";

const Heading = ({ text, textColor }) => {
  return <h2 className={`${textColor} font-bold mb-5 text-2xl`}>{text}</h2>;
};

const Home = () => {
  return (
    <div>
      <div className="relative h-70lvh">
        {/* <div className="bg-[url('/src/assets/home-intro.jpg')] h-full bg-cover blur-sm text-black"> */}
        <div className="absolute inset-0 bg-[url('/src/assets/home-intro.jpg')] h-full bg-cover bg-center text-black blur-sm"></div>
        <p className="absolute text-white w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          WE ENVISION AN <span className="text-customGreen">EMPATHETIC</span>{" "}
          WORLD WHERE EVERYONE HAS THE ​EQUAL OPPORTUNITY TO ​REALIZE THEIR
          POTENTIAL AND ASPIRATIONS
        </p>
      </div>

      <main className="flex justify-center items-center flex-col w-full">
        <section className={`${sectionWrapper} mt-14`}>
          <Heading text="OUR MISSION" textColor="text-customGod" />
          <p className="mb-3">
            To inspire youth to think critically with an empathetic lens through
            connecting Myanmar and HK youth. To empower youth through the
            exchange of skills and knowledge and to support them to take action
            towards positive change.
          </p>
          <Button link="/about" text="LEARN MORE" />
          <Divider marginY={8} />
        </section>

        <section className={sectionWrapper}>
          <Heading text="PATRON PROGRAMME" textColor="text-customGreen" />
          <p className="mb-3">
            We provide scholarships to future community leaders in Myanmar. ​We
            incubate their projects upon their graduation to benefit the broader
            community.
          </p>
          <Button link="/patrons" text="LEARN MORE" />
          <Divider marginY={8} />
        </section>

        <section className={sectionWrapper}>
          <Heading text="VOLUNTEER PROGRAMMES" textColor="text-customGod" />
          <p className="mb-3">
            We provide a platform for knowledge exchange - through supporting
            students to pursue their social calling, we hope to create an
            empathetic world. Our present programmes aim to pass on both legal
            ​and medical knowledge in Myanmar and on the Thai/ Myanmar border.
          </p>
          <Button link="/programmes" text="LEARN MORE" />
        </section>
      </main>
    </div>
  );
};

export default Home;
