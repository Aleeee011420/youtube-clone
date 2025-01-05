import React from "react";
import {ButtonList} from "./ButtonList";
import { VideoContainer} from "./VideoContainer";
import {Sidebar} from "./SideBar";

export const MainContainer = () => {
  return (
    <div className="">
      <ButtonList />
   
      <VideoContainer />
    </div>
  );
};

