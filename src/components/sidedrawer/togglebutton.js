import React from 'react';
import './togglebutton.css'

const Togglebutton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />

    </button>
);

export default Togglebutton;