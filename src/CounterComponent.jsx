import { useState } from 'react'
import './App.css'

function CounterComponent() {
//  let  counter = 10

let [counter , setCounter] = useState(0)

  const addValue = () => {
  // console.log("clicked", counter);
   setCounter(counter + 1)
  //  setCounter(counter +2)
  //  setCounter(counter +3)
    // setCounter((preCounter) => preCounter = preCounter + 1)
    // setCounter((preCounter) => preCounter = preCounter + 1)  // interview question //
    // setCounter((preCounter) => preCounter = preCounter + 1)
  }

  const decValue = ()=>{
    // console.log("clicked", counter);
    if(counter>0)
    return setCounter(counter-1)

  }

  // if (counter >0 && counter<20) {
  //     addValue();
  //     decValue()

  // }
  
  // else if (counter <20){
  //   decValue()

  // }
  // else(
  //     counter
  // )
  return (
    <>
    <h2>Counter value change game </h2>
    <h3>counter value : {counter}</h3>

    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={decValue}>decrease value</button>
    </>
  )
}

export default CounterComponent
