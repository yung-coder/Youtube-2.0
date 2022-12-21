import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../requests/api_request";
type ChannelDetailsProps = {};

const ChannelDetails: React.FC<ChannelDetailsProps> = () => {
  const { id } = useParams();
  const [channel, setchannel] = useState([]);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?snippet&id=${id}`).then((data) => {
      setchannel(data.items);
      console.log(data.items);
    });

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideos(data.items);
        console.log(data.items);
      }
    );
  }, [id]);

  return <div>Have a good coding {id}</div>;
};
export default ChannelDetails;
