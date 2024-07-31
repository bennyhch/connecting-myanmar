import React from "react";
import { Link } from "react-router-dom";

import OurScholars from "../pages/OurScholars";
import Patrons from "../pages/Patrons";
import Programmes from "../pages/Programmes";
import Structure from "../pages/Structure";
import ContactUs from "../pages/ContactUs";

// menu items for navbar
const scholarshipMenuItems = [
  { href: "our-scholars", component: () => OurScholars, text: "Our Scholars" },
  { href: "patrons", component: () => Patrons, text: "Patrons" },
];
const aboutMenuItems = [
  { href: "programmes", component: () => Programmes, text: "Programmes" },
  { href: "structure", component: () => Structure, text: "Structure" },
  { href: "contact-us", component: () => ContactUs, text: "Contact Us" },
];

const NavLink = ({ href, text, menuItems, newTab }) => {
  return (
    <li className="relative group">
      <Link
        to={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noreferrer" : ""}
        className="hover:underline focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
      >
        {text}
      </Link>
      {menuItems && (
        <div className="absolute left-0 mt-2 z-10 overflow-hidden transition-all duration-300 transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 origin-top bg-white border rounded-lg shadow-lg">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b last:border-0">
                <Link
                  to={item.href}
                  className="block px-4 py-3 hover:bg-gray-200"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="py-3">
      <ul className="flex justify-center gap-x-10">
        <NavLink href="/" text="HOME" />
        <NavLink href="/about" menuItems={aboutMenuItems} text="ABOUT" />
        <NavLink
          href="/scholarship"
          menuItems={scholarshipMenuItems}
          text="SCHOLARSHIP"
        />
        <NavLink href="/aid" text="HUMANITARIAN AID" />
        <NavLink href="/donate" text="DONATE" />
        <NavLink
          href="https://www.artsy.net/partner/connecting-myanmar"
          text="ART"
          newTab
        />
        <NavLink href="/faqs" text="FAQS" />
      </ul>
    </nav>
  );
};

export default Navbar;
