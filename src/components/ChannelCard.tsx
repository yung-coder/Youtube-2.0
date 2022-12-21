import React from "react";
import { Link } from "react-router-dom";

type ChannelCardProps = {
  items: any;
};

const ChannelCard: React.FC<ChannelCardProps> = ({ items }) => {
  return (
    <>
      <Link to={`/channel/${items.id.channelId}`}>
        <div className="flex flex-col justify-center items-center p-3 space-y-2">
          <div>
            <img
              src={items.snippet.thumbnails.high.url}
              alt=""
              className="h-40 w-40 rounded-full"
            />
          </div>
          <div>
            <h2 className="text-white font-bold">
              {items.snippet.channelTitle}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};
export default ChannelCard;
