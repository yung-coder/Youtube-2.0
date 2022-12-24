import React, { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import { fetchFromApi } from "../requests/api_request";
import Videos from "./Videos";
import { Root } from "../types/Videos";
import LoaderVideoCard from "./LoaderVideoCard";
type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  const [category, setcategory] = useState("New");
  const [videos, setvideos] = useState<Root>([]);
  const [loadingVidocard, setloadingVideo] = useState(false);

  useEffect(() => {
    setloadingVideo(true);
    fetchFromApi(`search?part=snippet&q=${category}`).then((data) => {
      setvideos(data.items);
    });
    setloadingVideo(false)
  }, [category]);

  return (
    <>
      <div className=" flex-col h-full md:flex md:flex-row">
        <div>
          <Sidebar category={category} setcategory={setcategory} />
        </div>
        <div className="flex flex-col">
          <div className="p-4 flex space-x-3 font-bold">
            <h1 className="text-white text-xl">{category}</h1>
            <span className="text-[#FF0000] text-xl">Videos</span>
          </div>
          <div className="h-full overflow-auto p-2">
            <Videos videos={videos} loading={loadingVidocard}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feed;
