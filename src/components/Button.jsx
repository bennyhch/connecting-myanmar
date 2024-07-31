import React from "react";
import { useNavigate } from "react-router-dom";

const buttonBaseStyles = "border border-black p-2";
const buttonHoverStyles =
  "transition duration-700 hover:bg-black hover:text-white";

const Button = ({ link, text }) => {
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

export default Button;
