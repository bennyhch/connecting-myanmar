import React from "react";

import than from "../../assets/scholars/than/than.jpg";
import than1 from "../../assets/scholars/than/than1.jpg";
import than2 from "../../assets/scholars/than/than2.jpg";
import { ScholarHeader } from "../../components/HeaderImage";
import MainContentWrapper, {
  ParagraphWrapper,
} from "../../components/MainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

const images = [than1, than2];

const programs = [
  "Rangsit University International College",
  "Information and Communication Technology",
  "3rd Year in the programme",
];

const goals = [
  "Use technology to improve people's lives, especially those in rural areas of Myanmar",
];

const facts = [
  {
    question: "If you could learn anything in 24 hr, what would you learn?",
    answer: "Learn to sing with perfect pitch",
  },
  {
    question:
      "If you could change anything about your upbringing what would it be?",
    answer:
      "To have a relative (or a friend) who could provide me the tech gears I want.",
  },
  {
    question:
      "If you could be guaranteed one thing in your life (besides money), what would it be?",
    answer: "A non-polluted world.",
  },
];

const ThanHtikeZin = () => {
  return (
    <div>
      <ScholarHeader
        isShading
        imgUrl="bg-[url('/src/assets/scholars/than/than_cover.jpg')]"
        name="saw than htike zin"
        program="Information and Communication Technology"
        university="Rangsit University International College"
      />
      <MainContentWrapper>
        <ScholarArticleWrapper name="saw than htike zin">
          <ParagraphWrapper>
            Hi! My name is Than Htike Zin. There are eight people in my family;
            I am the oldest among three siblings. My parents did not have
            permanent jobs. Hence, in primary school, my father asked me to drop
            out and work. But I refused. My mother allowed me to continue
            schooling provided that I could find a way to solve the problem of
            school fees. Therefore, I attended a school in the refugee camp at
            the Thai-Myanmar border, which was a school for migrants and charged
            minimal school fees. I enjoyed going to school very much. I became
            the leader of my house and also a student representative for my
            school. I also did well in my studies, particularly in mathematics.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I was a helpful friend, often helping my peers with their studies.
            Interestingly, whenever someone encountered problems with their
            phones or desktops, they would also ask me: I loved machines and
            computers. In high school, I used to ask my teacher for permission
            to keep thrown-out school computers. I would then unscrewed their
            parts one by one and study their workings. I guess my interest in
            machines was evident since I was young: I loved disassembling
            household appliances like radios and stoves to learn more about
            them. Eventually, I even helped my computer teacher install software
            for school computers.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I was very grateful that I was able to graduate first in my class.
            After that, I enrolled in Rangsit University, a private university
            in Thailand, to study compute science. I am indebted to everyone who
            made it possible. I love exploring the infinite possibilities of IT.
            I hope that in the future, I can improve people’s lives with the use
            of technology.
          </ParagraphWrapper>

          <p>
            "Upon graduation from Brighter Futures, Than was given the
            outstanding student award. He got the highest scores we had ever
            seen in all four areas of the GED. Outside the classroom, he is an
            independent thinker and always willing to offer help to anyone who
            needs it. I can't think of anyone more deserving of a scholarship" -
            Steve Gommersall, Managing Director of Brighter Futures Pathways
          </p>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={than}
          name="Saw Than Htike Zin"
          age="23"
          ethnicity="Karen"
          placeOfBirth="Thailand"
          programs={programs}
          goals={goals}
          facts={facts}
          images={images}
        />
      </MainContentWrapper>
    </div>
  );
};

export default ThanHtikeZin;
