import React from "react";
import { SectionHeading } from "../utils/wrappers";

import NavButton from "../components/NavButton";
import HeaderImageWrapper from "../components/HeaderImage";
import PageContentWrapper, {
  PageSectionWrapper,
} from "../components/PageContentWrapper";

const SubTitle = ({ title }) => {
  return <h3 className="text-customGold font-semibold">{title}</h3>;
};

const Scholarship = () => {
  return (
    <div>
      <HeaderImageWrapper
        imgUrl="bg-[url('/src/assets/scholarship.jpg')]"
        isShading
      >
        WE FUND FUTURE{" "}
        <span className="text-customGreen">COMMUNITY LEADERS</span> TO BENEFIT
        THE BROADER COMMUNITY
      </HeaderImageWrapper>

      <PageContentWrapper>
        <PageSectionWrapper isTopSection>
          <SectionHeading
            text="FEATURES OF OUR SCHOLARSHIP SCHEME"
            textColor="text-customGreen"
          />
          <SubTitle title="WE LISTEN TO YOUR STORIES" />
          <p>
            We look for students who do not plainly excel on paper but that have
            a motivating story to tell. We have a strong and trusting
            relationship with local partner organisations and their feedback are
            much valued.{" "}
          </p>
          <br />
          <SubTitle title="WE BELIEVE IN PAYING IT FORWARD" />
          <p>
            We don’t expect the students to pay us back rather, we expect them
            to contribute by giving back to their own communities and playing
            their role – be it big or small – in making a change.{" "}
          </p>
          <br />
          <SubTitle title="WE WORK WITH YOU TO ACHIEVE YOUR GOALS" />
          <p>
            We support students’ incubation projects and provide assistance and
            mentorship to help students achieve their dreams step-by-step.
          </p>
          <br />
          <SubTitle title="WE SERVE THE ONES IN NEED" />
          <p>
            We prioritise the overlooked and aim to fill in gaps in civil
            society by reaching out to those marginalised and less heard voices
            in society.
          </p>
          <br />
          <NavButton link="/patrons" text="BECOMING A PATRON" />
        </PageSectionWrapper>
      </PageContentWrapper>
    </div>
  );
};

export default Scholarship;
