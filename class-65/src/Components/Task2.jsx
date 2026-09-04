import { useState } from "react"

export default function Task2({task,handleTextChange,handleDelete}) {
  const [isEditing, setIsEditing] = useState(false)

  if(isEditing){
    return (
      <div>
        <label>
        <input
       type="checkbox" 
       checked ={task.done}
       onChange={(e)=> handleTextChange({...task, done: e.target.checked})}
      />

       <input 
      type="text"
      value={task.text}
      onChange={(e)=> handleTextChange({...task, text: e.target.value})}
       />
      </label>{' '}

       <button onClick={(e)=> {
           setIsEditing(false)

       }}>
        Save
      </button>{' '}

      <button onClick={()=> handleDelete(task.id)}>
        Delete
      </button>

      </div>
    )
  }


  return (
    <div>
      <label>
        <input
       type="checkbox" 
       checked ={task.done}
       onChange={(e)=> handleTextChange({...task, done: e.target.checked})}
      />
      {task.text}
      </label>{' '}

      <button onClick={()=> setIsEditing(true)}>
        Edit
      </button>{' '}

      <button onClick={()=> handleDelete(task.id)}>
        Delete
      </button>
    </div>
  )
}
