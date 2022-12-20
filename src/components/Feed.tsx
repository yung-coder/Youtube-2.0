import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import { fetchFromApi } from "../requests/api_request";
import Videos from "./Videos";
type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  const [category, setcategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${category}`).then((data) => {
      setvideos(data.items);
      console.log(data.items);
    });
  }, [category]);

  return (
    <>
      <div className="border border-red-700 flex-col h-full md:flex md:flex-row">
        <div>
          <Sidebar category={category} setcategory={setcategory} />
        </div>
        <div className="flex flex-col">
          <div className="p-4 flex space-x-3 font-bold">
            <h1 className="text-white text-xl">{category}</h1>
            <span className="text-red-800 text-xl">Videos</span>
          </div>
          <div className=" border  h-full overflow-auto p-2">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Feed;
