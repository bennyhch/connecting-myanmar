import React from "react";

import { ScholarHeader } from "../../components/HeaderImage";
import ScholarMainContentWrapper, {
  ParagraphWrapper,
} from "../../components/ScholarMainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

import aunghtetoo1 from "../../assets/scholars/aunghtetoo/aunghtetoo1.png";
import aunghtetoo2 from "../../assets/scholars/aunghtetoo/aunghtetoo2.png";
import aunghtetoo3 from "../../assets/scholars/aunghtetoo/aunghtetoo3.png";

const images = [aunghtetoo2, aunghtetoo3];

const programs = [
  "Chiang Mai University",
  "Nursing Science",
  "3rd year in his programme",
];

const goals = ["Qualify as a nurse", "Open a clinic in his hometown"];

const AungHtetOo = () => {
  return (
    <div>
      <ScholarHeader
        isShading
        imgUrl="bg-[url('/src/assets/programmes.jpg')]"
        name="saw aung htet oo"
        program="Nursing Science"
        university="Chiang Mai University"
      />
      <ScholarMainContentWrapper>
        <ScholarArticleWrapper name="saw aung htet oo">
          <ParagraphWrapper>
            Hi! I am Aung Htet Oo, a final year nursing student in Chiang Mai
            University.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I was born in a small village in Karen State of Myanmar. We lived
            under the constant fear of armed conflicts and fled countless of
            times. Education was also rare and expensive. My parents wished that
            I could nonetheless become an educated and useful person – as my
            mother used to say “I cannot give you much but I hope you can go to
            school. Don’t be uneducated like me.” Hence, when I was 10, my
            parents sent me to the Mae La refugee camp where there were schools
            for refugees which charged low school fees. I followed my aunt and
            hiked over mountains for three days to reach Mae La camp. It was
            painful to be separated from my family, but I was grateful that I
            could continue my secondary education in peace. After obtaining the
            General Education Diploma, an internationally recognized diploma, I
            was accepted by Chiang Mai University.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I had long aspired to become a nurse. Since I was young, I had a
            weak physique and easily fell sick. This was a nightmare in a small
            village like mine where there was no clinic. Every fever, infection,
            or injury led to long sleepless nights for myself and my parents. We
            could do nothing but to pray for my recovery. The apprehension that
            shrouded our home still haunts me to this date. I understood from
            these frequent unhappy experiences that health was essential to
            happiness. I felt a strong calling to work in healthcare and to
            improve people’s health. I believe that the happiness that I create
            for people would be like a radiant sun that spreads happiness to my
            heart.
          </ParagraphWrapper>
          <ParagraphWrapper>
            After graduation, I will work as a nurse at the NGOs which offer
            medical assistance to refugees in the Thai-Myanmar border. A few
            years after that, I wish to return to Myanmar and qualify as a
            nurse. My ultimate goal is to open a clinic in my hometown. Knowing
            that there are ill people who do not have access to treatment is the
            worst and scariest thing that one could think of. Therefore, I will
            do everything that I can to move closer to my goal.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={aunghtetoo1}
          name="Saw Aung Htet Oo"
          age="25"
          ethnicity="Karen"
          placeOfBirth="Karen State, Myanmar"
          programs={programs}
          goals={goals}
          images={images}
        />
      </ScholarMainContentWrapper>
    </div>
  );
};

export default AungHtetOo;
