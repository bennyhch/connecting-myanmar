import React from "react";
import { useNavigate } from "react-router-dom";

const buttonBaseStyles = "border border-black p-3 px-4 rounded-xl";
const buttonHoverStyles =
  "transition duration-700 hover:bg-black hover:text-white";

const NavButton = ({ link, text }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      className={`${buttonBaseStyles} ${buttonHoverStyles}`}
    >
      {text}
    </button>
  );
};

export default NavButton;
