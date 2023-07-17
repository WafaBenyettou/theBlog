import React from "react";
import logo from "../assets/img/logo.png";
import { IoLogoYoutube } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center max-w-5xl w-full px-4">
        <img src={logo} alt="logo" className="w-[100px]" />

        <ul className="hidden md:flex gap-4 md:gap-14">
          <li className="hover:font-bold cursor-pointer">Home</li>
          <li className="hover:font-bold cursor-pointer">About</li>
          <li className="hover:font-bold cursor-pointer">Contact</li>
        </ul>

        <button className="bg-blue-500 rounded-full text-white flex items-center text-[14px]">
          Subscribe <IoLogoYoutube className="w-6 h-6 ml-3" />
        </button>
      </div>
    </div>
  );
}

export default Header;
