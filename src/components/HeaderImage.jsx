import React from "react";

import {
  headingBackgroundImageStyles,
  headingTextStyles,
  shading50Styles,
} from "../utils/classStyles";

const HeaderWrapper = ({ children }) => {
  return <header className="relative h-50lvh">{children}</header>;
};

const HeaderImageWrapper = ({ isShading, imgUrl, children }) => {
  return (
    <HeaderWrapper>
      <div className={`${imgUrl} ${headingBackgroundImageStyles}`}></div>
      {isShading && <div className={shading50Styles}></div>}
      <p className={headingTextStyles}>{children}</p>
    </HeaderWrapper>
  );
};

export default HeaderImageWrapper;
