import React,{useState} from "react";
import banner from "../assets/img/banner.png";
import { IoSearchOutline } from "react-icons/io5";

function Search({selectedTag}) {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "React Native",
    },
    {
      id: 4,
      name: "Angular",
    },
    {
      id: 5,
      name: "UI/UX",
    },
  ];


  const [activeIndex,setActiveIndex]=useState(0);
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
      <div className='flex gap-10 justify-center
       mt-5'>
        {tags.map((item,index) => (
          <ul key={item.id} onClick={()=>{setActiveIndex(index);selectedTag(item.name)}}
          className={`${index==activeIndex?
            'bg-blue-500 text-white':null} 
            p-1 pb-2 rounded-sm
            md:rounded-full cursor-pointer md:px-4
            hover:scale-110 hover:border-[1px] 
            border-blue-500 transition-all duration-100 ease-in-out`}>
            <li className='line-clamp-1 px-1'>
              {item.name}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
