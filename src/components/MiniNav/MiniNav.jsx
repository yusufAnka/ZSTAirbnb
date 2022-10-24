import React from "react";
import './miniNav.css'
import {BsFillMapFill} from 'react-icons/bs';


const MiniNav = () => {
  return (
    <div className="mini_nav">
           <div className="map">
              <p>Show Map</p>
              <div className="">
                 <BsFillMapFill className="mapIcon"/>
              </div>
           </div>
    </div>
  );
}

export default MiniNav;