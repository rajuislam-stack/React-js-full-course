import { useState } from "react"

export default function Counter3({person}) {
  const [score, setScore] = useState(0)
  const [hover, setHover] = useState(false)
  let className = 'counter3';
  if(hover){
    className += " hover"
  }
  return (
    <div className={className}
       onPointerEnter={()=> setHover(true)}
       onPointerLeave={()=> setHover(false)}
    >
      <h2>{person}'s score: {score}</h2>
      <button onClick={()=> setScore(score + 1)}>Add one</button>
    </div>
  )
}
