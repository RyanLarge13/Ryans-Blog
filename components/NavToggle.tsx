"use client";
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";

const NavToggle = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const MobileNav = () => {
    return (
      <nav className="md:hidden fixed bg-[#333] z-[999] top-12 rounded-sm right-0 p-5">
        <ul className="flex flex-col justify-start items-start gap-y-5">
          <li onClick={() => setMobileNav(false)}>
            <a href="/" className="hover:text-purple-300 duration-200">
              Home
            </a>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <a href="/blog" className="hover:text-purple-300 duration-200">
              Blog
            </a>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <a href="/about" className="hover:text-purple-300 duration-200">
              About
            </a>
          </li>
          <li onClick={() => setMobileNav(false)}>
            <a href="/contact" className="hover:text-purple-300 duration-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <button
        onClick={() => setMobileNav((prev) => !prev)}
        className="md:hidden"
      >
        <GrMenu />
      </button>
      {mobileNav ? <MobileNav /> : null}
    </>
  );
};

export default NavToggle;
