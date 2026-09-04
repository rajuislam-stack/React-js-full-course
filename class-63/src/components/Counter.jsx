//Preserving and Resetting State 

import { useState } from "react"

export default function Counter() {
  const [score, setScore] = useState(0);
  const [hover , setHover] = useState(false)

  let className = 'counter'
  if(hover){
    className += ' hover'
  }
 
  return (
    <div 
    className={className}
    onPointerEnter={()=> setHover(true)}
    onPointerLeave={()=> setHover(false)}
        
    >
     <h2>{score}</h2>
     <button onClick={()=> setScore(score + 1)}>
      Add <br /> on
     </button>
    </div>
  )
}
