import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../requests/api_request";
import { useParams } from "react-router-dom";

type VideoinfoProps = {};

const Videoinfo: React.FC<VideoinfoProps> = () => {
  const { id } = useParams();
  const [videodetails, setvideodetails] = useState(null || Object);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setvideodetails(data.items[0]);
      console.log(data.items[0]);
    });
  }, []);

  if(!videodetails?.snippet) return <div>klkl</div>;


  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videodetails;

  return <div>Have a good coding</div>;
};

export default Videoinfo;
