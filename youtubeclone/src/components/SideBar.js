import React from "react";
import {useSelector } from "react-redux";
import {Link} from "react-router-dom";


export const SideBar =()=>{
   
    const isMenuOpen =useSelector((store)=> store.app?.isMenuOpen);
    if(!isMenuOpen) return null;
    return(
<div className="p-5 shadow-lg w-48 bg-red-50">
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>shorts</li>
        <li>vidoes</li>
        <li>live</li>
    </ul>
  <h1 className=" font-bold pt-5">subscriptions </h1>
  <ul>
    <li>Music</li>
    <li>sports</li>
    <li>gaming</li>
    <li>Movies</li>

    
  </ul>
  <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>

</div>
    );
};
