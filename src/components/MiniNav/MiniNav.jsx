import React from "react";
import './miniNav.css'
import {BsFillMapFill} from 'react-icons/bs';
// import Link from 'react/link'


const MiniNav = () => {
  return (
    <div className="mini_nav">
      <a href="https://www.weather-forecast.com/">
           <div className="map">
              <span>Show Map</span>
              <div className="">
                 <BsFillMapFill className="mapIcon"/>
              </div>
           </div>
           </a>
    </div>
  );
}

export default MiniNav;