import React from "react";

import htinlinnzaw from "../../assets/scholars/htinlinnzaw.png";
import { ScholarHeader } from "../../components/HeaderImage";
import ScholarMainContentWrapper, {
  ParagraphWrapper,
} from "../../components/ScholarMainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

const programs = [
  "Mae Fah Luang University",
  "Business Administration",
  "3rd year (as of academic year 2022-23)",
];

const goals = [
  "Improve access to healthcare in rural areas of Myanmar",
  "Increase job opportunities in rural areas of Myanmar",
];

const facts = [
  {
    question: "What is your favourite sport?",
    answer: "Soccer",
  },
  {
    question: "What is your favourite pastime?",
    answer: "Watching movies",
  },
];

const HtinLinZaw = () => {
  return (
    <div>
      <ScholarHeader
        imgUrl="bg-[url('/src/assets/programmes.jpg')]"
        isShading
        name="Htin Linn Zaw"
        program="Business Administration"
        university="Mae Fah Luang University"
      />

      <ScholarMainContentWrapper>
        <ScholarArticleWrapper name="Htin Linn Zaw">
          <ParagraphWrapper>
            Hi! I’m Htin Linn Zaw, a second-year student studying Business
            Administration in Mae Fah Lung University.
          </ParagraphWrapper>
          <ParagraphWrapper>
            When I was young, I migrated to a refugee camp at the Thai-Myanmar
            border to seek education; My parents did not have permanent jobs so
            they could not afford the expensive school fees in Myanmar. I was
            also grateful, however, to have attended a post-secondary school in
            the refugee camp. It was run by an Englishman who drew up a creative
            curriculum: we were required to intern at non-profit organizations
            in order to contribute to our community. I worked in the Back Pack
            Health Worker Team (“BPHWT”), the main provider of primary health
            care in Myanmar’s rural areas. It was wonderful to see the poor
            rural residents recover from infectious diseases like malaria after
            our assistance.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I observed that non-profit organizations, like profit-making
            companies, could not operate without skilled management. For
            example, BPHWT relied on smart managers who liaised with other
            collaborators to expand BPHWT's impact. This made me appreciate the
            importance of business knowledge. BPHWT's generous donors from the
            private sector also showed me how businesses could contribute to
            meaningful causes. Therefore, I decided to study apply to university
            and study Business Administration.
          </ParagraphWrapper>
          <ParagraphWrapper>
            University education has greatly broadened my horizons. After
            graduation, I plan to join the management team of BPHWT as it
            sponsored part of my school fees. Once I gain sufficient experience,
            I would establish my own organization or business. For example, I am
            thinking of opening a restaurant chain, because restaurants provide
            many job opportunities to low-skilled labour. In the long run, I
            hope to climb to a powerful position so that I could lead others to
            contribute to social betterment.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={htinlinnzaw}
          name="Htin Linn Zaw"
          age="24"
          ethnicity="Karen"
          placeOfBirth="Hpa An township, Kayin. State, Myanmar."
          programs={programs}
          facts={facts}
          goals={goals}
        />
      </ScholarMainContentWrapper>
    </div>
  );
};

export default HtinLinZaw;
