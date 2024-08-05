import React from "react";

import satkyar from "../../assets/scholars/satkyar.png";
import satkyar1 from "../../assets/scholars/satkyar1.jpg";
import satkyar2 from "../../assets/scholars/satkyar2.jpg";
import satkyar3 from "../../assets/scholars/satkyar3.jpg";
import satkyar4 from "../../assets/scholars/satkyar4.jpg";
import { ScholarHeader } from "../../components/HeaderImage";

import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import satkyarChart from "../../assets/scholars/satkyar_chart.png";
import ScholarProfile from "../../components/ScholarProfile";
import MainContentWrapper, {
  ParagraphWrapper,
} from "../../components/MainContentWrapper";

const images = [satkyar1, satkyar2, satkyar3, satkyar4];

const programs = [
  "Bangkok University",
  "Bachelor's, Innovative Medida Production",
  "1st Year in Programme",
];

const goals = [
  "Become a journalist",
  "Make a documentary about people in Myanmar",
  "Build independent media in Burma",
];

const facts = [
  {
    question: "Where would you be if you could go back in time and why?",
    answer:
      "Back to 2009 when I first arrived in Mae Sot and met the most important woman in my life, who has now become my wife.",
  },
  {
    question: "What’s your favorite movie and why?",
    answer:
      "Forrest Gump because despite all the challenges, he never gives up. This inspires me to keep going in my own journey.",
  },
  {
    question: "What’s your biggest dream?",
    answer:
      "For every country in the world to have free education and free healthcare.",
  },
];

const Satkyar = () => {
  return (
    <div>
      <ScholarHeader
        // isShading
        imgUrl="bg-[url('/src/assets/scholars/satkyar_cover.png')]"
        name="nay satkyar naing"
        program="Innovative Media Production"
        university="Bangkok University"
      />
      <MainContentWrapper>
        <ScholarArticleWrapper name="nay satkyar naing" chart={satkyarChart}>
          <ParagraphWrapper>
            The Saffron Revolution made me decide I want to be part of the
            change for my country
          </ParagraphWrapper>

          <ParagraphWrapper>
            When the Saffron Revolution happened in 2007, I was 15. Seeing many
            protesters including monks getting killed on the street made me
            question many things about our government. Why could the military do
            whatever they want without legal conseqeunces? Why were people so
            afraid of telling the truth and expressing themselves? Why did we
            only memorise at schools to pass exams and not think about what was
            happening? As I looked for answers to my own questions, I decided
            that I wanted to be part of something that can bring real change to
            Burma.
          </ParagraphWrapper>

          <ParagraphWrapper>
            When I was 18, I found my passion in writing and telling people’s
            stories of injustice. This started my dream to become a journalist.
            After finishing high school in 2009, I joined the printed media in
            Yangon. Two years later in 2011, I published my first article in
            Burmese New Life magazine and moved to Mae Sot in Thailand where I
            founded Young Generation Note (YGN).{" "}
          </ParagraphWrapper>

          <ParagraphWrapper>
            Exchanges with international communities confirmed my belief in
            independent media
          </ParagraphWrapper>

          <ParagraphWrapper>
            Young Generation Note (YGN) started as a journal of news, short
            stories and articles about current affairs from contributors in Mae
            Sot because the media were all controlled back in Burma, and there
            was no alternative to hear non-government voices. Then in 2013, I
            met volunteer students from Hong Kong at Connecting Myanmar, and we
            started a summer media training workshop together. Our hope was to
            let more Mae Sot migrant and refugee youth understand the importance
            of the media and empower them to tell the truth and their stories.
          </ParagraphWrapper>

          <ParagraphWrapper>
            Apart from YGN, I also continued contributing stories mainly on
            Burmese migrant workers in Thailand for various newspaper, as well
            as weekly political “style-pens.” After my stories have accumulated
            for 3 years, a Myanmar publishing house collected my articles and
            published them in a book called “The Parrot Democracy.” It was
            distributed in Myanmar widely and I was then invited by the Burmese
            community in Germany to share about my work in Europe. Seeing how
            peaceful the European countries are, where people do not have to
            worry about being able to afford healthcare and education, I was
            further convinced that democracy is necessary for a country to
            develop and change, and we certainly need independent media for
            that.
          </ParagraphWrapper>

          <ParagraphWrapper>
            ​Education as a stepping stone to reach my goal
          </ParagraphWrapper>

          <ParagraphWrapper>
            After the visit to Europe, I came back to Thailand and continued
            writing more, eventually launching YGN Publishing House in 2016 to
            publish 5 more books. For ten years now, I have been pursuing my
            dream through gaining experience on the ground and reading the work
            of other writers voicing out for change, including the late U Win
            Tin, who was a great inspiration for me with his writing as a
            political prisoner. The writing, travelling and reading built up my
            skills and belief that with pen and camera, I can bring change.
            Later, I began to see the value of education, but I lacked the
            financial means to study in university.
          </ParagraphWrapper>

          <ParagraphWrapper>
            Now, I will be embarking on my Bachelor’s degree in the Innovative
            Media Production at Bangkok University this August 2019. As social
            and online media are replacing printed media in Burma, I chose this
            degree to learn about the new media and the online audiovisual
            sector. I believe this degree will help me bridge my work with the
            international media as well, and I hope to make a documentary of my
            people one day. In the long term, I hope to become a journalist and
            explore new ways to diffuse information in South East Asia, and to
            build independent media in Burma as this has been my dream since the
            beginning.
          </ParagraphWrapper>

          <p>
            I met Satkyar in 2013 when Connecting Myanmar had the first media
            training at YGN. He was a quiet young man, except when we discussed
            about politics. His knowledge about Burmese history and politics was
            impressive, and it got me thinking, this young man was too serious
            for his age! All along we kept in touch... his heart for democracy
            and his dream to bring change through journalism have not changed.
            With much determination in him, I am glad that he is now able to
            receive professional training at university, and have no doubt that
            he will succeed as a change-maker for Burma." - ​Fiona Li, former
            Coordinator at Connecting Myanmar
          </p>
        </ScholarArticleWrapper>
        <ScholarProfile
          profilePicture={satkyar}
          name="nay satkyar naing"
          age="26"
          ethnicity="Burmese"
          placeOfBirth="Bago, Myanmar"
          programs={programs}
          goals={goals}
          facts={facts}
          images={images}
        />
      </MainContentWrapper>
    </div>
  );
};

export default Satkyar;
