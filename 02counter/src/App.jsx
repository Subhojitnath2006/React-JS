import React from 'react'
import { useState } from 'react';
const App = () => {

  //returns a {variable,function}
  const [counter,setConter] = useState(0); 
  //let counter = 15;
  // const addValue = () => {
  //   counter++;
  //   console.log(counter);
  // }
  const addValue = () => {
    // setConter(counter+1);
    // console.log(counter);

    setConter((prevCounter) => prevCounter + 1)
    setConter((prevCounter) => prevCounter + 1)
    setConter((prevCounter) => prevCounter + 1)
    setConter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setConter(counter-1);
    console.log(counter);
  }
  return (
    <div>
      <h1>React Course with me {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>&nbsp;&nbsp;
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </div>
  )
}

export default App
