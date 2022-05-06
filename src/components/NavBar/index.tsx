import React, { useState, useEffect, useCallback, useRef } from "react";
import LNGS from "./LNGS";
import PNR from "./PNR";
import SquareSpaceLogo from "./SquareSpaceLogo";
import ProductsDropdownCard from "./ProductsDropdownCard";

export default function NavBar() {
  const [navbarColor, setNavbarColor] = useState(false);
  const [productsButtonHovered, setproductsButtonHovered] = useState(false);
  const [resourcesButtonHovered, setresourcesButtonHovered] = useState(false);
  const productsRef = useRef() as React.MutableRefObject<HTMLButtonElement>
  const resourcesRef = useRef() as React.MutableRefObject<HTMLButtonElement>

  const handleBackgroundChange = useCallback(() => {
    if ((window.scrollY > 0)) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  }, []);

  const handleProductsButtonEnter = () => {
    setNavbarColor(true)
    setproductsButtonHovered(true)
  }
  const handleResourcesButtonEnter = () => {
    setNavbarColor(true)
    setresourcesButtonHovered(true)
  }

  const handleProductsButtonLeave = () => {
    setNavbarColor(false)
    setproductsButtonHovered(false)
  }
  const handleResourcesButtonLeave = () => {
    setNavbarColor(false)
    setresourcesButtonHovered(false)
  }
  
  useEffect(() => {
    const productsReff = productsRef.current
    const resourcesReff = resourcesRef.current
    window.addEventListener("scroll", handleBackgroundChange);
    productsReff.addEventListener("mouseover", handleProductsButtonEnter)
    resourcesReff.addEventListener("mouseover", handleResourcesButtonEnter)

    return () => {
      window.removeEventListener("scroll", handleBackgroundChange);
      productsReff.addEventListener("mouseleave", handleProductsButtonLeave)
      resourcesReff.addEventListener("mouseleave", handleResourcesButtonLeave)
    };

  }, [handleBackgroundChange, navbarColor]);

  return (
    <>
      <nav
        className={`sticky inset-x-0 top-0 h-20 z-20 ${
          navbarColor ? "bg-black" : "bg-squarespace"
        } flex px-3 py-3 items-center justify-between overflow-hidden `}
      >
        <SquareSpaceLogo />
        <PNR productsRef={productsRef} resourcesRef={resourcesRef}/>
        <LNGS />
      </nav>
      {productsButtonHovered && <ProductsDropdownCard />}
    </>
  );
}
