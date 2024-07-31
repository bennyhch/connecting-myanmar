import React from "react";

const RoundButton = ({ text, color, link, newTab }) => {
  return (
    <button
      onClick={() =>
        window.open(
          link,
          newTab ? "_blank" : "_self",
          "rel=noopener noreferrer"
        )
      }
      className={`p-4 px-10 rounded ${color} w-60 hover:brightness-75`}
    >
      {text}
    </button>
  );
};

export default RoundButton;
