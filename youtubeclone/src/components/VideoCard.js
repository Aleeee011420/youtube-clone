import React from "react";

export const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="w-80 space-y-1 shadow-lg ">
      {
        <img
          className="rounded-lg"
          src={thumbnails?.medium?.url}
          alt="thumbnail"
        />
      }
      <ul className="space-y-1">
        <li className="font-bold">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-xs inline-block">{statistics.viewCount} views</li>
        <li></li>
      </ul>
    </div>
  );
};

