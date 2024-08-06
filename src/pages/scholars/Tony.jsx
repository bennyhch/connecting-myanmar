import React from "react";

import tony from "../../assets/scholars/tony/tony.jpeg";
import { ScholarHeader } from "../../components/HeaderImage";
import ScholarMainContentWrapper, {
  ParagraphWrapper,
} from "../../components/ScholarMainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

const programs = [
  "Chiang Mai Rajabhat University",
  "English for International Communication",
  "3rd year in the programme",
];

const goals = [
  "To become a knowledgeable and capable person so that I could contribute to society in the future.",
];
// Q: Who is your idol?
// A: Dr. Cynthia Muang, founder of Mae Tao Clinic which provides medical treatment to refugees.

// Q: What is the kindest thing someone has ever done for you?
// A: Encouraging me when I lacked confidence and hope.

// Q: If you could give a piece of advice to your younger self, what would that be?
// A: To give myself a second chance when I failed and to think of new ways to solve problems.
const facts = [
  {
    question: "Who is your idol?",
    answer:
      "Dr. Cynthia Muang, founder of Mae Tao Clinic which provides medical treatment to refugees.",
  },
  {
    question: "What is the kindest thing someone has ever done for you?",
    answer: "Encouraging me when I lacked confidence and hope.",
  },
  {
    question:
      "If you could give a piece of advice to your younger self, what would that be?",
    answer:
      "To give myself a second chance when I failed and to think of new ways to solveproblems.",
  },
];

const Tony = () => {
  return (
    <div>
      <ScholarHeader
        isShading
        imgUrl="bg-[url('/src/assets/scholars/tony.png')]"
        name="Tony"
        program="English for International Communication"
        university="Chiang Mai Rajabhat University"
      />
      <ScholarMainContentWrapper>
        <ScholarArticleWrapper name="Tony">
          <ParagraphWrapper>
            Hi! I’m Tun Aye (a.k.a. Tony), an English major in Chiang Mai
            Rajabhat University.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I know four languages/dialects - Karen (dialect in Myanmar),
            Burmese, Thai and English. People say that every language is a
            universe. In my case, learning a new language always brought me to a
            better place.
          </ParagraphWrapper>
          <ParagraphWrapper>
            When I was 10 years old, I migrated from my hometown in Karen State
            of Myanmar, to a refugee camp in Thailand. As a Karenni, I couldn't
            communicate with other residents in the camp, who spoke either
            mainstream Burmese or Thai. I bridged this painful gap by I learning
            both languages.
          </ParagraphWrapper>
          <ParagraphWrapper>
            High school was where I encountered English. I was very interested
            in the subject, as I believed that good English skills were the key
            to finding a respectable job. Despite practising industriously, by
            graduation, I still lagged behind due to my poor foundation.
            However, I've decided to continue reading English in university. I
            believe that mastering English is the gateway to a better future.
          </ParagraphWrapper>
          <ParagraphWrapper>
            Given my humble background, I am constantly aware of how lucky I am
            to attend university. I hope to join a reputable company to empower
            myself. In the long run, I hope to help the many others who are less
            fortunate.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={tony}
          name="Tony"
          ethnicity="Karen"
          age="25"
          placeOfBirth="Karen State, Myanmar"
          programs={programs}
          goals={goals}
          facts={facts}
        />
      </ScholarMainContentWrapper>
    </div>
  );
};

export default Tony;
