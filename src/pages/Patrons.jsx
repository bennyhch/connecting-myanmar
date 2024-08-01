import React from "react";
import HeaderImageWrapper from "../components/HeaderImage";

const Patrons = () => {
  return (
    <div>
      <HeaderImageWrapper imgUrl="bg-[url('/src/assets/becomePatron.jpg')]">
        BECOMING A <span className="text-customGreen">PATRON</span>
      </HeaderImageWrapper>
    </div>
  );
};

export default Patrons;
