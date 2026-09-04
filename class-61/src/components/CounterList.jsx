//Replacing items in an array

import { useState } from "react";

const initialCounters = [0, 0 , 0];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index){
    let nextCounters = counters.map((c,i)=>{
      if(i === index){
      return c + 1;
      }
      else{
         return c;
      }
     })

     setCounters(nextCounters);
  }

  return (
    <div>
      <ul>
       {
       counters.map((counter,i) => 
          <li key={i}>
            {counter}{' '}
            <button onClick={()=>{
               handleIncrementClick(i)
            }}>
              +1
            </button>
          </li>
        )
       }
      </ul>
    </div>
  )
}


//Note: For Replacing

//1. avoid (mutates the array)
//splice(), arr[i] = ... assignment

//2. prefer (returns a new array)
// map()
