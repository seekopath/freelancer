import React from 'react';
import './dashboard.css';
import PrimarySearchAppBar from './dashboardnavbar/dashboardnavbar';


class Dashboard extends React.Component {
    render(){
        return(
            <div className="dashboard">
                <PrimarySearchAppBar />

            </div>
        );
    };
}

export default Dashboard;