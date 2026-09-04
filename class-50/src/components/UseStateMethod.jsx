//Updating the Screen

import { useState } from "react";

export default function UseStateMethod(){
  const [count,setCount] = useState(0); 
  function clickHandler1(){
     setCount(count + 1)
  }

  function clickHandler2(){
    setCount(count - 1);
  }
  
 return (
  <>
  <h1>You clicked {count} times</h1>
  <button onClick={clickHandler1}>increment </button>
  <button onClick={clickHandler2}>decrement</button>
  </>
 )
}


//Note: State is data that can change over time. It can be a number, string, array, or object depending on how we use it. When the state value is updated, the component re-renders automatically.

//Here:

//useState → is a function (hook)

// count → is the state (data)

// setCount → is a function to update the state


// Hooks 

//Functions starting with "use" are called Hooks. useState is a built-in Hook provided by React.