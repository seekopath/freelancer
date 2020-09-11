import React from "react";
import "./sidedrawer.css";

const Sidedrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show){
        drawerClasses = 'side-drawer open';
    }
  return (
    <nav className={drawerClasses}>
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
      </ul>
    </nav>
  );
};

export default Sidedrawer;
