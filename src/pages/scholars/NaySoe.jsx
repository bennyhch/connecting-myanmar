import React from "react";

import naysoe from "../../assets/scholars/naysoe.png";
import naysoe1 from "../../assets/scholars/naysoe/naysoe1.jpg";
import naysoe2 from "../../assets/scholars/naysoe/naysoe2.jpg";
import naysoe3 from "../../assets/scholars/naysoe/naysoe3.jpg";
import { ScholarHeader } from "../../components/HeaderImage";
import ScholarMainContentWrapper, {
  ParagraphWrapper,
} from "../../components/ScholarMainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

const images = [naysoe1, naysoe2, naysoe3];

const programs = [
  "Bachelor of Education in Teaching",
  "Asia Pacific International University",
];

const facts = [
  {
    question: "If you could live anywhere in the world, where would it be?",
    answer:
      "USA. I believe the culture and environment of a superpower would be very different from that in Myanmar.",
  },
  {
    question: "If you could turn into an animal, what would it be?",
    answer:
      "A lion. It is the king of the jungle. It is my desire to be a powerful person who can lead positive change.",
  },
];

const highlight = [
  "Aspiring teacher",
  "Academic Excellence Award 2022 at Asia Pacific International University",
];

const NaySoe = () => {
  return (
    <div>
      <ScholarHeader
        imgUrl="bg-[url('/src/assets/scholars/naysoe/naysoe_cover.jpg')]"
        name="Nay Soe"
        program="Bachelor of Education in Teaching"
        university="Asia Pacific International University"
      />
      <ScholarMainContentWrapper>
        <ScholarArticleWrapper name="Nay Soe" highlight={highlight}>
          <ParagraphWrapper>
            Hi I’m Nay Soe. I have recently graduated with a Bachelor’s degree
            in Education from Asia Pacific International University.
          </ParagraphWrapper>
          <ParagraphWrapper>
            When I was young, I migrated to Umpiem refugee camp. The reason was
            that migrant schools charged lower school fees than Burmese schools.
            I was pained by the separation from my family and community. I
            always wished to return to Myanmar one day. Indeed, I dreamt of
            becoming an army commander to protect my ethnic group in Myanmar.
          </ParagraphWrapper>
          <ParagraphWrapper>
            My plan changed, however, when I met my teacher, Steve Gomersall.
            Steve established a school that helps Burmese refugees enroll in
            Thai universities. We studied for an internationally recognized
            public exam. Steve encouraged us even when we did not believe in
            ourselves. He didn't leave any of us behind, giving extra support to
            weaker students. I realized that teachers were also army commander,
            leading students to fight personal battles. Steve changed our lives
            as we were admitted into Thai universities. I decided to follow
            Steve’s footsteps and become a teacher.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I’ve learnt a lot at university, particularly during internships.
            Not only did I obtain hands-on experience in managing a class, but I
            also forged close relationships with my students. I was very touched
            as they saw me as a real teacher, not just an intern.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I planned to return to Steve’s school after graduation to teach
            students like my younger self. A hiccup was that I sustained an
            injury in February 2022. Hence, I will join Steve's school in a few
            months' time, hopefully in August 2022.
          </ParagraphWrapper>
          <ParagraphWrapper>
            In the long run, I want to become an English teacher at a Burmese
            public school: the students there come from humble backgrounds and
            often fail the English public exam. I want to help them enter
            university. I will help them take the future into their own hands.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={naysoe}
          name="Nay Soe"
          age="25"
          ethnicity="Karen"
          placeOfBirth="Myawaddy township, Karen State, Myanmar"
          facts={facts}
          programs={programs}
          images={images}
        />
      </ScholarMainContentWrapper>
    </div>
  );
};

export default NaySoe;
