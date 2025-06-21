import React from 'react';
import { FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa';

const ProfileCard = ({ name, title, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg p-3 max-w-[200px] min-h-[245px] flex flex-col border border-gray-300 items-center space-y-2 hover:shadow-xl transition-transform transform hover:-translate-y-2">
      <img
        src={imageSrc}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-center font-bold text-xl text-gray-800">{name}</h2>
      <p className="text-center text-gray-600 text-lg">{title}</p>
      <div className="flex justify-center space-x-4">
        <FaLinkedin className="text-gray-800 w-6 h-6" />
        <FaInstagram className="text-gray-800 w-6 h-6" />
        <FaGlobe className="text-gray-800 w-6 h-6" />
      </div>
    </div>
  );
};

export default ProfileCard;