import React, { useState } from "react";
import emailjs from "emailjs-com";
import Drone_img_1 from "../../Images/Drone_img-1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    emailjs
      .sendForm(
        "service_3fwgsdb",
        "template_nrig0mi",
        e.target,
        "WxdKdc_x7oznUypel"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Handle success, e.g., show a success message to the user
          alert("Email sent successfully!");
          // You can also reset the form after success
          setFormData({
            name: "",
            email: "",
            mobile: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          // Handle error, e.g., show an error message to the user
          alert("Email sending failed. Please try again later.");
        }
      );
  };

  const formStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div>
      <div className="w-full sm:h-32 relative">
        <img
          className="w-full h-auto sm:h-full object-cover"
          src={Drone_img_1}
          alt="slide_1"
          loading="priority"
        />
      </div>
      <div className="w-full max-w-md mx-auto mt-8">
        <form
          className="bg-white shadow-md rounded px-4 py-6 sm:px-8 sm:py-8 mb-4"
          style={formStyle}
          onSubmit={handleSubmit}
        >
          <div className="sm:flex">
            <div className="mb-4 sm:mr-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="sm:flex">
            <div className="mb-4 sm:mr-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="mobile"
              >
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Your Mobile Number"
                onChange={handleChange}
                value={formData.mobile}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                name="location"
                type="text"
                placeholder="Your Location"
                onChange={handleChange}
                value={formData.location}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="message"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </div>
          <div className="flex items-center justify-center sm:justify-between">
            <button
              className="bg-black hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
