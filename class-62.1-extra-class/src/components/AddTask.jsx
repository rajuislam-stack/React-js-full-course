import { useState } from "react"

export default function AddTask({onAddTask}) {
  const [text, setText ] = useState('')
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">To Do App</h1>
      <div className="flex gap-2">
        <input
         type="text" 
        placeholder="Add Task" 
        className="border-2 rounded p-2" 
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button 
        className="rounded p-1 bg-blue-500 text-white"
        onClick={()=> {
          onAddTask(text);
          setText('');
        } }
         
        >
          Add
          </button>
      </div>
    </div>
  )
}
