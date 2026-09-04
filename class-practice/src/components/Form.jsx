//Focusing a text input

import { useRef } from "react"

export default function Form() {
   let inputRef = useRef(null);

   function handleForm(){
     inputRef.current.focus()
   }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleForm}>
        Click to focus
      </button>
    </div>
  )
}
