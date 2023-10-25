import React from "react";
// import product_1 from "../../Images/product-1.jpg";
// import product_2 from "../../Images/product-2.jpg";
import Drone_img_1 from "../../Images/Drone_img-1.jpg";
import Drone_img_2 from "../../Images/Drone_img_2.jpg";

import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="bg-gray-00 mt-2">
      <div className="text-center font-bold text-2xl text-black bg-gray-00 p-4 mb-4">
        OUR PRODUCT
      </div>
      <div className="flex mt-5 relative">
        <div className="w-1/2 relative">
          <img
            src={Drone_img_1}
            alt="product_1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 className="text-2xl font-bold">Product 1</h2>
            <p className="text-lg">Description of Product 1</p>
            <Link to="/prductDetails">
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            src={Drone_img_2}
            alt="product_2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 className="text-2xl font-bold">Product 2</h2>
            <p className="text-lg">Description of Product 2</p>
            <Link to="/PrductDetails">
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
