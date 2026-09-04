import { useContext } from "react"
import { RefContext } from "../../context"

export default function MyInput() {
 let inputRef = useContext(RefContext);
 
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
}
