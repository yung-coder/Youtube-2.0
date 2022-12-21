import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../requests/api_request";
import ChannelCard from "./ChannelCard";
import cover from "../images/cover.jpg";
import VideoCard from "./VideoCard";
type ChannelDetailsProps = {};

const ChannelDetails: React.FC<ChannelDetailsProps> = () => {
  const { id } = useParams();
  const [channel, setchannel] = useState(null);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?snippet&id=${id}`).then((data) => {
      setchannel(data.items[0]);
      console.log(data.items);
    });

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideos(data.items);
        console.log(data.items);
      }
    );
  }, [id]);

  return (
    <>
      <div className="border flex flex-col justify-center items-center">
        <img src={cover} alt="" className="w-full h-96" />
        <div className="relative bottom-24">
          {channel && <ChannelCard items={channel} />}
        </div>
        <div className="flex flex-wrap justify-center items-center  border border-red-800 ">
          {videos?.map((items, i) => {
            return (
              <div
                key={i}
                className="flex p-8"
              >
                {items && <VideoCard items={items} />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ChannelDetails;
