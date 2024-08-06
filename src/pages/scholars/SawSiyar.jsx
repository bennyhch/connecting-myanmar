import React from "react";

import sawsiyar from "../../assets/scholars/sawsiyar.png";
import sawsiyar1 from "../../assets/scholars/siyar/siyar1.jpg";
import sawsiyar2 from "../../assets/scholars/siyar/siyar2.png";

import { ScholarHeader } from "../../components/HeaderImage";
import ScholarMainContentWrapper, {
  ParagraphWrapper,
} from "../../components/ScholarMainContentWrapper";
import ScholarArticleWrapper from "../../components/ScholarArticleWrapper";
import ScholarProfile from "../../components/ScholarProfile";

const images = [sawsiyar1, sawsiyar2];

const programs = [
  "Mae Fah Luang University",
  "Business Administration",
  "3rd Year",
];

const SawSiyar = () => {
  return (
    <div>
      <ScholarHeader
        imgUrl="bg-[url('/src/assets/scholars/siyar/siyar2.png')]"
        isShading
        name="Saw Siyar"
        program="Business Administration"
        university="Mae Fah Luang University"
      />
      <ScholarMainContentWrapper>
        <ScholarArticleWrapper name="Saw Siyar">
          <ParagraphWrapper>
            Hi I’m Siyar, a third-year Business student in Mae Fah Lung
            University.
          </ParagraphWrapper>
          <ParagraphWrapper>
            I come from a small village in the Karen State of Myanmar. I was
            very close to my mother as I grew up. The greatest lesson that she
            taught me was empathy. She was a very charitable woman and always
            helped others. Therefore, since I was young, I had my heart set on
            helping others.
          </ParagraphWrapper>
          <ParagraphWrapper>
            An issue that bothered me, however, was the strong sense of despair
            in rural areas. It often felt like there was no hope for a better
            life: Farmers could only farm during the six months of rainy season,
            and were idle in the other months; Youngsters sought jobs in the
            city, but those who failed to do so spent their waking hours on
            drugs. I deeply wanted to help the sad people around me. But I did
            not know how.
          </ParagraphWrapper>
          <ParagraphWrapper>
            An opportunity arose when I attended a school ran by an Ngo at the
            camp. The programme was designed in way so that I would participate
            in volunteer programmes. For example, I researched on the drug
            problem, and found out that the lack of job opportunities was the
            root cause of the problem. This piqued my interest in business,
            believing that it was the key to solving social problems. I also
            engaged in an internship at an NGO. I observed that the NGO could
            not exist without generous donations from businesses. These
            experiences inspired me to study business administration at
            university.
          </ParagraphWrapper>
          <ParagraphWrapper>
            After graduation, I hope to work in a corporation and save up
            capital for starting my own business. I have a few ideas in mind:
            firstly, I hope to help villagers in rural areas to make better use
            of their land during the dry season. This can be done by increasing
            access to seeds that can withstand dryness. Another idea is to open
            barbecue restaurants (in towns). I was inspired by the barbecue
            restaurants in Thailand and thought they would be a big hit in
            Myanmar. I hope that I could generate revenue through the successful
            business, and thus contribute to worthwhile causes.
          </ParagraphWrapper>
        </ScholarArticleWrapper>

        <ScholarProfile
          profilePicture={sawsiyar}
          name="Saw Siyar"
          age="24"
          ethnicity="Karen"
          placeOfBirth="Karen state, Myanmar"
          programs={programs}
          images={images}
        />
      </ScholarMainContentWrapper>
    </div>
  );
};

export default SawSiyar;
