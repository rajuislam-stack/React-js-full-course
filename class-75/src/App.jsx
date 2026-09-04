//Module-4: Escape Hatches //Chapter: Referencing Values with Refs

import { useRef } from "react"
import Stopwatch from "./components/Stopwatch";


export default function App() {
  let ref = useRef(0);

 function handleClick(){
    ref.current = ref.current + 1;
    alert("You cliked " + ref.current + ' times!')
 }

  return (
    <div>
      <h2>Clicked times: {ref.current}</h2>
      <button onClick={handleClick}>
        Click Me!
       </button>

       <h1>Stop Watch:</h1>

       <Stopwatch/>
    </div>
  )
}
