import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../requests/api_request";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { Root } from "../types/Videos";

type SearchFeedProps = {};

const SearchFeed: React.FC<SearchFeedProps> = () => {
  const [videos, setvideos] = useState<Root>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${id}`).then((data) => {
      setvideos(data.items);
    });
  }, []);

  return (
    <>
      <div className="flex-col h-full md:flex md:flex-row">
        <div className="flex flex-col">
          <div className="p-4 flex space-x-3 font-bold">
            <h1 className="text-white text-xl">{id}</h1>
            <span className="text-red-800 text-xl">Videos</span>
          </div>
          <div className="h-full overflow-auto p-2">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchFeed;
