import React from "react";
import { FaMedium } from "react-icons/fa";

const MediumButton = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gray-700 transform transition duration-300 ease-in-out hover:scale-105"
  >
    <FaMedium className="mr-2" />
    Go to Medium
  </a>
);

export default MediumButton;
