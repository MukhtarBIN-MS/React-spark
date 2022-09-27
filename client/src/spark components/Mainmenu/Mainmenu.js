import React from "react";
import "./Mainmenu.css";
import spark from "../../Images/sperk.jpg";
import { TextField } from '@material-ui/core';
import pic from "../../Images/pic.jpg";

import {
  AiOutlineAlignLeft,
  AiOutlineSmile,
  AiTwotoneStar,
  AiOutlineFileGif,
  AiOutlinePicture,
 
} from "react-icons/ai";

import {
  
  FaRegComment,
  FaRetweet,
  FaRegHeart,
} from "react-icons/fa";

const Mainmenu = () => {
  return (
    <div className="Main_Area">
      <div className="Home">
        <div className="home">Home</div>
        <div className="Star-icon">
          <AiTwotoneStar color="green" fontSize="2rem" />
        </div>
      </div>
      <br></br>
      <div className="Create_Post">
        <div className="Add_text">
          <div className="Profile">
            <img
              src={spark}
              alt="Profile image"
              style={{ height: "35px", width: "40px", borderRadius: "50%" }}
            />
          </div>
          <TextField  
                       
                        label="Post" 
                        disabled={true}
                        fullWidth 
                        placeholder="What's going on right now ??"
               />
        </div><br></br>
        <div classsName="Btns">
          <div className="Icon">
            <div className="Btns_icon">
              <AiOutlinePicture fontSize="1.5rem" color="green" />
            </div>
            <div className="Btns_icon">
              <AiOutlineFileGif fontSize="1.5rem" color="green" />
            </div>
            <div className="Btns_icon">
              <AiOutlineAlignLeft fontSize="1.5rem" color="green" />
            </div>
            <div className="Btns_icon">
              <AiOutlineSmile fontSize="1.5rem" color="green" />
            </div>
          </div>
          <div className="sparks">
            <button className="btn-spark">Spark</button>
          </div>
        </div>
      </div>

      <div className="posted_area">
        <div className="profile">
          <div className="User_Detail">
            <img
              src={spark}
              alt="user profile image"
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            />
            <div className="User_Name">Mukhtar Mahmud</div>
            <div className="User_id">@Mukhtar Mahmud</div>
          </div>
        </div>
        <div className="Quotes">'Be a Writer. There are no dull moments'</div>
        <br></br>
        <div className="profile_images">
          <img
            src={pic}
            alt="profile image"
            style={{ width: "100%", height: "23rem", objectFit: "fill" }}
          />
        </div>
        <div className="Comment_Section">
          <div className="comment">
            <FaRegComment fontSize="1.4rem" color="green" />
          </div>
          <div className="comment">
            <FaRetweet fontSize="1.4rem" color="green" />
          </div>
          <div className="comment">
            <FaRegHeart fontSize="1.4rem" color="green" />
          </div>
        </div>
      </div>
      <br></br>

      <div className="posted_area">
        <div className="profile">
          <div className="User_Detail">
            <img
              src={spark}
              alt="user profile image"
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
            <div className="User_Name">Mukhtar Mahmud</div>
            <div className="User_id">@Mukhtar Mahmud</div>
          </div>
        </div>
        <div className="Quotes">'Be a Writer. There are no dull moments'</div>
        <br></br>
        <div className="profile_images">
          <img
            src={spark}
            alt="profile image"
            style={{ width: "100%", height: "23rem", objectFit: "fill" }}
          />
        </div>
        <div className="Comment_Section">
          <div className="comment">
            <FaRegComment fontSize="1.4rem" color="green" />
          </div>
          <div className="comment">
            <FaRetweet fontSize="1.4rem" color="green" />
          </div>
          <div className="comment">
            <FaRegHeart fontSize="1.4rem" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;
