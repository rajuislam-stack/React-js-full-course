import { useState } from "react"

export default function Counter2() {
  const [score, setScore] = useState(0)
  const [hover, setHover] = useState(false)

  let className = 'counter';
  if(hover){
   className += ' hover'
  }
  return (
    <div className={className}
     onPointerEnter={e => setHover(true)}
     onPointerLeave={e=> setHover(false)}
    >
      <h2>{score}</h2>
      <button onClick={()=> setScore(score + 1)}>Add one</button>
    </div>
  )
}
