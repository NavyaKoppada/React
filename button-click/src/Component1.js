import React, { useState } from "react";
import './CSS/Component1.css'
import './App.css'
import Component2 from "./Component2";

function Component1(props){


    return (
        <div className="comp1">
          <h4>Component1</h4>
          <div className="side">
          <button onClick={props.buttonClick}>Click1</button>
          <input className='inp'
               value={props.count}></input>          
               </div>
          <Component2 count={props.count}
                      buttonClick={props.buttonClick}></Component2>
        </div>
    )
}
export default Component1;