import React from "react";

const Navbar = () => {
  return (
    <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
      <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <a class="leading-none" href="/">
            HOME
          </a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/scholarship">SCHOLARSHIP</a>
        </li>
        <li>
          <a href="/aid">HUMANITARIAN AID</a>
        </li>
        <li>
          <a href="/donate">DONATE</a>
        </li>
        <li>
          <a href="/art">ART</a>
        </li>
        <li>
          <a href="/faqs">FAQS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
