import { useState } from "react"

export default function Task({task,onUpdate, onDelete}) {
  const [isEditing , setIsEditing] = useState(false)
 
  let tastContent;

  if(isEditing){
     tastContent = (
        <>
        <input 
        type="text"
        value={task.text}
        className="border-2 rounded p-0.5"
        onChange={(e)=> onUpdate({...task, text: e.target.value}) }
         />
        <button 
        onClick={()=> setIsEditing(false)}
        className="bg-blue-500 rounded p-1 text-white"
        >
         save
        </button>
        </>
      )
  }
  else{
    tastContent = (
      <>
      <span>{task.text}</span>
      <button
       onClick={()=> setIsEditing(true)}
       className="bg-green-500 p-1 text-white rounded"
       >
        Edit
        </button>
      </>
    )
  }

  return (
    <div className="flex items-center gap-2 mt-3">
      <input 
      type="checkbox"
      checked = {task.done} 
      onChange={(e)=> onUpdate({...task, done: e.target.checked})}
      />
      {tastContent}
      <button
       className="bg-red-500 p-1 rounded text-white"
       onClick={()=> onDelete(task)}
      >
       Delete
       </button>
    </div>
  )
}
