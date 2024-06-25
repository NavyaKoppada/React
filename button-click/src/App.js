import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import { useState } from 'react';

function App() {

  let [count,updateCount] = useState(0);

  function buttonClick(){
      updateCount(++count);
  }

  return (
    <div className="App">
      <div className='app'>
        <h4>AppComponent</h4>
        {/* <button onClick={buttonClick}>AppClick</button> */}
        {/* <span>{count}</span> */}
        <input className='inp'
               value={count}></input>
        <Component1 count={count} buttonClick={buttonClick}></Component1>
      </div>
    </div>
  );
}

export default App;
