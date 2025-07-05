import React from "react";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

const ProfileCard = ({ name, role, image, linkedin, instagram, website }) => {
  return (
    <div className=" bg-white shadow-lg rounded-2xl p-5 text-center">
      <img
        src={image}
        alt="Profile"
        className="w-20 h-20 rounded-full mx-auto border-4 border-gray-200"
      />

      <h2 className="text-lg font-semibold mt-3">{name}</h2>
      <p className="text-gray-500 text-sm">{role}</p>


      <div className="flex justify-center gap-4 mt-4">
        {linkedin && (
          <a href={linkedin} className="text-gray-700 hover:text-blue-600 text-xl">
            <FaLinkedin />
          </a>
        )}
        {instagram && (
          <a href={instagram} className="text-gray-700 hover:text-pink-500 text-xl">
            <FaInstagram />
          </a>
        )}
        {website && (
          <a href={website} className="text-gray-700 hover:text-green-600 text-xl">
            <FaGlobe />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
