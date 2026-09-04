//Queueing a Series of State Updates,

import { useState } from "react"

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function handleClick(){
    setNumber(n=> n + 1)        //Updater Function
    setNumber(n=> n + 1)
    setNumber(n=> n + 1)
  }
  
  function handleCounterClick(){
    setCounter(counter + 5);
    setCounter(counter + 5);
    setCounter(c => c + 5);
    setCounter(c => c + 9);
    setCounter(42);
  }

 
  return (
    <>
   <h1>{number}</h1>
   <button onClick={handleClick}>+3</button>
    <br />

    <h1>{counter}</h1>
    <button onClick={handleCounterClick}>+3</button>

    </>
  )
}



//Note: Understanding Queque (Concept)

// - React এ যখন setState (setter function) call করা হয়
// - তখন সাথে সাথে UI change হয় না ❌

// - React ওই update টাকে আগে “queue” তে রেখে দেয়
//   (মানে একটা waiting list / line)

// - একই event handler function এর সব setState একসাথে collect হয়
//   → এটাকে বলে batching

// - Handler function শেষ হওয়ার পর
//   React queue থেকে এক এক করে update process করে

// - তারপর final state বের করে
//   → এর পর render trigger করে 


//Note: Full Process of Changing UI (Clear Concept)

// Event (click) →
// Handler fn start →
// setState call (immediately change না, শুধু request) →
// সব setState queue তে জমা হয় →
// (এই সময় UI change হয় না ❌)

// Handler fn শেষ →

// React queue process করে →
// - normal value → snapshot (পুরানো value) use করে
// - updater fn → latest updated value use করে
// → final state calculate হয় এর পর,

// → Render trigger হয় →

// Render phase →
// - component function আবার call হয়
// - নতুন JSX তৈরি হয় (new snapshot)

// Commit phase →

// - যেটুকু change দরকার সেটুকু update করে

// Paint →
// - browser screen এ updated UI দেখায়