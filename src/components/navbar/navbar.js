import React from 'react';
import './navbar.css';
import Togglebutton from '../sidedrawer/togglebutton';

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div>
                <Togglebutton click={props.drawerClickHandler} />    
            </div>
            <div className="navbar_logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/services">Post Project</a></li>
                    <li><a href="/services">Post Job</a></li>
                    <li><a href="/services">About us</a></li>
                    <li><a href="/services">Contact us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;