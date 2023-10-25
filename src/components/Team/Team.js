import React from "react";
import subham from "../../Images/subham.jpg";

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
      <div className="text-center">
        <h1>Meet Our Team</h1>
      </div>
      <div className="text-center">
        <p>
          As a technology-driven company, Aeronica's quality products are driven
          by the inspiration, ideas, thoughts, and leadership of the team.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={subham} alt={member.name} />
            <p className="text-center">{member.name}</p>
            <p className="text-center">{member.role}</p>
            <div className="social-media-icons">
              <a
                href={member.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={member.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
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
