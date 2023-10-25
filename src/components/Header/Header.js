import React, { useState } from "react";
import Logo from "../../Images/Logo_2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Product-1", link: "/PrductDetails" },
    { label: "Product-2", link: "/prductDetails" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-800 border-b-[2px] border-b-gray-800">
      <div className="max-w-screen-xl h-20 mx-auto flex items-center justify-between">
        <div className="pl-4 md:pl-20">
          <Link to="/">
            <img className="w-20 md:w-20" src={Logo} alt="Aero_logo" />
          </Link>
        </div>
        <div className="pr-4 md:pr-20">
          {window.innerWidth <= 768 ? (
            <>
              <button
                onClick={toggleMobileMenu}
                className="block md:hidden text-white"
              >
                {isMobileMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} />
                )}
              </button>
              {isMobileMenuOpen && (
                <ul className="bg-gray-800 absolute top-20 left-0 right-0 mt-2 md:hidden">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:bg-blue-600 duration-300 cursor-pointer text-white py-2 px-4"
                    >
                      <Link to={item.link} onClick={toggleMobileMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <ul className="flex items-center gap-4 md:gap-8">
              {navItems.map((item, index) => (
                <Link to={item.link} key={index}>
                  <li className="hover:text-blue-600 duration-300 cursor-pointer text-white">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
