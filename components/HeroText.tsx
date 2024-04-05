"use client";

import React, { useState, useEffect } from "react";

const HeroText = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newOpacity = 1 - scrollPosition / 400;
    setOpacity(newOpacity >= 0 ? newOpacity : 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-[50%] right-40 left-40 flex flex-col justify-end items-center pointer-events-none cinzel"
      style={{ opacity: opacity }}
    >
      <div
        aria-hidden="true"
        className="flex justify-center items-center border-b border-b-white w-full"
      >
        <div className="h-1 w-40 rounded-sm bg-purple-400 z-0"></div>
      </div>
      <p className="text-5xl capitalize my-10 text-center">
        arrays are contiguous
      </p>
      <div
        aria-hidden="true"
        className="flex justify-center items-center border-b border-b-white w-40"
      ></div>
    </div>
  );
};

export default HeroText;
