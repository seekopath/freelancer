import React from 'react';
import './dashboardcard.css';

const Dashboardcard = (props) => {
    return (
        <div className="dashboardcard">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/competitions.svg" alt="smiley face" />
            <div className="dashboardcard_container">
                <h4 className="dashboardcard_heading">{props.name}</h4>
            </div>
        </div>
    );
};

export default Dashboardcard;