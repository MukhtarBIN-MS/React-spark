import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  withRouter
} from "react-router-dom";
import "./index.css";
import SideMenu from "./spark components/SideMenu/SideMenu";
import Mainmenu from "./spark components/Mainmenu/Mainmenu";
import LeftMenu from "./spark components/LeftMenu/LeftMenu";
import Explore from "./spark components/Explore/Explore";
import Messages from "./spark components/Messages/Messages";
import Notifications from "./spark components/Notifications/Notifications";

const Home = () => {
  return (
    <Router>
    <Switch>
     
        <Route path="/" exact={true}>
          <div className="App">
            <div className="Main">
              <SideMenu />
              <Mainmenu />
              <LeftMenu />
            </div>
          </div>
        </Route>
        <Route path="/explore"  component={withRouter(Explore)} />

        <Route path="/notifications"  component={withRouter(Notifications)} />

        <Route path="/messages"  component={withRouter(Messages)} />
     
    </Switch>
    </Router>
  );
};
export default Home;
