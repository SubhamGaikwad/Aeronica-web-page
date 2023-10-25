import React from "react";
import client_1 from "../../Images/client_1.png";
import client_2 from "../../Images/client_2.png";
import client_5 from "../../Images/client_5.jpg";
import client_4 from "../../Images/client_4.jpeg";
import client_7 from "../../Images/client_7.jpeg";
import client_6 from "../../Images/client_6.png";
import client_8 from "../../Images/client_8.png";

const Clients = () => {
  const clientPhotos = [
    {
      photo: client_1,
      website: "https://www.jsw.in/",
    },
    {
      photo: client_2,
      website: "https://www.srvmedia.com/",
    },
    {
      photo: client_4,
      website: "https://example3.com",
    },
    {
      photo: client_5,
      website: "https://example4.com",
    },
    {
      photo: client_6,
      website: "https://example5.com",
    },
    {
      photo: client_7,
      website: "https://example6.com",
    },
    {
      photo: client_8,
      website: "https://sagunabaug.com/",
    },
  ];

  return (
    <div className="py-8 mt-40 mb-40 bg-black">
      <div className="text-center mb-11">
        <h1 className="text-3xl font-bold text-white">Our Clients</h1>
        <p className="mt-4 text-white">
          Trust we get from our clients inspires us to bring technological
          innovation
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2 justify-items-center">
        {clientPhotos.map((client, index) => (
          <div key={index} className="px-2 gap-3">
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <div className="transition-transform transform hover:-translate-y-1 hover:scale-105">
                <img
                  src={client.photo}
                  alt={`Client ${index + 1}`}
                  className="w-20 h-35 object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white bg-gray-800 bg-opacity-80 p-2 rounded">
                  Visit Website
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
