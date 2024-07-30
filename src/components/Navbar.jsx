import React, { useState } from "react";
import OurScholars from "../pages/OurScholars";
import Patrons from "../pages/Patrons";
import Programmes from "../pages/Programmes";
import Structure from "../pages/Structure";
import ContactUs from "../pages/ContactUs";

// menu items for navbar
const scholarshipMenuItems = [OurScholars, Patrons];
const aboutMenuItems = [Programmes, Structure, ContactUs];

const NavLink = ({ href, children, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      {/* <a href={href} className="hover:underline "> */}
      <a
        href={href}
        className="hover:underline focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
      >
        {children}
        {isMenuOpen && menuItems && (
          <ul className="flex flex-col">
            {menuItems.map((Component, index) => (
              <li key={index}>
                {/* <a></a> */}
                <Component />
              </li>
            ))}
          </ul>
        )}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="py-3" style={{ border: "1px solid red" }}>
      <ul className="flex justify-center gap-x-10">
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/about" menuItems={aboutMenuItems}>
          ABOUT
        </NavLink>
        <NavLink href="/scholarship" menuItems={scholarshipMenuItems}>
          SCHOLARSHIP
        </NavLink>
        <NavLink href="/aid">HUMANITARIAN AID</NavLink>
        <NavLink href="/donate">DONATE</NavLink>
        <NavLink href="/art">ART</NavLink>
        <NavLink href="/faqs">FAQS</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
