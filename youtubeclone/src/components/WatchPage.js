import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentsContainer } from "./CommentsContainer";
import { LiveChat } from "./LiveChat";

export const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full h-screen overflow-y-scroll">
   
      <div className="flex flex-row w-full h-[70%]">
       
        <div className="flex-1 bg-black">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + params}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

       
        <div className="w-1/3 h-full bg-gray-200 overflow-y-scroll">
          <LiveChat />
        </div>
      </div>

     
      <div className="w-full h-[30%] bg-white overflow-y-scroll p-4">
        <CommentsContainer />
      </div>
    </div>
  );
};
