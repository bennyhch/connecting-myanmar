import React from "react";

import deekuChart from "../../assets/scholars/deeku/deeku_chart.png";
import deeku from "../../assets/scholars/deeku.png";
import deeku1 from "../../assets/scholars/deeku/deeku1.jpg";
import deeku2 from "../../assets/scholars/deeku/deeku2.jpg";
import { ScholarHeader } from "../../components/HeaderImage";
import MainContentWrapper, {
  ParagraphWrapper,
} from "../../components/MainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

const images = [deeku1, deeku2];

const programs = [
  "University of the Thai Chamber of Commerce",
  "Bachelor's, International Business Management",
  "1st Year in Programme",
];

const goals = [
  "Combine my business knowledge and passion in teaching by sharing business knowledge with Burmese youth",
  "Enhance access to quality education in Myanmar",
  "Empower Burmese youth to start companies and thus to propel Myanmar's economic development",
];

const facts = [
  {
    question: "If you could choose a superpower, what would that be?",
    answer:
      "Teleportation. I love traveling but it is expensive. Teleportation would allow me to meet my friends and relatives easily as well as to explore the world.",
  },
  {
    question: "If you could switch lives with anyone, who would that be?",
    answer:
      "Designing or drawing - I have always been interested in art, and even aspired to become an illustrator when I was young! Alternatively, I would choose to learn composing. I really enjoy listening to music, but do not know how to play any musical instruments, so I always admired people who could make music.",
  },
  {
    question: "If you could switch lives with anyone, who would that be?",
    answer:
      "I do not want to switch lives with anyone, but if I have a chance, I want to live as a better version of my life doing what I wanted to do (such as being an illustrator or a musician).",
  },
];

const Deeku = () => {
  return (
    <div>
      <ScholarHeader
        isShading
        imgUrl="bg-[url('/src/assets/scholars/deeku/deeku_cover.png')]"
        name="Deeku"
        chart={deekuChart}
        program="International Business Management"
        university="University of the Thai Chamber of Commerce"
      />
      <MainContentWrapper>
        <ScholarArticleWrapper name="Deeku" chart={deekuChart}>
          <ParagraphWrapper>
            Hi! My name is Deeku. I was born in Kayah State, Myanmar. When I was
            10 years old, my family and I moved to Mae La Refugee Camp at the
            Thai- Myanmar border.
          </ParagraphWrapper>

          <ParagraphWrapper>
            As a girl in the refugee camp, I learned to cherish every learning
            opportunity that I had been fortunate enough to get my hands on. I
            worked hard and consistently ranked top 5% of my class. This in turn
            earned me a place in a Liberal Studies diploma programme at the
            Australian Catholic University. It was programme offered to refugee
            students and was equivalent to year 1 of a bachelor’s degree. I
            aspired to further pursue a bachelor’s degree afterwards.
          </ParagraphWrapper>

          <ParagraphWrapper>
            Unfortunately, my plan to obtain a bachelor’s degree had to be
            postponed due to financial difficulties at home. I felt very
            helpless and upset, but I never gave up and continued to challenge
            myself intellectually. I chose to work as a teacher, a private tutor
            as well as an interpreter at an international firm. All these
            experiences consolidated my knowledge and language skills.
          </ParagraphWrapper>

          <ParagraphWrapper>
            I am very grateful that after several years, I am finally able to
            afford university education. I was delighted that I was even
            accepted by more than one university! At first, I wanted to study in
            Taiwan, but I could not do so due to visa complications owing to my
            refugee status. However, I am very grateful that I have now
            commenced a bachelor’s degree in International Business Management
            at the University of Thai Chamber of Commerce, which offers
            excellent business education.
          </ParagraphWrapper>

          <ParagraphWrapper>
            I am very interested in the business world as I believe that it is
            essential to a country’s development. In the future, I hope to
            combine my knowledge in business with my passion in teaching – by
            sharing my business knowledge with Burmese youth, I hope to help
            them set foot on the business arena, and thus provide momentum to
            our country’s economic development. It is my dream that one day,
            Myanmar would blossom with start-ups and robust businesses,
            competing with the world.
          </ParagraphWrapper>

          <p>
            "I understand the importance of equal access to education. These are
            photos of me being a volunteer teaching at a migrant school."
          </p>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={deeku}
          name="Deeku"
          age="22"
          ethnicity="Shan"
          placeOfBirth="Loikaw, Myanmar"
          programs={programs}
          goals={goals}
          facts={facts}
          images={images}
        />
      </MainContentWrapper>
    </div>
  );
};

export default Deeku;
