import React from "react";

import { ScholarHeader } from "../../components/HeaderImage";
import MainContentWrapper, {
  ParagraphWrapper,
} from "../../components/MainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

import naymin from "../../assets/scholars/naymin.png";
import naymin1 from "../../assets/scholars/naymin/naymin1.jpg";
import naymin2 from "../../assets/scholars/naymin/naymin2.jpg";
import naymin3 from "../../assets/scholars/naymin/naymin3.jpg";

const images = [naymin1, naymin2, naymin3];

const programs = [
  "Rangsit University, Bangkok",
  "Civil Engineering",
  "3rd Year in the programme",
];

const facts = [
  {
    question: "If you could have dinner with a famous person, who would it be?",
    answer:
      "Jack Ma. He started from zero but attained incredible success through utter determination. It would be a huge privilege if I could meet him!",
  },
  {
    question: "Who is the most inspirational person in your life?",
    answer:
      "My Dad. He was a primary school drop-out and really struggles to support my family. Nonetheless, he has always been generous to me (when I was young and didn't know better, I always asked him for pocket money and he would never refuse!). Hard labour has taken a toll on his health. I hope I can be as selfless as him.",
  },
];

const NayMin = () => {
  return (
    <div>
      <ScholarHeader
        imgUrl="bg-[url('/src/assets/programmes.jpg')]"
        isShading
        name="nay min"
        program="Civil Engineering"
        university="Rangsit University"
      />
      <MainContentWrapper>
        <ScholarArticleWrapper name="nay min">
          <ParagraphWrapper>
            My name is Saw Nay Min. I am a Burmese student studying Civil
            Engineering at Rangsit University, Bangkok, Thailand.
          </ParagraphWrapper>
          <ParagraphWrapper>
            When I was young, I lived in Myanmar with my family. However, my
            parents couldn’t afford my school fees so I was sent to a migrant
            school on the Thai-Myanmar border. I used to visit my family once a
            year. I remember those journeys vividly: many parts of the road,
            particularly those between Myawaddy to Hpa An, would be out of
            repair. They would even be inundated during the rainy season. The
            long and unforgiving commutes seared into my memory. Another
            memorable aspect was the stark change in landscape as we traveled
            from Thailand to Myanmar: unlike our more advanced neighbour,
            Myanmar’s infrastructure was deplorable. The contrast became even
            sharper as I traveled to my village, which could only be reached by
            winding muddy paths.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I came to realize that poor infrastructure was as much a cause as a
            consequence of our economic problems. For example, it took a day to
            travel from my village to the nearest town, making any high volume
            trade impossible. That's how I decided to become a civil engineer.
          </ParagraphWrapper>
          <ParagraphWrapper>
            After studying the General Education Diploma in my migrant high
            school, I enrolled in the civil engineering programme at Rangsit
            University. University has not been easy. I encountered problems
            because I was unaccustomed to the teaching method. However, with
            much determination, I am glad to say I’ve made significant
            improvements compared to my 1st year and am currently doing quite
            well.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I still have much to learn about Civil Engineering, but I am ever
            grateful for the opportunity to be transformed an ordinary boy into
            an engineer-to-be. I thank Connecting Myanmar for supporting me
            financially, and also my dearest high school teacher Steve Gomersall
            for believing in me. I am eager to acquire the knowledge that would
            help me make a difference to my home country. Please stay tuned as I
            pave my way to the future.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={naymin}
          name="Saw Nay Min"
          age="23"
          ethnicity="Karen"
          placeOfBirth="Naung Ka Top, Bee Lin, Mon State, Myanmar"
          programs={programs}
          facts={facts}
          images={images}
        />
      </MainContentWrapper>
    </div>
  );
};

export default NayMin;
