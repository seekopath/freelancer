import React from "react";
import "./dashboardsearchbar.css";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import TuneIcon from "@material-ui/icons/Tune";
import SortIcon from "@material-ui/icons/Sort";
import NotificationsIcon from '@material-ui/icons/Notifications';

const Dashboardsearchbar = (props) => (
  <nav className="dashboardsearchbar">
      <div classname="dashboardsearchbarspacers" style={{flex:1}}></div>
    <IconButton color="inherit">
      <TuneIcon fontSize="small" />
    </IconButton>
    <div classname="dashboardsearchbarspacers" style={{flex:1}}></div>
    <div className="dashboardsearch">
      <IconButton color="inherit">
        <SearchIcon className="dashboardsearchbarsearchbutton" fontSize="small" />
      </IconButton>
      <InputBase placeholder="Search…" className="dashboardsearchbarinput" />
    </div>

    <div classname="dashboardsearchbarspacers" style={{flex:1}}></div>
    <IconButton color="inherit">
      <NotificationsIcon fontSize="small"/>
    </IconButton>
    <IconButton color="inherit">
      <SortIcon fontSize="small" />
    </IconButton>
    <div classname="dashboardsearchbarspacers" style={{flex:1}}></div>
  </nav>
);

export default Dashboardsearchbar;
