import React from "react";
import "./SideMenu.css";
import useStyle from "../../style";
import spark from "../../Images/sperk.jpg";
import { BiHomeCircle, BiBell, BiHash } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FaEllipsisH, FaUserCircle } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";




const SideMenu = () => {
  const classes = useStyle();


  return (
    <div className="All">
    
      <Navbar/>
    
    <div className="Sidebar_Area">
    <div className="Twitter">
        <img className={classes.image} src={spark} alt="spark" height="70" />
      </div>
      <div className="Icons">
        <BiHomeCircle color="green" fontSize="2rem" />
        <div>Home</div>
      </div>
      <div className="Icons">
        <BiHash color="green" fontSize="2rem" />
        <div>Explore</div>
      </div>
      <div className="Icons">
        <BiBell color="green" fontSize="2rem" />
        <div>Notification</div>
      </div>
      <div className="Icons">
        <MdMailOutline color="green" fontSize="2rem" />
        <div>Messages</div>
      </div>

      <div className="Icons">
        <FaUserCircle color="green" fontSize="2rem" />
        <div>Profile</div>
      </div>
      <div className="Icons">
        <FaEllipsisH color="green" fontSize="2rem" />
        <div>More</div>
      </div>
      <div className="Icons">
        <button className="btn">Spark</button>
      </div>
    </div>
    </div>
  );
};

export default SideMenu;
