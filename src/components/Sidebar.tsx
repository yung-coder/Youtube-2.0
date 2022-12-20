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
      <div className="p-2 text-white border w-full overflow-auto md:w-60 md:p-0 md:flex md:overflow-hidden h-full">
        <ul className="p-3 space-x-2 flex  cursor-pointer md:p-5 md:space-x-0 md:flex-col md:space-y-12">
          {categories.map((category, i) => {
            return (
              <li
                key={i}
                className="flex justify-items-start items-center bg-slate-600 rounded-xl hover:bg-[#FF0000] md:rounded-xl p-1 md:bg-transparent"
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
