import React from "react";
import {Link } from "react-router-dom";
import "./style.css";
import { BiHomeCircle, BiBell, BiHash } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="Topnavbar">
     
        <ul>
       
          <li>
            <span>
              
              <Link to="/">
                <BiHomeCircle
                  color="white"
                  fontSize="1.7rem"
                  style={{ marginTop: "10px" }}
                />
              </Link>
              
            </span>
          </li>
          <li>
            <span>
            
              <Link to="/explore">
                <BiHash
                  color="white"
                  fontSize="1.7rem"
                  style={{ marginTop: "10px" }}
                />
              </Link>
              
            </span>
          </li>
          <li>
            <span>
              <Link to="/notifications">
                <BiBell
                  color="white"
                  fontSize="1.7rem"
                  style={{ marginTop: "10px" }}
                />
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/messages">
                <MdMailOutline
                  color="white"
                  fontSize="1.7rem"
                  style={{ marginTop: "10px" }}
                />
              </Link>
            </span>
          </li>
          
            <span id="pro">
              <Link to="/profile">
                <FaUserCircle 
                  color="white"
                  fontSize="1.7rem"
                  style={{ marginTop: "15px", float:"right", marginRight:"20px" }}
                />
              </Link>
              </span>
            
        </ul>
      
    </div>
  );
};

export default Navbar;
