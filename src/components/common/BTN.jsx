import React, { Component } from 'react';
import "./BTN.css"
const BTN = (props) => {
    const { btn, onClick, type = 'button', className = '' } = props;
    return ( <>
    
    <button type={type} className={`BTN ${className}`} onClick={onClick}>{btn}</button>


    
    </> );
}
 
export default BTN;  