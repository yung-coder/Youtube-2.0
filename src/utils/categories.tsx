import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { BsMusicNote } from "react-icons/bs";
import { MdOutlineSportsFootball } from "react-icons/md";
import { GiClothes } from "react-icons/gi";

export const categories = [
  { name: "New", icon: <AiOutlineHome size={20} /> },
  { name: "JSMastery", icon: <BsCodeSlash size={20} /> },
  { name: "Coding", icon: <BsCodeSlash size={20} /> },
  { name: "ReactJS", icon: <BsCodeSlash size={20} /> },
  { name: "NextJS", icon: <BsCodeSlash size={20} /> },
  { name: "Music", icon: <BsMusicNote size={20} /> },
  { name: "Education", icon: <IoSchoolOutline size={20} /> },
  { name: "Podcast", icon: <MdPodcasts size={20} /> },
  { name: "Sport", icon: <MdOutlineSportsFootball size={20} /> },
  { name: "Fashion", icon: <GiClothes size={20} /> },
];
