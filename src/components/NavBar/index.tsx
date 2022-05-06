import React, { useState, useEffect, useCallback } from "react";
import DropdownCardParent from "./dropdownCardParent";
import LNGS from "./LNGS";
import PNR from "./PNR";
import SquareSpaceLogo from "./SquareSpaceLogo";

export default function NavBar() {
  const [navbarColor, setNavbarColor] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleBackgroundChange = useCallback(() => {
    if (window.scrollY > 0 ) {
      setTimeout(() => setNavbarColor(true), 150);
    } else {
      setTimeout(() => setNavbarColor(false), 150);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleBackgroundChange);
    return () => {
      window.removeEventListener("scroll", handleBackgroundChange);
    };
  }, [handleBackgroundChange]);

  return (
    <>
      <nav
        className={`sticky inset-x-0 top-0 h-20 z-20 ${
          navbarColor ? "bg-black" : "bg-squarespace"
        } flex px-3 py-3 items-center justify-between overflow-hidden`}
      >
        <SquareSpaceLogo />
        <PNR />
        <LNGS />
      </nav>
      {buttonHovered && <DropdownCardParent />}
    </>
  );
}
