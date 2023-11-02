import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Logo_1 from "../../Images/Logo_black_1.png";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-6 sm:py-8 lg:py-10 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="text-center sm:text-left">
          <img
            className="w-32 mx-auto sm:mx-0"
            src={Logo_1}
            alt="footer_logo"
          />
          <p className="text-white text-xs sm:text-sm tracking-wide">
            {/* @Aeronica.com */}
          </p>
          <div className="flex gap-4 sm:gap-5 text-lg text-gray-400 justify-center sm:justify-start">
            <FaFacebook className="text-2xl sm:text-lg hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="text-2xl sm:text-lg hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="text-2xl sm:text-lg hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="text-2xl sm:text-lg hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="text-center sm:text-left text-white">
          <h2 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-4 w-20 sm:w-auto mx-auto sm:mx-0">
            Locate Us
          </h2>
          <div className="text-xs sm:text-base flex flex-col gap-2">
            <p>Aeronica Advance Technologies Pvt. Ltd.</p>
            <p>101 Sunrise Apartment Prabhat Road</p>
            <p>Opposite Kamla Nehru park Pune 411004</p>
            <p>Phone: +91 7276469160</p>
            <p>Email: bizdev@aeronica.in</p>
          </div>
        </div>
        <div className="text-center sm:text-left text-white">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-4 w-20 sm:w-auto">
              Services
            </h2>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              Service-1
            </p>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              Service-2
            </p>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              Service-3
            </p>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              Service-4
            </p>
          </div>
        </div>
        <div className="text-center sm:text-left text-white">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-4 w-20 sm:w-auto">
              Strategic Collaboration with
            </h2>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              colab-1
            </p>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              colab-2
            </p>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              colab-3
            </p>
            <p className="text-xs sm:text-base flex items-center gap-2 sm:gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaAngleDoubleRight />
              </span>
              colab-4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
