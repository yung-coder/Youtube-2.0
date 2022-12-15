import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlineSportsFootball } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <div className="flex flex-col text-white border w-60">
        <ul className="p-5 flex flex-col space-y-12 cursor-pointer">
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <AiOutlineHome size={20} />
            </span>
            Home
          </li>
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <BsCodeSlash size={20} />
            </span>
            Code
          </li>
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <BsCodeSlash size={20} />
            </span>
            FreeCodeCamp
          </li>
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <BsCodeSlash size={20} />
            </span>
            Reactjs
          </li>
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <BsCodeSlash size={20} />
            </span>
            Nextjs
          </li>
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <IoSchoolOutline size={20} />
            </span>
            Education
          </li>
          <li className="flex justify-items-start  items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <MdPodcasts size={20} />
            </span>
            Podcast
          </li>
          <li className="flex justify-items-start  items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <BsMusicNote size={20} />
            </span>
            Music
          </li>
          <li className="flex justify-items-start items-center hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <MdOutlineSportsFootball size={20} />
            </span>
            Sports
          </li>
          <li className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1">
            <span>
              <GiClothes size={20} />
            </span>
            Fashion
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
