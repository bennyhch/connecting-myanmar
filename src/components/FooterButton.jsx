import React from "react";
import { useNavigate } from "react-router-dom";

const FooterButton = ({ text, color, link, newTab }) => {
  const navigate = useNavigate();
  const isExternal = link.startsWith("http");

  const clickHandler = () => {
    if (isExternal) {
      window.open(link, newTab ? "_blank" : "_self", "rel=noopener noreferrer");
    } else {
      navigate(link);
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={`p-4 px-10 rounded ${color} w-60 hover:brightness-75`}
    >
      {text}
    </button>
  );
};

export default FooterButton;
