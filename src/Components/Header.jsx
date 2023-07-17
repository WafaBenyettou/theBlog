import React from "react";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo"className="w-[100px]" />

     <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">
            <a href="#">Home</a>
        </li>
        <li className="hover:font-bold cursor-pointer">
            <a href="#">About</a>
        </li>
        <li className="hover:text-black font-bold cursor-pointer">
            <a href="#">Contact</a>
        </li>
    
     </ul>

     <button className="bg-red-500 rounded-full text-white">Sign Up</button>
    </div>
  );
}

export default Header;
