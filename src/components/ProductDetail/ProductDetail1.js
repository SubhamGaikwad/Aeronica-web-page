import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Drone_img_1 from "../../Images/DSC_1340.JPG";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const slides = [
    {
      image: Drone_img_1,
      name: "Drone 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  // Set up automatic scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
      prevSlide();
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="bg-gray-700 p-4">
      {/* Slider Section */}
      <div className="w-full md:w-4/5 mx-auto">
        <Slider
          infinite={true}
          autoplay={true}
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          initialSlide={currentSlide}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <img
                className="w-full object-cover h-80 md:h-96 lg:h-120"
                src={slide.image}
                alt={`slide_${index + 1}`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:mb-20">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
                  {slide.name}
                </h2>
                <p className="text-center">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Content Section Below Slider */}
      <div className="flex flex-col md:flex-row items-center p-4">
        {/* Details of the drone (left column) */}
        <div className="w-full md:flex-1 text-lg md:text-xl lg:text-2xl mb-4">
          Details of the drone
        </div>

        {/* Image (right column) */}
        <div className="w-full md:flex-1">
          <img src={Drone_img_1} alt="drone_img" className="w-full h-auto" />
        </div>
      </div>
      {/* Product Specifications */}
      <div className="flex flex-col md:flex-row items-center p-4">
        {/* Product Details (left column) */}
        <div className="w-full md:w-1/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">
                Maximum takeoff weight
              </p>
              <p className="text-white">25kg</p>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">Range</p>
              <p className="text-white">500m</p>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">Endurance</p>
              <p className="text-white">12 min</p>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">
                Payload Capacity
              </p>
              <p className="text-white">10 L</p>
            </div>
          </div>
        </div>

        {/* Product Image (center column) */}
        <div className="w-full md:w-1/3 p-4">
          <img
            src={Drone_img_1}
            alt="Specification Image"
            className="w-full h-auto"
          />
        </div>

        {/* More Specifications (right column) */}
        <div className="w-full md:w-1/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">
                Operating Speed
              </p>
              <p className="text-white">15-12 m/s</p>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">
                Max Operating height
              </p>
              <p className="text-white">5 m/s</p>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">
                Wind Resistance
              </p>
              <p className="text-white">5 m/s</p>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <p className="text-lg font-semibold text-orange-500">
                Last Specification
              </p>
              <p className="text-white">Value</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail1;
