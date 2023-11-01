import React from "react";
import Drone_img_1 from "../../Images/Drone_img-1.jpg";

const Services = () => {
  return (
    <di>
      {/* <div className="w-full sm:h-32 relative">
        <img
          className="w-full h-auto sm:h-full object-cover"
          src={Drone_img_1}
          alt="slide_1"
          loading="priority"
        />
      </div> */}
      <div className=" text-white p-4 mt-2">
        <div className="text-center font-bold text-2xl">Services</div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div>
              <img src={Drone_img_1} alt="service-1" className="max-w-full" />
            </div>
            <div className="text-center">Text</div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div>
              <img src={Drone_img_1} alt="service-2" className="max-w-full" />
            </div>
            <div className="text-center">Text</div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div>
              <img src={Drone_img_1} alt="service-3" className="max-w-full" />
            </div>
            <div className="text-center">Text</div>
          </div>
        </div>
      </div>
    </di>
  );
};

export default Services;
