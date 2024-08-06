import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import OurScholars from "../pages/OurScholars";
import Patrons from "../pages/Patrons";
import Programmes from "../pages/Programmes";
import Structure from "../pages/Structure";
import ContactUs from "../pages/ContactUs";

// menu items for navbar
const scholarshipMenuItems = [
  { href: "patrons", component: () => Patrons, text: "BECOMING A PATRON" },
  { href: "our-scholars", component: () => OurScholars, text: "OUR SCHOLARS" },
];
const aboutMenuItems = [
  { href: "programmes", component: () => Programmes, text: "PROGRAMMES" },
  { href: "structure", component: () => Structure, text: "STRUCTURE" },
  { href: "contact-us", component: () => ContactUs, text: "CONTACT US" },
];

const NavLink = ({ href, text, menuItems, newTab, onClick }) => {
  return (
    <li className="relative group">
      <Link
        to={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noreferrer" : ""}
        className="hover:underline custom-underline focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
        onClick={onClick}
      >
        {text}
      </Link>
      {menuItems && (
        <div className="absolute left-0 mt-2 z-10 overflow-hidden transition-all duration-300 transform scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 origin-top bg-white border rounded-lg shadow-lg w-48">
          <ul className="flex flex-col text-sm">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b last:border-0">
                <Link
                  to={item.href}
                  className="block px-4 py-3 hover:bg-gray-200"
                  onClick={onClick}
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenuItem = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="py-3 hidden lg:block">
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

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex justify-end p-3">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="lg:hidden shadow-lg rounded-lg p-5 absolute top-16 right-0 z-20 w-64 bg-slate-300"
        >
          <ul className="flex flex-col gap-y-5">
            <NavLink href="/" text="HOME" onClick={closeMenuItem} />
            <NavLink
              href="/about"
              menuItems={aboutMenuItems}
              text="ABOUT"
              onClick={closeMenuItem}
            />
            <NavLink
              href="/scholarship"
              menuItems={scholarshipMenuItems}
              text="SCHOLARSHIP"
              onClick={closeMenuItem}
            />
            <NavLink
              href="/aid"
              text="HUMANITARIAN AID"
              onClick={closeMenuItem}
            />
            <NavLink href="/donate" text="DONATE" onClick={closeMenuItem} />
            <NavLink
              href="https://www.artsy.net/partner/connecting-myanmar"
              text="ART"
              newTab
              onClick={closeMenuItem}
            />
            <NavLink href="/faqs" text="FAQS" onClick={closeMenuItem} />
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
