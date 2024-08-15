import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconStyles = "text-2xl transition-transform transform hover:scale-125";

export const socialMediaIconsData = [
  {
    link: "https://www.facebook.com/ConnectingMyanmar/",
    icon: <FaFacebook className={iconStyles} />,
  },
  {
    link: "https://www.instagram.com/connectingmyanmar",
    icon: <FaInstagram className={iconStyles} />,
  },
  {
    link: "https://www.linkedin.com/in/connectingmyanmar/",
    icon: <FaLinkedin className={iconStyles} />,
  },
  {
    link: "mailto: info@connectingmyanmar.org",
    icon: <AiOutlineMail className={iconStyles} />,
  },
];

const IconLink = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
};

export default IconLink;
