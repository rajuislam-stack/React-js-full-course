import { useRef } from "react";
import MyInput from "./MyInput";

export default function MyForm() {
  let myInputRef = useRef(null);

  function handleClick(){
     myInputRef.current.focus()
  }

  return (
    <>
    <h1>Accessing another component's node</h1>
      <MyInput ref={myInputRef}/>
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}
