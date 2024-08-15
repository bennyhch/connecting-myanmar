import React from "react";

import HeaderImageWrapper from "../components/HeaderImage";
import PageContentWrapper, {
  PageSectionWrapper,
} from "../components/PageContentWrapper";
import IconLink, { socialMediaIconsData } from "../components/IconLink";

const ContactUs = () => {
  return (
    <div>
      <HeaderImageWrapper imgUrl="bg-[url('/src/assets/ourScholars.jpg')]" />

      <PageContentWrapper>
        <PageSectionWrapper isTopSection>
          <h1 className="text-center text-4xl font-bold">Get in touch</h1>
          <br />
          <br />
          <p className="text-center text-lg">
            We love hearing from people, and are keen for people to reach out to
            us with any questions or feedbacks!
          </p>
          <p className="text-center text-lg font-light">
            Email us at{" "}
            <a href="mailto:info@connectingmyanmar.org" className="underline">
              info@connectingmyanmar.org
            </a>{" "}
          </p>
          <br />
          <br />
          <p className="text-center text-lg">
            Follow us on social media for the latest updates!
          </p>
          <br />
          <div className="flex justify-center items-center gap-4">
            {socialMediaIconsData.map((iconData, index) => (
              <IconLink key={index} {...iconData} />
            ))}
          </div>
        </PageSectionWrapper>
      </PageContentWrapper>
    </div>
  );
};

export default ContactUs;
