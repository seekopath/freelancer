import React from 'react';
import Dashboardsearchbar from '../dashboardsearchbar/dashboardsearchbar';
import './dashboardprofile.css';
import * as CgIcons from 'react-icons/cg';


export default class Dashboarduserprofile extends React.Component {
    render(){
        return(
            <div className="dashboard-profile">
                <Dashboardsearchbar />
                <div className="dashboard-profile-sidebar">
                    <ul className="dashboard-profile-sidebar-list">
                        <li className="dashboard-profile-sidebar-list-items">
                            <img src="assets/profile.png" />
                            <div className="dashboard-profile-sidebar-list-items-name">Rajneesh Kushwaha</div>
                            <div className="dashboard-profile-sidebar-list-items-email">rajneesh@gmail.com</div>
                        </li>
                        <li className="dashboard-profile-sidebar-list-item">
                            <CgIcons.CgProfile  size={32}/>
                            <span>Profile</span>
                        </li>
                        <li className="dashboard-profile-sidebar-list-item">
                            <CgIcons.CgProfile  size={32}/>
                            <span>Resume Builder</span>
                        </li>
                        <li className="dashboard-profile-sidebar-list-item">
                            <CgIcons.CgProfile  size={32}/>
                            <span>My Registrations</span>
                        </li>
                        <li className="dashboard-profile-sidebar-list-item">
                            <CgIcons.CgProfile  size={32}/>
                            <span>My Listing</span>
                        </li>
                        <li className="dashboard-profile-sidebar-list-item">
                            <CgIcons.CgProfile  size={32}/>
                            <span>My WatchLists</span>
                        </li>
                    </ul>
                </div>
                <div className="dashboard-profile-main">
                    <div className="dashboard-profile-main-about">
                        <h5>About</h5>
                        <div className="dashboard-profile-main-about-form">
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Name</label>
                                <input type='text' />
                            </div>
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Email</label>
                                <input type='text' />
                            </div>
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Mobile No.</label>
                                <input type='text' />
                            </div>
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Date of birth</label>
                                <input type='text' />
                            </div>
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Organisation / College</label>
                                <input type='text' />
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-profile-main-password">
                        <h5>Change Password</h5>
                        <div className="dashboard-profile-main-about-form">
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Enter New Password</label>
                                <input type='text' />
                            </div>
                            <div className="dashboard-profile-main-about-form-fields">
                                <label>Confirm New Password</label>
                                <input type='text' />
                            </div>
                            
                        </div>
                        <button className="dashboard-profile-main-password-button">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}