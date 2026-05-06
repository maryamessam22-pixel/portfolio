import React, { Component } from 'react';
import "./TextParagraph.css"
import { stripHTML } from '../../utils/stripHTML';

const TextParagraph = (props) => {
    return ( 
        <>
        <h1 className='ABOUT'>{stripHTML(props.title)}</h1>
        <h3 className='TXT'>{stripHTML(props.txt)}</h3>
        
        </>
     );
}
 
export default TextParagraph;







