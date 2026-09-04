import { useState } from "react"

export default function AddTask1({onHandleAddTask}) {
  const [text , setText] = useState('')
  return (
    <div>
      <h1>Prague Itenerary</h1>
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
