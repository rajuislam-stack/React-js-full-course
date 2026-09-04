//Resetting state at the same position 

import { useState } from "react";
import Counter3 from "./Counter3";

export default function ScoreBoard() {
  const [isPlayerA, setIsPlayerA] = useState(true)
  return (
    <div>
      {/* This is a problem */}

      {/* {
        isPlayerA ? (
          <Counter3 person='Taylor'/>
        ):(
          <Counter3 person='Sarah'/>
        )
      } */}

       {/*Solution-01: Render components in different positions*/}
       
       {/* {isPlayerA && <Counter3 person='Taylor'/> }  
       {!isPlayerA && <Counter3 person='Sarah'/> } */}


       {/*Solution-02: Resetting state with a key*/}

      { isPlayerA ? (
        <Counter3 key='Taylor' person={'Taylor'}/>
      ):(
        <Counter3  key= 'Sarah' person={'Sarah'}/>
      )}
        


      <button onClick={()=> setIsPlayerA(!isPlayerA)}>Next player</button>
    </div>
  )
}
