import React from "react";
import Drone_img_1 from "../../Images/Drone_img-1.jpg";
import Drone_img_2 from "../../Images/Drone_img_2.jpg";
const Services = () => {
  return (
    <div>
      <div className="text-center font-bold text-2xl text-black p-4 mt-4 mb-4">
        Services
      </div>
      <div className="flex gap-2">
        <div>
          <div>
            <img src={Drone_img_1} alt="service-1" />
          </div>
          <div>text</div>
        </div>
        <div>
          <div>
            <img src={Drone_img_1} alt="service-2" />
          </div>
          <div>text</div>
        </div>
        <div>
          <div>
            <img src={Drone_img_1} alt="service-2" />
          </div>
          <div>text</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
