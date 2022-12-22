import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../requests/api_request";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import millify from "millify";
import { AiFillCheckCircle } from "react-icons/ai";

type VideoinfoProps = {};

const Videoinfo: React.FC<VideoinfoProps> = () => {
  const { id } = useParams();
  const [videodetails, setvideodetails] = useState(null || Object);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setvideodetails(data.items[0]);
      console.log(data.items[0]);
    });
  }, []);

  if (!videodetails?.snippet) return <div>klkl</div>;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videodetails;

  return (
    <>
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center border h-[600px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls={true}
            width="100%"
            height={500}
          />
        </div>
        <div className="flex flex-col  p-5 space-y-4">
          <div>
            <h1 className="text-white font-semibold">{title}</h1>
          </div>
          <div className="flex justify-between text-gray-300">
            <div className="flex space-x-3 justify-center items-center">
              <Link to={`/channel/${channelId}`}>
                <h1>{channelTitle}</h1>
              </Link>
              <AiFillCheckCircle color="white" />
            </div>
            <div className="flex space-x-3">
              <div className="flex space-x-1">
                <h1>{millify(likeCount)}</h1> <span>Likes</span>
              </div>
              <div className="flex space-x-1">
                <h1>{millify(viewCount)}</h1> <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videoinfo;