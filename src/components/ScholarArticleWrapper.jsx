import React from "react";
import { SectionHeading } from "../utils/wrappers";
import NavButton from "./NavButton";

const ScholarArticleWrapper = ({ name, chart, children, highlight }) => {
  return (
    <article className="w-full md:w-3/5 pr-14 pl-10 pb-5">
      <SectionHeading
        text={`${name.toUpperCase()}'S STORY`}
        textColor="text-customGold"
      />
      {chart && (
        <div>
          <img src={chart} alt="chart" />
        </div>
      )}
      {highlight && (
        <ul className="text-customGreen list-disc">
          {highlight.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <br />
      {children}
      <br />
      <br />
      <NavButton
        text={`I WANT BE ${name.toUpperCase()}'S PATRON`}
        link="/donate"
      />
    </article>
  );
};

export default ScholarArticleWrapper;
