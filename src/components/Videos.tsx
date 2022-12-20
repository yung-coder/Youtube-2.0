import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

type VideosProps = {
  videos: any[];
};

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <div className="flex flex-wrap border border-red-600 p-5 space-x-3 justify-center items-center">
      {videos?.map((items, i) => {
        return (
          <div key={i} className='border'>
            {items.id.videoId && <VideoCard items={items}/>}
            {items.id.channelId && <ChannelCard  items={items}/>}
          </div>
        );
      })}
    </div>
  );
};
export default Videos;
