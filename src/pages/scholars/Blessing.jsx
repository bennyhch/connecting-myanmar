import React from "react";
import { ScholarHeader } from "../../components/HeaderImage";
import MainContentWrapper from "../../components/MainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

import blessingChart from "../../assets/scholars/blessing_chart.png";
import blessing from "../../assets/scholars/blessing.jpg";
import blessing1 from "../../assets/scholars/blessing1.jpg";
import blessing2 from "../../assets/scholars/blessing2.jpg";
import blessing3 from "../../assets/scholars/blessing3.jpg";
import blessing4 from "../../assets/scholars/blessing4.jpg";

const images = [blessing1, blessing2, blessing3, blessing4];

const programs = [
  "Chiang Mai University",
  "Bachelor's, Nursing Science",
  "2nd Year in Programme",
];

const goals = ["Become a registered nurse in Myanmar"];

const facts = [
  {
    question: "What is the country you would like to visit the most and why? ",
    answer:
      "There are a lot of countries I would like to visit but, If I have to choose, I would choose Switzerland. Because it is really far from here and they have really beautiful mountains.",
  },
  {
    question: "What would you say is your best quality? ",
    answer:
      "I think I am a good listener. Whenever my friends talk to me about their problems, I always listen and I never get tired of them.",
  },
];

const Blessing = () => {
  return (
    <div>
      <ScholarHeader
        imgUrl="bg-[url('/src/assets/scholars/blessing_cover.jpg')]"
        name="Naw Blessing"
        program="Nursing Science"
        university="Chiang Mai University"
      />
      <MainContentWrapper>
        <ScholarArticleWrapper name="Naw Blessing" chart={blessingChart}>
          <p>
            “I know I can’t change my country but, I want to be a part of the
            change”
          </p>
          <br />
          <br />

          <p>
            When I was 15, my family had to leave our home in Southern Shan
            State to pursue a better life and education in Thai-Burma border. We
            moved to Mae La refugee camp after one of my uncles who was a Karen
            National Union (KNU) member got arrested and was put in jail. I
            finished my high school in the camp and worked for Adventist
            Development and Relief Agency (ADRA) for a year before studying at
            Australian Catholic University (ACU).
          </p>
          <br />
          <br />

          <p>
            After ACU, I wanted to study at a University, but I didn’t know what
            I really wanted to pursue or what I was actually passionate in. I
            applied for many scholarships, but they all failed. So, I gave up
            and decided that it was time for me to support my family. I got a
            job at Mae Fah Luang Foundation as a nurse aid. The organization was
            founded by Princess Srinagarindra who later became my role model.
            Although she was a member of the royal family, she started her
            career as a nurse and worked all her life to improve the healthcare
            of hill tribe people. I wanted to be like her. I wanted to help my
            people one day.
          </p>
          <br />
          <br />

          <p>
            After working at Mae Fah Luang foundation for five years, I started
            to question myself. I saw all my friends graduating from their
            Universities and I wanted to be as successful like they were. I also
            learnt that a diploma can help me progress with my career and now
            that I found my passion, I wished to study nursing and become a
            registered nurse in Myanmar one day. I decided to break out of my
            comfort zone – while it was a scary decision for me to quit a job
            with reliable salary and to pursue something that was not all
            certain at the time to me, I know deep inside this is what I should
            do in order for me to grow.
          </p>
          <br />
          <br />

          <p>
            It was not easy to get admitted to Chiang Mai University, but
            thankfully, my previous work experience helped me secure a place.
            Now, I am in my second year studying Nursing Science at an
            international University. Life as a student is very exciting. I
            enjoy doing group presentation, project and research. It is also
            very inspiring to meet classmates and professors from different
            countries.
          </p>
          <br />
          <br />

          <p>
            Connecting with Connecting Myanmar through Medical Project in Mae
            Sot
          </p>
          <br />
          <br />

          <p>
            I first learnt about Connecting Myanmar when a friend of mine
            approached me for a favour. He asked me if I wanted to help with
            translating medical document for a project in Mae Sot. Although it
            is unpaid, I decided to help because I believed this will give me
            some experience in translation. That’s how I become involved in
            Connecting Myanmar’s medical project and ended up joining the group
            in June for their two-week programme promoting healthcare at migrant
            schools in Mae Sot area.
          </p>
          <br />
          <br />

          <p>
            This program taught me a lot; I learnt a lot from fellow students
            from HKU. I learnt to work with a team and learn to communicate with
            fellow teammates. It is also a great project for me since I am
            passionate in healthcare. I would like to get involved in more
            project like this in the future.
          </p>
          <br />
          <br />

          <p>
            Naw Blessing was one of a group of very impressive young students in
            the ACU’s diploma program when I first arrived in this
            region...Apart from being an outstanding student academically,
            Blessing impressed me with her calm and confident personality, her
            generosity of spirit and her very pleasant disposition....She will
            make a major contribution to raising the health standards of her
            community. The ACU is proud to think that they gave her the
            opportunity to take the first step towards the fulfilment of her
            altruistic goal to serve her community in the caring profession of
            nursing." ​ - Rosaleen, Honorary Fellow of Australian Catholic
            University
          </p>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={blessing}
          name="Naw Blessing"
          age="27"
          ethnicity="Karan/Lisu"
          placeOfBirth="Namsan, Sourthern Shan State​"
          programs={programs}
          goals={goals}
          facts={facts}
          images={images}
        />
      </MainContentWrapper>
    </div>
  );
};

export default Blessing;
