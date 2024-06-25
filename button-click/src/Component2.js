import React, { useState } from "react";
import Component3 from "./Component3";
import './CSS/Component2.css';

function Component2(props){

    return(
        <div className="comp2">
            <h4>Component2</h4>
            <div className="side">
            <button onClick={props.buttonClick}>Click2</button>
            <input className='inp'
               value={props.count}></input> 
            </div>
            <Component3 count={props.count}
                        buttonClick={props.buttonClick}></Component3>
        </div>
    )
}

export default Component2;