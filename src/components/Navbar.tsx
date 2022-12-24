import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchTermmobile, setsearchTermmobile] = useState("");
  const navigate = useNavigate();
  const showinput = () => {
    if (inputRef.current) {
      inputRef.current.style.display = "block";
      console.log(inputRef.current.value);
    }
  };
  const Onclick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm("");
    }
  };

  const OnclickResponsive = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    showinput();

    if (searchTermmobile) {
      navigate(`/search/${searchTermmobile}`);

      setsearchTermmobile("");
    }
  };

  console.log(searchTermmobile);
  return (
    <>
      <div className="flex justify-between p-5 md:p-4">
        <div className="flex justify-center items-center space-x-4">
          <Link to={"/"}>
            <h1 className="text-[#FF0000] text-xl font-bold">Youtube</h1>
          </Link>
        </div>
        <form action="sumbit" className="flex  justify-center items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
            className="rounded-l-lg p-1 bg-[#121212] placeholder:text-white border  text-white hidden md:block"
            placeholder="Search"
          />
          <div className="h-full cursor-pointer justify-center items-center p-1 rounded-r-lg ml-52 bg-transparent hidden md:flex md:ml-0 md:bg-[#222] md:border">
            <BsSearch color="white" onClick={Onclick} />
          </div>
        </form>
        <div className="flex justify-center  items-center md:space-x-6 cursor-pointer">
          <AiFillVideoCamera
            color="white"
            className="hidden md:block md:w-full"
          />
          <AiOutlineBell color="white" className="hidden md:block md:w-full" />
          <VscAccount color="white" className="w-full md:block" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <form
          className="flex md:hidden p-3   justify-center items-center"
          action="sumbit"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
            className="rounded-l-lg p-1 bg-[#121212] placeholder:text-white border  text-white flex md:hidden"
            ref={inputRef}
            placeholder="Search"
          />
          <div className="border h-full p-2 rounded-r-lg cursor-pointer bg-[#222]">
            <BsSearch color="white" onClick={Onclick} size={16} />
          </div>
        </form>
      </div>
    </>
  );
};
export default Navbar;
