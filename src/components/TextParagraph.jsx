import React, { Component } from 'react';
import "./TextParagraph.css"

const TextParagraph = (props) => {
    return ( <>
    
    
    <div className='both'>
        <h1 className='ABOUT'>{props.title}</h1>
        <h3 className='TXT'>{props.txt}</h3>

    </div>

    
    
    
    
    
    
    
    </> );
}
 
export default TextParagraph;