import React from "react";

import { ScholarHeader } from "../../components/HeaderImage";
import MainContentWrapper, {
  ParagraphWrapper,
} from "../../components/MainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

import nayKawHtoo from "../../assets/scholars/sawnaykawhtoo/sawnaykawhtoo.jpg";

const programs = [
  "Chiang Mai University",
  "Bachelor of Arts in Social Sciences",
];

const goals = [
  "To work in an NGO where I can propel positive changes in society.",
];

const facts = [
  {
    question: "What is your greatest adventure?",
    answer:
      "To me, learning and exploring new things at university has been a very eye-opening and exciting adventure.",
  },
  {
    question: "What's the best piece of advice you've ever received?",
    answer:
      '"Try smart, not just hard", which my classmate at university told me.',
  },
  {
    question: "Who is the most inspirational person in your life?",
    answer:
      "My teacher, Steve Gomersall at Brighter Futures School. He is my role model as he has shown me how he overcame through different challenges in life. He always encourages me not to surrender no matter how hard life is. He believes in me and wishes me to become the best figure of my community.",
  },
];

const NayKawHtoo = () => (
  <div>
    <ScholarHeader
      imgUrl="bg-[url('/src/assets/scholars/sawnaykawhtoo/sawnaykawhtoo_cover.jpg')]"
      name="saw nay kaw htoo"
      program="Social Sciences"
      university="Chiang Mai University"
    />
    <MainContentWrapper>
      <ScholarArticleWrapper name="saw nay kaw htoo">
        <ParagraphWrapper>
          Hi, I’m Saw Nay Kaw Htoo! After graduating from high school, I did not
          give too much thought about pursuing a bachelor’s degree – only two
          people from my village went to university. Instead, I responded to a
          strong calling I’ve had since I was young, which was to engage in
          community work.
        </ParagraphWrapper>

        <ParagraphWrapper>
          Hence, after high school graduation, I trained and qualified as a
          Community Health Worker at Mae Tao Clinic at the Thai-Myanmar border,
          providing medical treatment to villagers and refugees. I am grateful
          that during my two years there, I was able to care for the ill and
          weak. However, I also noticed other problems that our patients were
          mired in, including poverty and threats from armed conflicts. I began
          to develop an interest in advancing broader social justice.
        </ParagraphWrapper>

        <ParagraphWrapper>
          In order to learn more about law, social sciences and political
          sciences, I completed a diploma at the Peace Law Academy. Afterwards,
          I joined a United Nations-funded NGO called the “Adventist Development
          and Relief Agency (ADRA) Myanmar”. As the Community Mobilizer, I
          liaised with village leaders in executing community-wide projects like
          a community-based health insurance scheme. Contributing to such
          projects gave me an unprecedented sense of fulfilment. I wished to
          follow the footsteps of my colleagues who had bachelor’s degrees, who
          could play even greater roles such as planning and design. Hence, I
          completed the General Education Diploma and was very happy to be
          accepted by Chiang Mai University, where I am currently studying
          Social Sciences.
        </ParagraphWrapper>

        <ParagraphWrapper>
          To me, education is about empowerment – I hope to empower myself and
          thus to empower others. Myanmar has been through a lot in recent
          years, so community work will be ever-more important. With my passion,
          knowledge and experience, I hope to engage in meaningful projects and
          to contribute to society.
        </ParagraphWrapper>
      </ScholarArticleWrapper>

      <ScholarProfile
        profilePicture={nayKawHtoo}
        name="Saw Nay Kaw Htoo"
        ethnicity="Karen"
        placeOfBirth="Karen State, Myanmar"
        age="29"
        programs={programs}
        goals={goals}
        facts={facts}
      />
    </MainContentWrapper>
  </div>
);

export default NayKawHtoo;
