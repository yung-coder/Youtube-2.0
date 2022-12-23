import React from "react";
import { RootVideo } from "../types/Video";
import { Root, Root2 } from "../types/Videos";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

type VideosProps = {
  videos: Root;
};

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <div className="flex flex-wrap  scroll-smooth space-y-4  space-x-3 justify-around h-[733px]  p-4  overflow-auto">
      {videos?.map((items, i) => {
        return (
          <div key={i} className="">
            {items.id.videoId && <VideoCard items={items} />}
            {items.id.channelId && <ChannelCard items={items} />}
          </div>
        );
      })}
    </div>
  );
};
export default Videos;
