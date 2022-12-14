import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const showinput = () => {
    if (inputRef.current) {
      inputRef.current.style.display = "block";
      console.log(inputRef.current.value);
    }
  };
  return (
    <>
      <div className="flex justify-between border md:p-4">
        <div className="flex justify-center items-center space-x-4">
          <GiHamburgerMenu color="white" className="hidden md:block" />
          <h1 className="text-red-700">Youtube</h1>
        </div>
        <div className="flex  justify-center items-center">
          <input
            type="text"
            className="rounded-l-lg p-1 bg-[#121212] placeholder:text-white border  hidden md:block"
            placeholder="Search"
          />
          <div className=" h-full flex justify-center items-center p-1 rounded-r-lg ml-52 bg-transparent md:ml-0 md:bg-[#222] md:border">
            <BsSearch color="white" onClick={showinput} />
          </div>
        </div>
        <div className="flex justify-center border  items-center md:space-x-6">
          <AiFillVideoCamera
            color="white"
            className="hidden md:block md:w-full"
          />
          <AiOutlineBell color="white" className="hidden md:block md:w-full" />
          <VscAccount color="white" className="w-full md:block" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="w-full hidden absolute mb-7   bg-[#121212] placeholder:text-white border border-slate-400"
          ref={inputRef}
          placeholder="Search"
        />
      </div>
    </>
  );
};
export default Navbar;
