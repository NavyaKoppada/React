import React from "react";
import './CSS/Component3.css';

function Component3(props){
    return(
        <div className="comp3">
            <h4>Component3</h4>
            <div className="side">
            <button onClick={props.buttonClick}>Click3</button>
            <input className='inp'
               value={props.count}></input> 
            </div>
        </div>
    )
}
export default Component3;