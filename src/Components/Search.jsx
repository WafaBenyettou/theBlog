import React from "react";
import banner from "../assets/img/banner.png";

import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className="flex justify-center mt-10 flex-col px-[70] md:px-[50px]">
      <img src={banner} alt="banner" className="banner rounded-2xl " />

      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-30px] mx-[23%] flex items-center">
        <IoSearchOutline
          className="text-[20px]
             text-gray-400"
        />
        <input
          type="text"
          placeholder="Search"
          className="search outline-none ml-2 w-full"
        />
      </div>
    </div>
  );
}

export default Search;
