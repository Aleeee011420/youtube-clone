import React,{useEffect,useState} from "react";

import {YOUTUBE_VIDEOS_API} from "../utils/constants";

import {VideoCard} from "./VideoCard"

import {Link} from "react-router-dom";


export const VideoContainer =()=>{
   const [videos,setVideos]=useState([]);
  
 const getVideos = async ()=>{
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const json= await data.json();
    setVideos(json?.items);
   };
   
   useEffect(()=>{
    getVideos();
   },[]);
    return(
        <div className="flex flex-wrap gap-5 justify-center">
            {videos?.map((video)=> (
                <Link to={"/watch?v=" + video.id} key={video.id}>
                    <VideoCard  info={video} />
                </Link>
 
            ))}

        </div>

    )
}

