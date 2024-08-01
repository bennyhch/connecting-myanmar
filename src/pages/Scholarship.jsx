import React from "react";
import { HeaderWrapper, SectionHeading } from "../utils/wrappers";
import {
  headingBackgroundImageStyles,
  headingTextStyles,
  shading50Styles,
} from "../utils/classStyles";
import Button from "../components/Button";

const SubHeading = ({ title }) => {
  return <h3 className="text-customGold font-semibold">{title}</h3>;
};

const Scholarship = () => {
  return (
    <div>
      <HeaderWrapper>
        <div
          className={`bg-[url('/src/assets/scholarship.jpg')] ${headingBackgroundImageStyles}`}
        ></div>
        <div className={shading50Styles}></div>
        <p className={headingTextStyles}>
          WE FUND FUTURE{" "}
          <span className="text-customGreen">COMMUNITY LEADERS</span> TO BENEFIT
          THE BROADER COMMUNITY
        </p>
      </HeaderWrapper>

      <main className="w-full text-justify">
        <section className="max-w-5xl w-full mx-auto my-50 mt-14">
          <SectionHeading
            text="FEATURES OF OUR SCHOLARSHIP SCHEME"
            textColor="text-customGreen"
          />
          {/* <h3 className="text-customGold font-semibold">
            WE LISTEN TO YOUR STORIES
          </h3> */}
          <SubHeading title="WE LISTEN TO YOUR STORIES" />
          <p>
            We look for students who do not plainly excel on paper but that have
            a motivating story to tell. We have a strong and trusting
            relationship with local partner organisations and their feedback are
            much valued.{" "}
          </p>
          <br />
          <SubHeading title="WE BELIEVE IN PAYING IT FORWARD" />
          <p>
            We don’t expect the students to pay us back rather, we expect them
            to contribute by giving back to their own communities and playing
            their role – be it big or small – in making a change.{" "}
          </p>
          <br />
          <SubHeading title="WE WORK WITH YOU TO ACHIEVE YOUR GOALS" />
          <p>
            We support students’ incubation projects and provide assistance and
            mentorship to help students achieve their dreams step-by-step.
          </p>
          <br />
          <SubHeading title="WE SERVE THE ONES IN NEED" />
          <p>
            We prioritise the overlooked and aim to fill in gaps in civil
            society by reaching out to those marginalised and less heard voices
            in society.
          </p>
          <br />
          <Button link="/patrons" text="BECOMING A PATRON" />
        </section>
      </main>
    </div>
  );
};

export default Scholarship;
