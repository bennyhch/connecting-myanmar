import React from "react";

import { ScholarHeader } from "../../components/HeaderImage";
import ScholarProfile from "../../components/ScholarProfile";

import dingoChart from "../../assets/scholars/dingo_chart.png";
import dingo from "../../assets/scholars/dingo.png";
import dingo1 from "../../assets/scholars/dingo1.jpg";
import dingo2 from "../../assets/scholars/dingo2.jpg";
import dingo3 from "../../assets/scholars/dingo3.jpg";
import dingo4 from "../../assets/scholars/dingo4.jpg";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import MainContentWrapper, {
  ParagraphWrapper,
} from "../../components/MainContentWrapper";

const images = [dingo1, dingo2, dingo3, dingo4];

const programs = [
  "University of the Thai Chamber of Commerce (UTCC)",
  "Bachelor's, Business Management",
  "2nd Year in Programme",
];
const goals = [
  "Set up his own social enterprise",
  "Create a better living place for his community",
];
const facts = [
  {
    question: "If you have a superpower, what would that be?",
    answer:
      "I would like to be like Flash who can travel quickly, accomplishing a lot in a short time – and of course, to meet up with my friends around the world in a second.",
  },
  {
    question: "What’s next on your bucket list?",
    answer: "To be able to speak Thai and Chinese very fluently!",
  },
];

const Dingo = () => {
  return (
    <div>
      <ScholarHeader
        isShading
        imgUrl="bg-[url('/src/assets/scholars/dingo.png')]"
        name="Dingo"
        program="Business Management"
        university="University of the Thai Chamber of Commerce"
      />
      <MainContentWrapper>
        <ScholarArticleWrapper name="Dingo" chart={dingoChart}>
          <ParagraphWrapper>Fleeing to Thailand</ParagraphWrapper>

          <ParagraphWrapper>
            Hi, I am Dingo! I was born in Loikaw, Myanmar and is Shan by
            ethnicity. My family and I relocated to Mae La Camp, a refugee camp
            along the Thai-Burma border in 2008 as my family were living and
            financial issues then and we have been staying there for 10 years
            ever since.
          </ParagraphWrapper>

          <ParagraphWrapper>
            By the time I arrived in Thailand, I haven't completed my high
            school studies yet and therefore continued so at Anglican Language
            and Computer Centre (ALCC) in the camp. I then obtained a Diploma in
            Liberal Studies in Australian Catholic University through a
            combination of online and face-to-face lessons and graduated in the
            year 2013. After graduation, I spent 4-5 years working in various
            INGOs, including Save the Children, Burma Link and Human Rights
            Watch conducting translation work and other administrative duties.
          </ParagraphWrapper>

          <ParagraphWrapper>
            My interest in social entrepreneurship and friendship with
            Connecting Myanmar
          </ParagraphWrapper>

          <ParagraphWrapper>
            I have always been interested in creating social change via
            conducting sustainable and responsible businesses. The notion of
            social entrepreneurship in particular intrigues me much. In the year
            of 2018, I got an offer from the University of the Thai Chamber of
            Commerce (UTCC) to study Business Management. While I very much wish
            to take up the offer, I struggled to obtain financial support for my
            studies. And it was at that time that I turned to Connecting Myanmar
            for their support.
          </ParagraphWrapper>

          <ParagraphWrapper>
            My story with Connecting Myanmar traced back to the summer of 2011
            when volunteers from the University of Hong Kong came taught English
            at ALCC. There I met Patricia, who now is one of the co-founders of
            Connecting Myanmar and subsequently, got introduced to Edward, Rose
            and many others involved in the organization. It did not take long
            before we became friends and what Connecting Myanmar does right now
            continues to be a positive motivation to me to turn dreams of
            serving the underprivileged into practical reality.
          </ParagraphWrapper>

          <ParagraphWrapper>
            Thanks to Connecting Myanmar, I now am a Year 2 student to-be at
            UTCC and within a year, I have been to various places around the
            world, including Vietnam, Taiwan, China, Laos, Hong Kong and the
            United States joining different student exchange programs, acting as
            ASEAN ambassador, taking part in business competitions and attending
            courses abroad together with students from Myanmar, India, South
            Africa, China and many more.
          </ParagraphWrapper>

          <ParagraphWrapper>My aspiration</ParagraphWrapper>

          <ParagraphWrapper>
            I wish to set up my own social enterprise one day – using what I
            have learnt at school and the experience I have gained throughout
            the years to create a better living place for my community and
            people in Myanmar!
          </ParagraphWrapper>

          <p>
            "I have known Dingo since 2011. He has always been self-motivated.
            Even in the most difficult times, he never gave up his dream of
            getting tertiary education. I was so amazed when he told me he had
            taught himself English by reading books borrowed from the library of
            a refugee camp in order to pass the entrance test of a school. With
            perseverance and courage, he always chooses to step out of his
            comfort zone and grow." - Patricia Chen, former teacher of Dingo
            from HKU​, coordinator of Connecting Myanmar"
          </p>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={dingo}
          name="Dingo"
          age="23"
          ethnicity="Shan"
          placeOfBirth="Loikaw"
          programs={programs}
          goals={goals}
          facts={facts}
          images={images}
        />
      </MainContentWrapper>
    </div>
  );
};

export default Dingo;
