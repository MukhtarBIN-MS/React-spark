import React from 'react';
import './LeftMenu.css';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import {
 
  AiOutlineSearch,
} from "react-icons/ai";


const LeftMenu = () =>{
    return(

        
        <div className="left_Sidebar_Area">

        <div className="Search">
            <AiOutlineSearch fontSize="1.5rem" style={{borderRadius:"50%"}}/>
            <div classsName="Search_Input">
            <TextField  
                       
                       label="Search" 
                       fullWidth 
                       placeholder="Search Spark"
                       style={{borderBottom:'none'}}
              />
            </div>
        </div>
        <br></br>
        <div className="Container">
            <div className="Trends">
                <div className="Trends_4u">
                    Trends for you
                </div>
                </div>
                <div className="Trending_worldwide">
                  <div className="Trending_show">
                    Trending Trending_worldwide
                  </div>
                  <div className="tag">
                    #World News
                  </div>
                  <div className="spark_people">125k</div>
                  <div className="sparks">30,230 people are sparking this</div>

                </div>
            </div>
        </div>

    );
}

export default LeftMenu;