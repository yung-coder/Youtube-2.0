import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
type FeedProps = {};
import { fetchFromApi } from "../requests/api_request";

const Feed: React.FC<FeedProps> = () => {
  const [category, setcategory] = useState("New");
  useEffect(() => {}, []);

  return (
    <>
      <div className="border w-full flex">
        <Sidebar category={category} setcategory={setcategory} />
        <div className="flex flex-col">
          <div className="p-4 flex space-x-3 font-bold">
            <h1 className="text-white text-xl">{category}</h1>
            <span className="text-red-800 text-xl">Videos</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feed;
