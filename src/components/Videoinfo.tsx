import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../requests/api_request";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import millify from "millify";
import { AiFillCheckCircle } from "react-icons/ai";
import Videos from "./Videos";
import { RootVideoDetail } from "../types/videoDetails";
import { Root, Root2 } from "../types/Videos";

type VideoinfoProps = {};

const Videoinfo: React.FC<VideoinfoProps> = () => {
  const { id } = useParams();
  const [videodetails, setvideodetails] = useState<RootVideoDetail>();
  const [videos, setvideos] = useState<Root>([]);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setvideodetails(data.items[0]);
    });

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setvideos(data.items);
      }
    );
  }, [id]);

  if (!videodetails?.snippet) return <div>klkl</div>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videodetails;

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center  h-[600px]  backdrop-sepia">
          <div className="w-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls={true}
              width="100%"
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-col  p-8 md:p-5 space-y-4">
          <div>
            <h1 className="text-white font-semibold">{title}</h1>
          </div>
          <div className="flex justify-between text-gray-300">
            <div className="flex space-x-2 md:space-x-3 justify-center items-center">
              <Link to={`/channel/${channelId}`}>
                <h1>{channelTitle}</h1>
              </Link>
              <AiFillCheckCircle color="white" />
            </div>
            <div className="flex space-x-3">
              <div className="flex space-x-1">
                <h1>{millify(Number(likeCount))}</h1> <span>Likes</span>
              </div>
              <div className="flex space-x-1">
                <h1>{millify(Number(viewCount))}</h1> <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Videos videos={videos} />
    </>
  );
};

export default Videoinfo;
