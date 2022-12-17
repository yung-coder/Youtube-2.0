import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlineSportsFootball } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { categories } from "../utils/categories";
type SidebarProps = {
  category: string;
  setcategory: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar: React.FC<SidebarProps> = ({ category, setcategory }) => {
  return (
    <>
      <div className="md:flex flex-col text-white border w-60 hidden">
        <ul className="p-5 flex flex-col space-y-12 cursor-pointer">
          {categories.map((category, i) => {
            return (
              <li
                key={i}
                className="flex justify-items-start items-center  hover:bg-[#FF0000] md:rounded-xl p-1"
                onClick={() => setcategory(category.name)}
              >
                <span>{category.icon}</span>
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
