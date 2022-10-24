import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";


import './nav.css';

const Navbar = () => {
  return (
     <div className="main">
        <div className="logo">
           <img src="/images/airbnb-logo.png" alt="logo" className="logoImg" />
        </div>

        <div className="circularNav">
           <div className="anyWhere">
              <p>Any where</p>
           </div>
           <div className="b">
              <p>Any week</p>
           </div>
           <div className="re">
              <p>Any guests</p>
              <div className="search">
                 <BiSearchAlt2 className="ee" />
              </div>
           </div>
        </div>

        <div className="become">
           <p className="cc">Become a Host</p>
           <TbWorld className="ee" />

           <div className='ff'>
              <GoThreeBars />
              <FaUserCircle className='gg' />
           </div>
        </div>
     </div>
  );
}

export default Navbar