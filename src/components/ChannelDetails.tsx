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
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetchFromApi(`channels?snippet&id=${id}`).then((data) => {
      setchannel(data.items[0]);
    });

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideos(data.items);
      }
    );

    setloading(false);
  }, [id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={cover} alt="" className="w-full h-96" />
        <div className="relative bottom-24">
          {channel && <ChannelCard items={channel} />}
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {videos?.map((items, i) => {
            return (
              <div key={i} className="flex p-8">
                {items && <VideoCard items={items} loading={loading} />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ChannelDetails;
