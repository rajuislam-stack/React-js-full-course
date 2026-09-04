//Same component at the same position preserves state 

import { useState } from "react"
import Counter1 from "./Counter1"

export default function App1() {
  const [isFancy, setIsFancy] = useState(false)
  return (
    <div>
      {isFancy ? (
       <Counter1 isFancy={true}/>
      ):(
        <Counter1 isFancy = {false}/>
      )}
  
      <label >
        <input 
        type="checkbox" 
        checked = {isFancy}
        onChange={(e)=> setIsFancy(e.target.checked)}
         />
         Change fancy styling
      </label>
    </div>
  )
}
