import React from "react";
import subham from "../../Images/subham.jpg";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  // Define an array of team members with their information
  const teamMembers = [
    {
      name: "Subham",
      role: "Role 1",
      socialMedia: {
        twitter: "https://twitter.com/subham",
        linkedin: "https://www.linkedin.com/in/subham",
        // Add more social media links as needed
      },
    },
    {
      name: "Subham",
      role: "Role 1",
      socialMedia: {
        twitter: "https://twitter.com/subham",
        linkedin: "https://www.linkedin.com/in/subham",
        // Add more social media links as needed
      },
    },
    {
      name: "Subham",
      role: "Role 1",
      socialMedia: {
        twitter: "https://twitter.com/subham",
        linkedin: "https://www.linkedin.com/in/subham",
        // Add more social media links as needed
      },
    },
    {
      name: "Subham",
      role: "Role 1",
      socialMedia: {
        twitter: "https://twitter.com/subham",
        linkedin: "https://www.linkedin.com/in/subham",
        // Add more social media links as needed
      },
    },
    // Add more team members as needed
  ];

  return (
    <div>
      <div className="text-center ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Meet Our Team</h1>
      </div>
      <div className="text-center">
        <p className="text-sm md:text-base lg:text-lg">
          As a technology-driven company, Aeronica's quality products are driven
          by the inspiration, ideas, thoughts, and leadership of the team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-700">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={subham}
              alt={member.name}
              className="w-25 h-45 mx-auto "
            />
            <p className="text-lg font-semibold">{member.name}</p>
            <p className="text-gray-500">{member.role}</p>
            <div className="social-media-icons mt-4">
              <a
                href={member.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <i className="fab fa-twitter text-2xl mx-2"></i>
              </a>
              <a
                href={member.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin className="text-2xl mx-2" />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
