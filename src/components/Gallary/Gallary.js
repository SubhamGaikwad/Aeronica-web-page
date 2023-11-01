import React, { useState } from "react";
import gallary1 from "../../Images/product_img.jpeg";
import gallary2 from "../../Images/Drone_img_3.jpg";
import gallary3 from "../../Images/gallary_3.jpeg";

const Gallery = () => {
  const images = [gallary1, gallary2, gallary1, gallary2, gallary1, gallary2]; // Add more images as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full bg-gray-700 h-full object-cover">
      <h1 className="text-2xl font-semibold mb-4 text-center">Gallery</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 p-4">
        <button
          onClick={prevSlide}
          className="hidden md:block text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &#8592; {/* Left arrow */}
        </button>
        {images.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 p-2 transform hover:scale-105 transition-transform h-96"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full rounded-lg shadow-lg h-full object-cover"
            />
          </div>
        ))}
        <button
          onClick={nextSlide}
          className="hidden md:block text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
      <div className="flex md:hidden justify-between p-4">
        <button
          onClick={prevSlide}
          className="text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &#8592; {/* Left arrow */}
        </button>
        <button
          onClick={nextSlide}
          className="text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
