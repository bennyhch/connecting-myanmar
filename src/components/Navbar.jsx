import React, { useState } from "react";

const NavLink = ({ href, children, menuItem }) => {
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
        {isMenuOpen && menuItem && (
          <ul className="flex flex-col">
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Earnings</li>
            <li>Sign out</li>
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
        <NavLink href="/about">ABOUT</NavLink>
        <NavLink href="/scholarship">SCHOLARSHIP</NavLink>
        <NavLink href="/aid">HUMANITARIAN AID</NavLink>
        <NavLink href="/donate">DONATE</NavLink>
        <NavLink href="/art">ART</NavLink>
        <NavLink href="/faqs">FAQS</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
