//Different components at the same position reset state 

import { useState } from "react";
import Counter2 from "./Counter2";

export default function App2() {
  const [isPause, setIsPause] = useState(false)
  return (
    <div>
       { isPause ? <p>See you later</p>: <Counter2/>}
      <label>
        <input 
        type="checkbox" 
        checked = {isPause}
        onChange={(e)=> setIsPause(e.target.checked)}
        />
      Take a break
      </label>
    </div>
  )
}
