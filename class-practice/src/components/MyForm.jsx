//Accessing another component’s DOM nodes 

import MyInput from "./MyInput";
import { RefContext } from "../../context";
import { useRef } from "react";

export default function MyForm() {
  let inputRef = useRef(null);


 function handleClick(){

   inputRef.current.focus()
 }

  return (
    <div>
       <RefContext value = {inputRef}>
        <MyInput/>
       </RefContext>
      <button onClick={handleClick}>
        Click to focus
      </button>
    </div>
  )
}
