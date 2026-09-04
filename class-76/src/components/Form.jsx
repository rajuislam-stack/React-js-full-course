import { useRef } from "react"

export default function Form() {
  let myRef = useRef(null);

   function handleFocus(){      
    myRef.current.focus();
   }
 
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleFocus}>Click to focus</button>
    </div>
  )
}

