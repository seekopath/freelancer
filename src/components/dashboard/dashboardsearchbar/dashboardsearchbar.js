import React,{useState} from "react";
import "./dashboardsearchbar.css";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import TuneIcon from "@material-ui/icons/Tune";
import SortIcon from "@material-ui/icons/Sort";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/Inbox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as BiIcons from 'react-icons/bi';
import { SidebarData} from './sidebardata';
 
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



  function Dashboardsearchbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () =>setSidebar(!sidebar);

    const classes = useStyles();
    return (
      <div>
        <nav className="dashboardsearchbar mobile">
          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>
          <IconButton color="inherit">
            <TuneIcon fontSize="small" />
          </IconButton>
          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>
          <div className="dashboardsearch">
            <IconButton color="inherit">
              <SearchIcon
                className="dashboardsearchbarsearchbutton"
                fontSize="small"
              />
            </IconButton>
            <InputBase
              placeholder="Search…"
              className="dashboardsearchbarinput"
            />
          </div>

          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>
          <IconButton color="inherit">
            <NotificationsIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit">
            <SortIcon fontSize="small" />
          </IconButton>
          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>
        </nav>
        <nav className="dashboardsearchbar desktop">
          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>

          <div className="dashboardsearch">
            <IconButton color="inherit">
              <SearchIcon
                className="dashboardsearchbarsearchbutton"
                fontSize="small"
              />
            </IconButton>
            <InputBase
              placeholder="Search…"
              className="dashboardsearchbarinput"
            />
          </div>
          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Post job
          </Button>
          <Button
            // variant="outlined"
            size="medium"
            color="primary"
            endIcon={<NotificationsIcon />}
            className={classes.button}
          >
            Notification
          </Button>
          <Button
            // variant="outlined"
            size="medium"
            color="primary"
            endIcon={<InboxIcon />}
            className={classes.button}
          >
            Find Jobs
          </Button>
          <div classname="dashboardsearchbarspacers" style={{ flex: 1 }}></div>
          <Button
            // variant="outlined"
            size="medium"
            color="primary"
            size="small"
            endIcon={<PersonIcon />}
            className={classes.button}
          >
            My Profile
          </Button>
          <IconButton color="inherit" onClick={showSidebar}>
            <MenuIcon fontSize="small" />
          </IconButton>
        </nav>
        <nav className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
          <ul className="sidebar-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle">
              <div className="sidebar-bars">
                <AiIcons.AiOutlineClose style={{ color: "white" }} />
              </div>
            </li>
            <li className="sidebar-profile">
              <div className="sidebar-profiletab">
                <div className="sidebar-profilephoto">
                  <CgIcons.CgProfile style={{ color: "white" }} size={64} />
                </div>
                <div className="sidebar-profilename">
                  Rajneesh Kushwaha<br />rajneesh@gmail.com
                </div>
                <div className="sidebar-profilebuttons">
                  <Link to='/profile' style={{textDecoration: 'none'}}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<PersonIcon />}
                    className={classes.button}
                    style={{color: 'white', textDecoration: 'none'}}
                  >
                    My Profile
                  </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<BiIcons.BiLogOutCircle />}
                    className={classes.button}
                    style={{color: 'white'}}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  
    };

export default Dashboardsearchbar;
