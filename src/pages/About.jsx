import React from "react";

import { SectionHeading } from "../utils/wrappers";

import HeaderImageWrapper from "../components/HeaderImage";
import PageContentWrapper, {
  PageSectionWrapper,
} from "../components/PageContentWrapper";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <HeaderImageWrapper imgUrl="bg-[url('/src/assets/about.jpg')]">
        AN EMPATHETIC WORLD WHERE EVERYONE HAS THE{" "}
        <span className="text-customGreen">EQUAL OPPORTUNITY</span> TO REALISE
        ​THEIR POTENTIALS AND ASPIRATIONS.
      </HeaderImageWrapper>

      <PageContentWrapper>
        <PageSectionWrapper isTopSection>
          <SectionHeading text="OUR STORY" textColor="text-customGold" />
          <p>Every journey has a story to tell.</p>
          <br />
          <p>
            It all started in the summer of 2011, as students back then from
            various disciplines at the University of Hong Kong, we joined a
            programme called the Migrant Outreach Education Initiative (MOEI)
            organized by the Faculty of Social Sciences. In the programme, we
            were given the opportunity to teach English to a group of Myanmar
            refugee / migrant children along the Thai-Burma border. While the
            children absorb knowledge at a speed of a sponge, we volunteers too
            were given a pair of new lens as we see a world beyond our
            privileged setting.
          </p>
          <br />
          <p>
            As we all returned to Hong Kong with a heavy heart, we pondered on
            how we could give back to this community, a group of smiling faces
            who took us in almost immediately as one of them - as family. It was
            then we decided to use what we learnt in University, our knowledge
            from our respective disciplines, to pay it forward to this land we
            proudly called our second home.
          </p>
          <br />
          <p>And this has become the spark of our journey.</p>
          <br />
          <p>
            From there on sprang our School Construction programme, Playground
            Renovation programme,{" "}
            <span className="text-customGreen">
              {/* TODO: refactor the url...*/}
              {/* <a href="/connecting-myanmar/programmes">Street Law programme</a> */}
              <Link to="/programmes">Street Law programme</Link>
            </span>
            , Journalism Literacy programme, Medical programme and many more.
            Each year, University students from various disciplines through
            different summer voluntary programmes head to the Thai-Burma border
            and various cities in Myanmar to conduct workshops and projects,
            translating their knowledge into practical use, and along so built
            strong and lasting friendships with the Myanmar community.
          </p>
          <br />
          <p>
            From developing programmes and projects, in the year 2017, we also
            began funding our first batch of Myanmar students to Universities
            abroad via our{" "}
            <span className="text-customGreen">
              {/* TODO: refactor the url...*/}
              {/* <a href="/connecting-myanmar/scholarship">Scholarship Scheme</a> */}
              <Link to="/scholarship">Scholarship Scheme</Link>
            </span>{" "}
            - many of which we got acquainted years ago in our summer programmes
            as participants or members of our local partnering organisations.
          </p>
          <br />
          <p>
            The journey continues as we explore what lies ahead in the next
            chapter - and we invite you too to join us as we dream and envision
            an empathetic world where everyone has the equal opportunity to
            realise their potentials and aspirations.
          </p>
        </PageSectionWrapper>
      </PageContentWrapper>
    </div>
  );
};

export default About;
