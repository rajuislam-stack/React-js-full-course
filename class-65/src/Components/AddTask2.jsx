import { useState } from "react"

export default function AddTask2({onHandleAddTask}) {
  const [text , setText] = useState('')
  return (
    <div>
      <h1>Prague Itenerary (With Reducer)</h1>
      <input
      placeholder="Add a new task"
       type="text"
       value={text} 
       onChange={(e)=> setText(e.target.value)}
       />
      <button onClick={()=>{
         onHandleAddTask(text)
         setText('')
      }

      }>
        Add
      </button>
    </div>
  )
}
