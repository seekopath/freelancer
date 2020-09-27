import React from 'react';
import './dashboard.css';
import Dashboardsearchbar from './dashboardsearchbar/dashboardsearchbar';
import Dashboardcarousel from './dashboardcarousel/dashboardcarousel';
import Dashboardcategories from './dashboardcategories/dashboardcategories';
import Hello from '../featuredjobs/featuredjobs';
import BottomAppBar from './dashboardbottombar/dashboardbottombar';
import Button from "@material-ui/core/Button";


export default class Dashboard extends React.Component {
    render(){
        return (
            <div className="dashboard">
                <Dashboardsearchbar />       
                <Dashboardcarousel />
                <Dashboardcategories />
                <div className="dashboardfeaturedheadings">
                    <div className="dashboardfeaturedheadings_heading">Influencers</div>
                    <div>
                        <Button variant="outlined" color="primary" href="">
                            View All
                        </Button>
                    </div>
                </div>
                <Hello />
                <div className="dashboardfeaturedheadings">
                    <div className="dashboardfeaturedheadings_heading">Freelancers</div>
                    <div>
                        <Button variant="outlined" color="primary" href="">
                            View All
                        </Button>
                    </div>
                </div>
                <Hello />
                <BottomAppBar />
            </div>
            
        )
    }
}