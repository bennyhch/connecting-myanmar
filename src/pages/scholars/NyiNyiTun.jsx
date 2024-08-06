import React from "react";

import { ScholarHeader } from "../../components/HeaderImage";
import ScholarMainContentWrapper, {
  ParagraphWrapper,
} from "../../components/ScholarMainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

import nyinyitun from "../../assets/scholars/nyinyitun.png";
import nyinyitun1 from "../../assets/scholars/nyinyitun/nyi1.jpg";
import nyinyitun2 from "../../assets/scholars/nyinyitun/nyi2.jpg";

const images = [nyinyitun1, nyinyitun2];

const programs = [
  "Business Administration",
  "Mae Fah Lung University",
  "3rd year in the program",
];

const goals = ["To become an entrepreneur"];

// Q: If you could learn anything in 24 hours, what would you learn?
// A: Graphic Design

// Q: Who inspired you the most?
// A: Steve Gomersall. He founded the school where I and other migrants studied in the refugee camp. I greatly admire his kind heart and determination.

// Q: If you could teach a class on something, what would it be?
// A: Humanities. There doesn't have to be any tension or conflict if we value our indigenous culture and embrace our differences.

const facts = [
  {
    question: "If you could learn anything in 24 hours, what would you learn?",
    answer: "Graphic Design",
  },
  {
    question: "Who inspired you the most?",
    answer:
      "Steve Gomersall. He founded the school where I and other migrants studied in the refugee camp. I greatly admire his kind heart and determination.",
  },
  {
    question: "If you could teach a class on something, what would it be?",
    answer:
      "Humanities. There doesn't have to be any tension or conflict if we value our indigenous culture and embrace our differences.",
  },
];

const NyiNyiTun = () => {
  return (
    <div>
      <ScholarHeader
        imgUrl="bg-[url('/src/assets/programmes.jpg')]"
        isShading
        name="nyi nyi tun"
        program="Business Administration"
        university="Mae Fah Lung University"
      />
      <ScholarMainContentWrapper>
        <ScholarArticleWrapper name="nyi nyi tun">
          <ParagraphWrapper>
            My family used to lead a humble life in the Karen State of Myanmar.
            We farmed on a beautiful piece of land and harvested colourful crops
            like watermelons, pumpkins and tomatoes. However, the invasion of
            pests marked the end of our farming business. Our only option was to
            migrate to Mae La Refugee Camp for shelter.
          </ParagraphWrapper>
          <ParagraphWrapper>
            As the last born of five children, I have always been acutely aware
            of the financial pressure at home - My elder siblings have their own
            families and are unable to care for my retired parents. This made me
            aspire to become an entreprenuer. I noticed how the little
            characters in our village, like owners of grocery stores or snack
            shops, ran successful businesses. I knew that with more creativity,
            I could be even more successful than them.
          </ParagraphWrapper>
          <ParagraphWrapper>
            Obtaining a business degree was essential for acquiring knowledge as
            well as further opportunities. Hence, I studied hard for the General
            Education Diploma in the refugee camp. It was a great challenge for
            me, for I had little training in essay writing, but had to write
            essays on the history of the United States. However, my hard work
            paid off when I was accepted by the business programme of Mae Fah
            Lung University!
          </ParagraphWrapper>
          <ParagraphWrapper>
            I am very grateful for university education, though it has not been
            an easy journey. For example, many lecturers deliver lessons in
            Thai, so I could only rely on textbooks or conduct additional
            research. I also struggled to meet my expenses. Nonetheless, I have
            emerged from these challenges as a more resilient person, which will
            make me a better entrepreneur.
          </ParagraphWrapper>
          <ParagraphWrapper>
            After graduation, I wish to join a large corporation for a couple of
            years, so I could learn from seniors. After that, I hope to
            establish my own business. A secret dream I’ve harboured is to
            establish a market for organic vegetables in my hometown: There is
            an increasing number of tourists visiting my hometown. At the heart
            of the scenic river, many farmers farm on the marshes. It seems like
            a good idea to take tourists there and sell valuable crops to
            tourists. This would create jobs for many people in my village. I
            hope this idea could be turned into reality one day.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={nyinyitun}
          name="Nyi Nyi Tun"
          age="26"
          ethnicity="Karen"
          placeOfBirth="Karen State, Myanmar"
          programs={programs}
          goals={goals}
          facts={facts}
          images={images}
        />
      </ScholarMainContentWrapper>
    </div>
  );
};

export default NyiNyiTun;
