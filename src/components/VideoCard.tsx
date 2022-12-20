import React from "react";

type VideoCardProps = {
  items: any;
};

const VideoCard: React.FC<VideoCardProps> = ({items}) => {
  return (
     <>
      <div>
         <img src={items.snippet.thumbnails.default.url} alt="" />
      </div>
     </>
  )
};
export default VideoCard;
