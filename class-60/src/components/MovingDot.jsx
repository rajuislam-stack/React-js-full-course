//Updating Objects in State(Part-1)

import { useState } from "react"

export default function MovingDot() {
   const [position,setPosition] = useState({x:0, y:0});

  return (
    <div 
    onPointerMove={(e)=>{
       setPosition({
        x: e.clientX,
        y: e.clientY
       })
    }}

    style={{border:'2px',
      borderStyle:'solid', 
      borderColor:'red', 
      width:'600px', 
      height:'400px',
      position:'relative'
    }}
    >
      <div
      style={{
        width:20,
        height:20,
        backgroundColor:'red',
        borderRadius:'50%',
        position:'absolute',
        transform:`translate(${position.x}px,${position.y}px)`,
        left:position.x,
        top: position.y

      }}
       >
        
      </div>
    </div>
  )
}
