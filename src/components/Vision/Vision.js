import React from "react";
import Drone_img_2 from "../../Images/Drone_img_2.jpg";

const Vision = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col sm:flex-row mt-2">
      <div className="w-full sm:w-1/2 relative">
        <img
          className="w-full h-auto sm:h-full object-cover"
          src={Drone_img_2}
          alt="slide_1"
          loading="priority"
        />
      </div>
      <div className="w-full sm:w-1/2 bg-black p-4 flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold pb-10">About Us</h1>
          <p>
            Our aim is to improve agricultural/land efficiency and productivity.
          </p>
          <p>
            This technology supplies on-demand crop performance data that drives
            precision agriculture and precision land mapping or survey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
