import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

type VideosProps = {
  videos: any[];
};

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <div>
      {videos?.map((items, i) => {
        return (
          <div key={i}>
            {items.id.videoId && <VideoCard />}
            {items.id.channelId && <ChannelCard />}
          </div>
        );
      })}
    </div>
  );
};
export default Videos;
