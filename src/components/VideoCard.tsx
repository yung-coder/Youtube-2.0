import moment from "moment";
import React from "react";
import { IoTerminal } from "react-icons/io5";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { RootVideo } from "../types/Video";
import { Root } from "../types/Videos";
import LoaderVideoCard from "./LoaderVideoCard";

type VideoCardProps = {
  items: RootVideo;
  loading: boolean;
};

const VideoCard: React.FC<VideoCardProps> = ({ items, loading }) => {
  return (
    <>
      {!loading ? (
        <>
          <Link to={items.id.videoId ? `/video/${items.id.videoId}` : ""}>
            <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:backdrop-blur-3xl	 duration-300">
              <div className="">
                <img
                  src={items.snippet.thumbnails.medium.url}
                  alt=""
                  className="rounded-2xl"
                />
              </div>
              <div className="text-white p-2">
                <h2>{`${items.snippet.title.slice(0, 34)}...`}</h2>
                <h2>{items.snippet.channelTitle}</h2>
                <p>{moment(items.snippet.publishedAt).fromNow()}</p>
              </div>
            </div>
          </Link>
        </>
      ) : (
        <>
          <LoaderVideoCard />
        </>
      )}
    </>
  );
};
export default VideoCard;
