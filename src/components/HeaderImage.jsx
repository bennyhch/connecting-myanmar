import React from "react";

import { shading50Styles } from "../utils/classStyles";

const headingBackgroundImageStyles =
  "absolute inset-0 h-full bg-cover bg-center text-black blur-sm";

const headingTextStyles =
  "text-xl leading-normal font-bold absolute text-white w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

const HeaderWrapper = ({ children }) => {
  return <header className="relative h-50lvh">{children}</header>;
};

const HeaderImageWrapper = ({ isShading, imgUrl, children }) => {
  return (
    <HeaderWrapper>
      <div className={`${imgUrl} ${headingBackgroundImageStyles}`}></div>
      {isShading && <div className={shading50Styles}></div>}
      <div className={headingTextStyles}>{children}</div>
    </HeaderWrapper>
  );
};

export default HeaderImageWrapper;

// Usage: used in scholars only
export const ScholarHeader = ({
  name,
  program,
  university,
  isShading,
  imgUrl,
}) => {
  return (
    <HeaderImageWrapper isShading={isShading} imgUrl={imgUrl}>
      <div className="text-3xl mb-5">{name.toUpperCase()}</div>
      <div className="text-customGreen">{program}</div>
      <div>{university}</div>
    </HeaderImageWrapper>
  );
};
