import React from "react";
import { RootVideo } from "../types/Video";
import { Root, Root2 } from "../types/Videos";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

type VideosProps = {
  videos: Root;
  loading: boolean;
};

const Videos: React.FC<VideosProps> = ({ videos, loading }) => {
  return (
    <div className="flex flex-wrap  scrollbar-none scroll-smooth space-y-4  space-x-3 justify-around h-[733px]  p-4  overflow-auto">
      {videos?.map((items: any, i) => {
        return (
          <div key={i} className="">
            {items.id.videoId && <VideoCard items={items} loading={loading} />}
            {items.id.channelId && <ChannelCard items={items} />}
          </div>
        );
      })}
    </div>
  );
};
export default Videos;
