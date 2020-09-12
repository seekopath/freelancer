import React from 'react';
import './feature.css';
import Featurecard from './featurecard';

const Feature = props =>{
    return (
        <div className="feature">
            <h4 className="feature_head">HOW IT WORKS</h4>
            <div className="feature_card">
                <Featurecard heading="POST PROJECT" description="No description" bool={false} />
                <Featurecard heading="POST PROJECT" description="No description" bool={true} />
                <Featurecard heading="POST PROJECT" description="No description" bool={false} />
                <Featurecard heading="POST PROJECT" description="No description" bool={true} />
            </div>
        </div>
    );
};

export default Feature;