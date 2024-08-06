import React from "react";
import { SectionHeading } from "../utils/wrappers";

import HeaderImageWrapper from "../components/HeaderImage";
import PageContentWrapper, {
  PageSectionWrapper,
} from "../components/PageContentWrapper";

const Structure = () => {
  return (
    <div>
      <HeaderImageWrapper
        imgUrl="bg-[url('/src/assets/structure.jpg')]"
        isShading
      >
        ORGANIZATIONAL <span className="text-customGreen">STRUCTURE</span>
      </HeaderImageWrapper>

      <PageContentWrapper>
        <PageSectionWrapper isTopSection>
          <SectionHeading
            text="JOIN US TO BECOME A PART OF CM FAMILY!"
            textColor="text-customGold"
          />
          <p>Connecting Myanmar completely relies on volunteers to function.</p>
          <br />
          <p>
            We look for more volunteers who share our vision of having an
            empathetic world where everyone has the equal opportunity to realise
            their potential and aspirations. A volunteer at CM can contribute in
            many ways - designing promotional materials, managing CM’s social
            platforms (Instagram, Facebook, LinkedIn) and website, organizing
            events (e.g. BBQ party, Art Jamming gathering), devising the
            Scholarship Scheme, helping out with our annual art sale, and so
            many more!{" "}
          </p>
          <br />
          <p>
            If you would like to learn more about who we are and what we do, we
            encourage you to join our next gathering (to chat, eat, network -
            super casual! :D). You may fill in the form at
            https://forms.gle/UQa5F5tWVKiRwhSj7 and we will get in touch as soon
            as we can!
          </p>
        </PageSectionWrapper>
      </PageContentWrapper>
    </div>
  );
};

export default Structure;
