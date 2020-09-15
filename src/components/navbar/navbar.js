import React from "react";
import "./navbar.css";
import Togglebutton from "../sidedrawer/togglebutton";
import Button from "@material-ui/core/Button";

const Navbar = (props) => (
  <header className="navbarr">
    <nav className="navbar_navigation">
      <div>
        <Togglebutton click={props.drawerClickHandler} />
      </div>
      <div className="navbar_logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacers"></div>
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/services">Post Project</a>
          </li>
          <li>
            <a href="/services">Post Job</a>
          </li>
          <li>
            <a href="/services">About us</a>
          </li>
          <li>
            <a href="/services">Contact us</a>
          </li>
          <li>
            <Button variant="outlined" color="primary" href="signin">
              SignIn
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
